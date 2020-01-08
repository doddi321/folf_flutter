import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:folf/models/gameModel.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/services/localDatabaseService.dart';
import 'package:folf/services/userManagement.dart';
import 'package:quiver/async.dart';

// manages state of a game
class GameProvider with ChangeNotifier {
  GameModel game;
  double holeScrollOffset = 0;
  int selectedHole = 0;
  int prevSelectedHole = -1;
  bool slidingToCorrect = false;
  DocumentReference _docReference;
  LocalDatabaseService localDatabaseService;
  bool userIsLoggedIn;
  CountdownTimer countdown;
  bool transactionInProgress = false;

  GameProvider({this.game});

  Future<Map<String, dynamic>> performTransaction() async {
    // update game in firebase using atomic transaction.
    return Firestore.instance.runTransaction((transaction) async {
      DocumentSnapshot docSnap = await transaction.get(_docReference);

      if (docSnap != null) {
        await transaction.update(docSnap.reference, game.toJson());
      }
    });
  }

  void resetTransactionCountdown() async {
    // cancel previous coundown
    if (countdown != null) {
      countdown.cancel();
    }

    // start new countdown
    Duration time = Duration(seconds: 2);
    countdown = CountdownTimer(time, time);
    countdown.listen((data) {
      transactionInProgress = true;
      notifyListeners();
      performTransaction().then((data) {
        transactionInProgress = false;
        notifyListeners();
      });
    });
  }

  Future<void> initalizeGame() async {
    game.players.forEach((SelectedPlayerModel player) {
      if (player.individualScores == null) {
        player.individualScores =
            List<int>.generate(game.course.holes, (_) => 0);
      }
    });

    // reference to games collection
    final collRef = Firestore.instance.collection('games');

    // returns a new document reference with auto generated id
    _docReference = collRef.document();

    FirebaseUser currUser = await UserManagement.getCurrUser();
    userIsLoggedIn = (currUser != null);

    if (userIsLoggedIn) {
      game.ownerId = currUser.uid;
      // post game to firebase and update gameId in object.
      await _docReference.setData(game.toJson());
      game.gameId = _docReference.documentID;
      print(game.gameId);
      // update owners ownerGames list
      await UserManagement.updateOwnedGamesList(game.ownerId, game.gameId);

      // extract the invitedplayers from the player list
      List<String> invitedPlayerIds = game.players
          .where((SelectedPlayerModel player) =>
              !player.fake && player.userId != game.ownerId)
          .map((SelectedPlayerModel player) => player.userId)
          .toList();

      await UserManagement.updateInvitedGamesLists(
          game.ownerId, game.gameId, invitedPlayerIds);

      // send push notification to invited players
      UserManagement.sendInvites(
          invitedPlayerIds, game.course.name, game.ownerId);

      storeGameLocally();
    } // end userIsLoggedIn
    else {
      game.ownerId = "fake";
      storeGameLocally(); // game id gets automatically generated in this case
    }
  }

  // store game locally in sqlite database
  Future<void> storeGameLocally() async {
    localDatabaseService = LocalDatabaseService.instance;
    await localDatabaseService.insertGame(game);
  }

  void incramentScore(int incrament, int playerIndex, int holeNr) {
    if (incrament >= 0 ||
        game.players[playerIndex].individualScores[holeNr] > 0) {
      game.players[playerIndex].individualScores[holeNr] += incrament;

      game.players[playerIndex].total += incrament;

      localDatabaseService = LocalDatabaseService.instance;
      localDatabaseService.updateScore(
          game.gameId,
          game.players[playerIndex].userId,
          holeNr,
          game.players[playerIndex].individualScores[holeNr]); // score
      //notifyListeners();
    }
  }

  void setSelectedHole(int hole) {
    prevSelectedHole = selectedHole;
    selectedHole = hole;
    notifyListeners();
  }

  Stream<GameModel> get gameStream {
    return Firestore.instance
        .collection("games")
        .document(game.gameId)
        .snapshots()
        .map((DocumentSnapshot docSnap) =>
            GameModel.fromMap(docSnap.data, docSnap.documentID, game.course));
  }
}
