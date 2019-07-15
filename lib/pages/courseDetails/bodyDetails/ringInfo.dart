import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/constants/myIcons.dart';

class RingInfo extends StatelessWidget {

  final String info;
  final String text;
  RingInfo(this.info, this.text);

  @override
  Widget build(BuildContext context) {
    Widget infoIcon;

    if (info == 'baskets') {
      infoIcon = Icon(
        MyIcons.basket,
        size: 54,
        color: MyColors.courseDetailOrange,
      );
    } else if (info == 'courses') {
      infoIcon = Icon(
        MyIcons.course,
        size: 38,
        color: MyColors.courseDetailOrange,
      );
    } else {
      infoIcon = Container(
        alignment: Alignment.center,
        child: Text(
          info,
          style: TextStyle(color: MyColors.courseDetailOrange, fontSize: 26),
        ),
      );
    }

    return Column(
      children: <Widget>[
        Container(
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white,
                border:
                    Border.all(color: MyColors.courseDetailOrange, width: 2)),
            child: Container(height: 56, width: 56, child: infoIcon)),
        Text(
          text,
          style: TextStyle(color: MyColors.textGrey),
        )
      ],
    );
  }
}