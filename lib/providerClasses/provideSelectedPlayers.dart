import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class ProvideSelectedPlayers with ChangeNotifier {
  List<SelectedPlayerModel> selectedPlayers = [];
  
  void addPlayer(SelectedPlayerModel player) {
    selectedPlayers.add(player);
    notifyListeners();
  }

  void removePlayer(SelectedPlayerModel player) {
    for (int i = 0; i < selectedPlayers.length; i++) {
      if (selectedPlayers[i] == player) {
        selectedPlayers.removeAt(i);
      }
    }
    notifyListeners();
  }
}