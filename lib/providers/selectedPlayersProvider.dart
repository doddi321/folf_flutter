import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/services/localDatabaseService.dart';

class SelectedPlayersProvider with ChangeNotifier {
  List<SelectedPlayerModel> players = [];

  SelectedPlayersProvider() {
    // get players from database
    LocalDatabaseService.instance.queryDisplayedPlayers().then((players) {
      this.players = players;
      notifyListeners();
    });
  }

  SelectedPlayersProvider.copyConstructor(List<SelectedPlayerModel> players) {
    this.players = []..addAll(players);
  }

  void selectOrUnselectPlayer(SelectedPlayerModel player) {
    player.isSelected = !player.isSelected;
    notifyListeners();
  }

  void addPlayer(SelectedPlayerModel player, bool fake) async {
    // add to local database
    String playerId = await LocalDatabaseService.instance.insertPlayer(player, fake);
    player.userId = playerId;
    // add to list
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
