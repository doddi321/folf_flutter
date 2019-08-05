import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class SelectedPlayersProvider with ChangeNotifier {
  List<SelectedPlayerModel> players;

  SelectedPlayersProvider() {
    players = [];
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
}
