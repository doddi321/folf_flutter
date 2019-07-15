import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';

class BodySelectPlayers extends StatelessWidget {
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
                  size: 24,
                ))
          ],
        ),
        _buildPlayerList()
      ],
    );
  }

  Widget _buildSwitchButton() {
    double halfWidth = 90;
    double height = 15;
    Color blueColor = MyColors.lighBlue;
    return Row(
      children: <Widget>[
        Container(
          width: halfWidth,
          height: height,
          child: Center(
              child: Text(
            "ALL",
            style: TextStyle(color: Colors.white, fontSize: 8),
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
              style: TextStyle(color: blueColor, fontSize: 8),
            )),
            decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(
                  color: blueColor,
                ),
                borderRadius:
                    BorderRadius.horizontal(right: Radius.circular(2))))
      ],
    );
  }

  Widget _buildPlayerList() {
    return Container(
      width: 240,
      color: Colors.white,
      child: Column(
        children: <Widget>[Row(children: <Widget>[Icon(Icons.person), Text("persona")],)],
      ),
    );
  }
}
