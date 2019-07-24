import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class SelectedPlayersProvider with ChangeNotifier {
  List<SelectedPlayerModel> players = [];
  
  void addPlayer(SelectedPlayerModel player) {
    players.add(player);
    notifyListeners();
  }

  bool contains(SelectedPlayerModel player) {
    for (int i = 0; i < players.length; i++) {
      if (players[i].isEqualTo(player)) {
        return true;
      }
    }
    return false;
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