import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/widgets/courseImageContainer.dart';
import 'package:folf/widgets/starDisplay.dart';
import 'package:line_icons/line_icons.dart';

class HeadDetails extends StatelessWidget {
  final CourseModel course;

  HeadDetails({this.course});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          CourseImageContainer(
            heroTag: course.cid,
            imageUrl: course.thumbnail,
            leftCornerWidget: _imageNr(),
            height: 150,
          ),
          _buildLocationContainer()
        ],
      ),
    );
  }

  Widget _imageNr() {
    return Positioned(
      bottom: 5,
      left: 5,
      child: Container(
        decoration: BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(5)),
            color: Color.fromRGBO(255, 255, 255, 0.9)),
        margin: EdgeInsets.all(5),
        padding: EdgeInsets.all(5),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              "1/3 ",
              style: TextStyle(fontSize: 16, color: Colors.black),
            ),
            Icon(
              LineIcons.image,
              size: 20,
            )
          ],
        ),
      ),
    );
  }

  _buildLocationContainer() {
    return Hero(
      tag: "headDetail",
      child: Container(
        color: Colors.white,
        child: Row(
          children: <Widget>[
            Container(
              margin: EdgeInsets.all(10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    course.name,
                    style: TextStyle(fontSize: 20),
                  ),
                  Text(
                    "Kópavogur, 10 km",
                    style: TextStyle(color: MyColors.textGrey),
                  ),
                  StarDisplay(value: 5),
                ],
              ),
            ),
            Expanded(
                child: Align(
                    alignment: FractionalOffset.centerRight,
                    child: Container(
                        padding: EdgeInsets.only(right: 20),
                        child: Image(
                          image: AssetImage('assets/images/google-maps.png'),
                          height: 48,
                        ))))
          ],
        ),
      ),
    );
  }
}
