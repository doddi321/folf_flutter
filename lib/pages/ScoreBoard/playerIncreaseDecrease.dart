import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:line_icons/line_icons.dart';
import 'package:provider/provider.dart';

class PlayerIncreaseDecrease extends StatefulWidget {
  final int playerIndex;
  final int holeNr;

  PlayerIncreaseDecrease({this.playerIndex, this.holeNr});
  PlayerIncreaseDecreaseState createState() =>
      PlayerIncreaseDecreaseState(playerIndex, holeNr);
}

class PlayerIncreaseDecreaseState extends State<PlayerIncreaseDecrease> {
  int playerIndex;
  int holeNr;
  SelectedPlayerModel player;
  GameProvider gameProvider;
  bool transactionInProgress = false;

  PlayerIncreaseDecreaseState(this.playerIndex, this.holeNr);

  @override
  Widget build(BuildContext context) {
    gameProvider = Provider.of<GameProvider>(context);
    player = gameProvider.game.players[playerIndex];

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        _buildPlayerInfo(player.total, player.name),
        _buildIncreaseDecrease(player.individualScores[holeNr])
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
            setState(() {
              if (!gameProvider.transactionInProgress) {
                gameProvider.incramentScore(-1, playerIndex, holeNr);
                gameProvider.resetTransactionCountdown();
              }
            });
          },
          child: Container(
            decoration: BoxDecoration(
                color: gameProvider.transactionInProgress
                    ? Colors.grey
                    : MyColors.courseDetailOrange,
                shape: BoxShape.circle),
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
            child: gameProvider.transactionInProgress
                ? CircularProgressIndicator()
                : Text(player.individualScores[holeNr].toString(),
                    style: TextStyle(fontSize: 28))),
        InkWell(
          onTap: () {
            if (!gameProvider.transactionInProgress) {
              setState(() {
                gameProvider.incramentScore(1, playerIndex, holeNr);
                gameProvider.resetTransactionCountdown();
              });
            }
          },
          child: Container(
            decoration: BoxDecoration(
                color: gameProvider.transactionInProgress
                    ? Colors.grey
                    : MyColors.courseDetailOrange,
                shape: BoxShape.circle),
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
