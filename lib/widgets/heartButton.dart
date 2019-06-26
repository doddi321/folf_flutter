import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

class HeartButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: FractionalOffset.topRight,
      child: Container(
        margin: EdgeInsets.all(10),
        decoration: BoxDecoration(
            shape: BoxShape.circle, color: Color.fromRGBO(255, 255, 255, 0.9)),
        child: IconButton(
          iconSize: 32,
          icon: Icon(
            LineIcons.heart_o,
            color: Colors.red[300],
          ),
          onPressed: () {},
        ),
      ),
    );
  }
}
