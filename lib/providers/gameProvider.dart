import 'package:flutter/material.dart';
import 'package:folf/models/gameModel.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:folf/services/localDatabaseService.dart';
import 'package:folf/services/userManagement.dart';

// manages state of a game
class GameProvider with ChangeNotifier {
  GameModel game;
  int selectedHole;
  DocumentReference _docReference;
  LocalDatabaseService localDatabaseService;
  bool userIsLoggedIn;

  GameProvider({this.game, this.selectedHole}) {
    // reference to games collection
    final collRef = Firestore.instance.collection('games');

    // returns a new document reference with auto generated id
    _docReference = collRef.document();

    UserManagement.isUserLoggedIn().then((userIsLoggedIn) {
      
      if (userIsLoggedIn) {
        // post game to firebase and update gameId in object.
        _docReference.setData(game.toJson()).then((doc) {
          game.gameId = _docReference.documentID;
        }).catchError((error) {
          print(error);
        });
      }

      // stores game locally with id of the documen if logged in, else auto generates an id
      storeGameLocally();
    });
  }

  void setSelectedHole(int selectedHole) {
    this.selectedHole = selectedHole;
    notifyListeners();
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

      // if user is logged in -> update game in firebase using atomic transaction.
      if (userIsLoggedIn) {
        Firestore.instance.runTransaction((transaction) async {
          DocumentSnapshot docSnap = await transaction.get(_docReference);
          await transaction.update(docSnap.reference, game.toJson());
        });
      } else {}
      notifyListeners();
    }
  }
}
