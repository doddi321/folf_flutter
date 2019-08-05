// manages state of a game
import 'package:flutter/material.dart';
import 'package:folf/models/gameModel.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class GameProvider with ChangeNotifier {
  GameModel game;
  int selectedHole;
  DocumentReference _docReference;

  GameProvider({this.game, this.selectedHole}) {
    final collRef = Firestore.instance.collection('games'); // reference to games collection
    _docReference = collRef.document(); // returns a new document reference with auto generated id

    // post game to firebase and update gameId in object.
    _docReference.setData(game.toJson()).then((doc) {
      game.gameId = _docReference.documentID;
    }).catchError((error) {
      print(error);
    });
  }

  void setSelectedHole(int selectedHole) {
    this.selectedHole = selectedHole;
    notifyListeners();
  }

  void incramentScore(int incrament, int playerIndex, int holeNr) {
    if (incrament >= 0 ||
        game.players[playerIndex].individualScores[holeNr] > 0) {
      game.players[playerIndex].individualScores[holeNr] += incrament;

      game.players[playerIndex].total += incrament;

      // update game in firebase using atomic transaction.
      Firestore.instance.runTransaction((transaction) async {
        DocumentSnapshot docSnap = await transaction.get(_docReference);
        await transaction.update(docSnap.reference, game.toJson());
      });

      notifyListeners();
    }
  }
}
