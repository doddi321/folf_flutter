import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class SelectedPlayersProvider with ChangeNotifier {
  List<SelectedPlayerModel> players;

  SelectedPlayersProvider() {
    players = List<SelectedPlayerModel>.generate(5, (int index) {
      return SelectedPlayerModel(
          name: "doddi" + index.toString(), userId: "", imageUrl: "");
    });
  }

  SelectedPlayersProvider.copyConstructor(List<SelectedPlayerModel> players) {
    this.players = []..addAll(players);
  }

  void selectOrUnselectPlayer(SelectedPlayerModel player) {
    player.isSelected = !player.isSelected;
    notifyListeners();
  }

  void addPlayer(SelectedPlayerModel player) {
    players.add(player);
    notifyListeners();
  }

  void removePlayer(SelectedPlayerModel player) {
    for (int i = 0; i < players.length; i++) {
      if (players[i].isEqualTo(player)) {
        players.removeAt(i);
      }
    }
    notifyListeners();
  }

  void incramentScore(int incrament, int playerIndex, int holeNr) {
    if (incrament >= 0 ||
        players[playerIndex].individualScores[holeNr] > 0) {
      players[playerIndex].individualScores[holeNr] += incrament;

      players[playerIndex].total += incrament;
      notifyListeners();
    }
  }
}
