import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import 'heartButton.dart';

class CourseImageContainer extends StatelessWidget {
  final Widget leftCornerWidget;
  final double height;
  CourseImageContainer({this.leftCornerWidget, this.height});

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/images/course-standin.jpg"),
              fit: BoxFit.cover,
            ),
            color: Colors.greenAccent,
            borderRadius: BorderRadius.only(
                topLeft:
                    const Radius.circular(4), // 4 because card uses radius 4
                topRight: const Radius.circular(4))),
        height: height,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[HeartButton(), leftCornerWidget],
          crossAxisAlignment: CrossAxisAlignment.stretch,
        ));
  }
}