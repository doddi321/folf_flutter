import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/constants/myIcons.dart';
import 'package:line_icons/line_icons.dart';

class AnimatedLayout extends AnimatedWidget {
  final dynamic layout;
  final bool selected;
  final double offsetNr;

  static double layoutHeight = 70;

  AnimatedLayout(
      {Key key,
      Animation<double> animation,
      this.layout,
      this.selected,
      this.offsetNr})
      : super(key: key, listenable: animation);

  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable;
    Offset offset = selected
        ? Offset(0, offsetNr * animation.value)
        : Offset(offsetNr * animation.value, 0);
    return Transform.translate(offset: offset, child: _course(layout));
  }

  Widget _course(dynamic layout) {
    String difficultyText;
    Color difficultyColor;

    switch (layout["difficulty"]) {
      case 0:
        difficultyText = "Auðvelt";
        difficultyColor = Colors.greenAccent;
        break;
      case 1:
        difficultyText = "Miðlungs";
        difficultyColor = Colors.orangeAccent;
        break;
      case 2:
        difficultyText = 'Erfitt';
        difficultyColor = Colors.redAccent;
        break;
    }

    return Container(
        height: layoutHeight,
        color: Colors.white,
        padding: EdgeInsets.only(left: 10, top: 10),
        margin: EdgeInsets.only(bottom: 1),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Row(
              children: <Widget>[
                Icon(
                  Icons.flag,
                  color: difficultyColor,
                  size: 20,
                ),
                SizedBox(
                  width: 5,
                ),
                Text(
                  difficultyText,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            Container(
              height: 30,
              child: Row(
                children: <Widget>[
                  _iconInfo('baskets', layout["holes"].toString()),
                  Padding(
                    padding: const EdgeInsets.only(top: 4.0, bottom: 4.0),
                    child: VerticalDivider(
                      color: MyColors.textGrey,
                    ),
                  ),
                  _iconInfo('par', layout["par"].toString()),
                  Padding(
                    padding: const EdgeInsets.only(top: 4.0, bottom: 4.0),
                    child: VerticalDivider(
                      color: MyColors.textGrey,
                    ),
                  ),
                  _iconInfo('length', layout["length"].toString())
                ],
              ),
            )
          ],
        ),
      );
  }

  Widget _iconInfo(String info, String data) {
    String text;
    Icon icon;

    switch (info) {
      case 'baskets':
        text = data + ' holur ';
        icon = Icon(
          MyIcons.basket,
          size: 20,
          color: MyColors.textGrey,
        );
        break;
      case 'par':
        text = 'Par ' + data + ' ';
        icon = Icon(
          LineIcons.clipboard,
          size: 20,
          color: MyColors.textGrey,
        );
        break;
      case 'length':
        text = data + ' m ';
        icon = Icon(
          MyIcons.ruler,
          size: 18,
          color: MyColors.textGrey,
        );
    }

    return Row(
      children: <Widget>[
        Text(
          text,
          style: TextStyle(color: MyColors.textGrey),
        ),
        icon,
      ],
    );
  }
}
