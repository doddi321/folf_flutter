import 'package:flutter/material.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/services/localDatabaseService.dart';
class ScoreBoardsPage extends StatelessWidget {

  List<GameModel> games;

  Future<List<GameModel>> getGames() {
    return LocalDatabaseService.instance.queryGames();
  }

  @override
  Widget build(BuildContext context) {
    getGames().then((games) {
      this.games = games;
    });

    return Container(
      child: Text("hello"),
    );
  }
}