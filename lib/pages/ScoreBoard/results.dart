import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/ScoreBoard/playerScoreBoard.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:provider/provider.dart';

class Results extends StatefulWidget {
  @override
  _ResultsState createState() => _ResultsState();
}

class _ResultsState extends State<Results> {
  GameProvider gameProvider;
  List<SelectedPlayerModel> players;
  double cellSize = 35;

  Widget _buildPlayerInfo(SelectedPlayerModel player) {
    return Row(children: <Widget>[
      CircleAvatar(
          backgroundColor: Colors.grey,
          child: Icon(
            Icons.person,
            color: Colors.white,
          )),
      Padding(
          padding: EdgeInsets.only(left: 8),
          child: Text(player.name, style: TextStyle(fontSize: 20)))
    ]);
  }

  Widget _buildPlayerTotalScore(SelectedPlayerModel player) {
    return Text(player.total.toString(),
        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold));
  }

  Widget _buildPlayerHeader(SelectedPlayerModel player) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        _buildPlayerInfo(player),
        _buildPlayerTotalScore(player)
      ],
    );
  }


  Widget _buildPlayerResults(SelectedPlayerModel player) {
    int holes = gameProvider.game.course.holes;
    return Container(
      margin: EdgeInsets.all(20),
      child: Column(
        children: <Widget>[
          _buildPlayerHeader(player),
          SizedBox(height: 5),
          PlayerScoreBoard(holes: holes, player: player),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    gameProvider = Provider.of<GameProvider>(context);
    players = gameProvider.game.players;
    return ListView.separated(
      itemCount: players.length + 1,
      itemBuilder: (context, index) => index != players.length
          ? _buildPlayerResults(players[index])
          : Container(height: 100),
      separatorBuilder: (context, index) => Divider(color: Colors.grey),
    );
  }
}
