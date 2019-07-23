import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:line_icons/line_icons.dart';

class BodySelectPlayers extends StatefulWidget {
  @override
  _BodySelectPlayersState createState() => _BodySelectPlayersState();
}

class _BodySelectPlayersState extends State<BodySelectPlayers> {

  List<int> selectedPlayers = [];

  List<int> getSelectedPlayers() {
    return selectedPlayers;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
                margin: EdgeInsets.only(left: 39), child: _buildSwitchButton()),
            Container(
                margin: EdgeInsets.only(left: 15),
                child: Icon(
                  Icons.person_add,
                  color: MyColors.lighBlue,
                  size: 28,
                ))
          ],
        ),
        _buildPlayerList()
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

    List<dynamic> players = List<dynamic>.generate(5, (index) {
      return {"name": "doddi" + index.toString()};
    });

    List<Widget> playerList = List<Widget>.generate(players.length, (int index) {
      return Container(margin: EdgeInsets.only(bottom: 2), child: _player(index, players[index]));
    });
    return Container(
      margin: EdgeInsets.only(left: 50, right: 50),
      child: Column(
        children: playerList,
      ),
    );
  }

  Widget _player(int index, dynamic player) {
    return Material(
      color: selectedPlayers.contains(index) ? Colors.grey[100] : Colors.white,
      child: InkWell(
        onTap: () {
          setState(() {
            if (selectedPlayers.contains(index)) {
              selectedPlayers.remove(index);
            }
            else {
              selectedPlayers.add(index);
            }
          });
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
                player["name"],
                style: TextStyle(fontSize: 20),
              ),
            ),
            Visibility(
              visible: selectedPlayers.contains(index),
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
}
