import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/providers/selectedHoleProvider.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
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

  SelectedPlayersProvider selectedPlayers;
  SelectedHoleProvider selectedHoleProvider;

  PlayerIncreaseDecreaseState(
    this.playerIndex,
  );

  @override
  Widget build(BuildContext context) {
    selectedPlayers = Provider.of<SelectedPlayersProvider>(context);
    selectedHoleProvider = Provider.of<SelectedHoleProvider>(context);

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        _buildPlayerInfo(selectedPlayers.players[playerIndex].total,
            selectedPlayers.players[playerIndex].name),
        _buildIncreaseDecrease(selectedPlayers.players[playerIndex]
            .individualScores[selectedHoleProvider.selectedHole])
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
            selectedPlayers.incramentScore(
                -1, playerIndex, selectedHoleProvider.selectedHole);
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
              selectedPlayers.players[playerIndex]
                  .individualScores[selectedHoleProvider.selectedHole]
                  .toString(),
              style: TextStyle(fontSize: 28)),
        ),
        InkWell(
          onTap: () {
            selectedPlayers.incramentScore(
                1, playerIndex, selectedHoleProvider.selectedHole);
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
