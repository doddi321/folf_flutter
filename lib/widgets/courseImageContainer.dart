import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import 'heartButton.dart';

class CourseImageContainer extends StatelessWidget {
  final Widget leftCornerWidget;
  final double height;
  final String imageUrl;
  final String heroTag;
  CourseImageContainer({this.leftCornerWidget, this.height, this.imageUrl, this.heroTag});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Hero(
          tag: heroTag,
          child: Container(
              decoration: BoxDecoration(
                  image: DecorationImage(
                    image: CachedNetworkImageProvider(
                        imageUrl),
                    fit: BoxFit.cover,
                  ),
                  color: Colors.greenAccent,
                  borderRadius: BorderRadius.only(
                      topLeft: const Radius.circular(
                          4), // 4 because card uses radius 4
                      topRight: const Radius.circular(4))),
              height: height,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[HeartButton()],
                crossAxisAlignment: CrossAxisAlignment.stretch,
              )),
        ),
        leftCornerWidget
      ],
    );
  }
}
