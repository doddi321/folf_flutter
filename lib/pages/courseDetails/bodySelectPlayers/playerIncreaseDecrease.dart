import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:line_icons/line_icons.dart';
import 'package:provider/provider.dart';

class PlayerIncreaseDecrease extends StatefulWidget {
  final int playerIndex;
  PlayerIncreaseDecrease({this.playerIndex});
  PlayerIncreaseDecreaseState createState() =>
      PlayerIncreaseDecreaseState(playerIndex);
}

class PlayerIncreaseDecreaseState extends State<PlayerIncreaseDecrease> {
  int playerIndex;
  GameProvider gameProvider;

  PlayerIncreaseDecreaseState(
    this.playerIndex,
  );

  @override
  Widget build(BuildContext context) {
    gameProvider = Provider.of<GameProvider>(context);

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        _buildPlayerInfo(gameProvider.game.players[playerIndex].total,
            gameProvider.game.players[playerIndex].name),
        _buildIncreaseDecrease(gameProvider.game.players[playerIndex]
            .individualScores[gameProvider.selectedHole])
      ],
    );
  }

  Widget _buildPlayerInfo(int total, String name) {
    return Row(
      children: <Widget>[
        CircleAvatar(
            backgroundColor: Colors.grey,
            child: Icon(
              Icons.person,
              color: Colors.white,
            )),
        Padding(
          padding: EdgeInsets.only(left: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(name, style: TextStyle(fontSize: 18)),
              SizedBox(height: 5),
              Text("Total: " + total.toString(), style: TextStyle(fontSize: 12))
            ],
          ),
        )
      ],
    );
  }

  Widget _buildIncreaseDecrease(int score) {
    return Row(
      children: <Widget>[
        InkWell(
          onTap: () {
            gameProvider.incramentScore(
                -1, playerIndex, gameProvider.selectedHole);
          },
          child: Container(
            decoration: BoxDecoration(
                color: MyColors.courseDetailOrange, shape: BoxShape.circle),
            child: Padding(
              padding: const EdgeInsets.all(4.0),
              child: Icon(
                LineIcons.minus,
                color: Colors.white,
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 24, right: 24),
          child: Text(
              gameProvider.game.players[playerIndex]
                  .individualScores[gameProvider.selectedHole]
                  .toString(),
              style: TextStyle(fontSize: 28)),
        ),
        InkWell(
          onTap: () {
            gameProvider.incramentScore(
                1, playerIndex, gameProvider.selectedHole);
          },
          child: Container(
            decoration: BoxDecoration(
                color: MyColors.courseDetailOrange, shape: BoxShape.circle),
            child: Padding(
              padding: const EdgeInsets.all(4.0),
              child: Icon(
                LineIcons.plus,
                color: Colors.white,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
