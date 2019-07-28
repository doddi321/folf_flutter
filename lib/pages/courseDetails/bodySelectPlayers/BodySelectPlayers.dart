import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
import 'package:line_icons/line_icons.dart';
import 'package:provider/provider.dart';

import 'addPlayersDialogBox.dart';

class BodySelectPlayers extends StatefulWidget {
  @override
  _BodySelectPlayersState createState() => _BodySelectPlayersState();
}

class _BodySelectPlayersState extends State<BodySelectPlayers> {
  SelectedPlayersProvider selectedPlayers;

  @override
  Widget build(BuildContext context) {
    selectedPlayers = Provider.of<SelectedPlayersProvider>(context);

    return Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
                margin: EdgeInsets.only(left: 39), child: _buildSwitchButton()),
            Container(
                margin: EdgeInsets.only(left: 15),
                child: _buildPlayerIconButton())
          ],
        ),
        _buildPlayerList(),
      ],
    );
  }

  Widget _buildSwitchButton() {
    double halfWidth = 110;
    double height = 20;
    Color blueColor = MyColors.lighBlue;
    return Row(
      children: <Widget>[
        Container(
          width: halfWidth,
          height: height,
          child: Center(
              child: Text(
            "ALL",
            style: TextStyle(color: Colors.white, fontSize: 12),
          )),
          decoration: BoxDecoration(
              color: blueColor,
              border: Border.all(
                color: blueColor,
              ),
              borderRadius: BorderRadius.horizontal(left: Radius.circular(2))),
        ),
        Container(
            width: halfWidth,
            height: height,
            child: Center(
                child: Text(
              "RECENT",
              style: TextStyle(color: blueColor, fontSize: 12),
            )),
            decoration: BoxDecoration(
                border: Border.all(
                  color: blueColor,
                ),
                borderRadius:
                    BorderRadius.horizontal(right: Radius.circular(2))))
      ],
    );
  }

  Widget _buildPlayerList() {
    List<Widget> playerList =
        List<Widget>.generate(selectedPlayers.players.length, (int index) {
      return Container(
          margin: EdgeInsets.only(bottom: 2),
          child: _player(selectedPlayers.players[index]));
    });
    return Container(
      margin: EdgeInsets.only(left: 50, right: 50),
      child: Column(
        children: playerList,
      ),
    );
  }

  Widget _player(SelectedPlayerModel player) {
    return Material(
      color: player.isSelected ? Colors.grey[100] : Colors.white,
      child: InkWell(
        onTap: () {
          selectedPlayers.selectOrUnselectPlayer(player);
        },
        child: Container(
          padding: EdgeInsets.only(top: 8, bottom: 8, left: 10),
          child: Row(children: <Widget>[
            CircleAvatar(
                backgroundColor: Colors.grey,
                child: Icon(
                  Icons.person,
                  color: Colors.white,
                )),
            SizedBox(
              width: 10,
            ),
            Expanded(
              child: Text(
                player.name,
                style: TextStyle(fontSize: 20),
              ),
            ),
            Visibility(
              visible: player.isSelected,
              child: Padding(
                padding: EdgeInsets.only(right: 10),
                child: Icon(
                  LineIcons.check,
                  color: MyColors.lighBlue,
                ),
              ),
            )
          ]),
        ),
      ),
    );
  }

  Widget _buildPlayerIconButton() {
    return GestureDetector(
      onTap: () {
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AddPlayerDialogBox(addPlayer: selectedPlayers.addPlayer);
            });
      },
      child: Icon(
        Icons.person_add,
        color: MyColors.lighBlue,
        size: 28,
      ),
    );
  }
}
