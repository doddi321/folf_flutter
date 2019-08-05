import 'package:flutter/material.dart';
import 'package:folf/constants/myIcons.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/widgets/courseImageContainer.dart';
import 'package:folf/widgets/starDisplay.dart';
import 'package:line_icons/line_icons.dart';

class Course extends StatelessWidget {

  final CourseModel course;

  Course({this.course});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        child: Column(
          children: <Widget>[
            CourseImageContainer(
              heroTag: course.cid,
              imageUrl: course.thumbnail,
              leftCornerWidget: _courseTitle(),
              height: 125,
            ),
            _buildCourseInfo(),
          ],
        ),
      ),
    );
  }

  // ------------------------ course image here ----------------------------------

  Widget _courseTitle() {
    return Positioned(
      bottom: 5,
      left: 5,
      child: Text(
        course.name,
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  // ------------------------ course info here ----------------------------------

  Widget _buildCourseInfo() {
    return Container(
      color: Colors.white,
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          _ratingInfo(),
          _basketsInfo(),
          _distanceInfo(),
        ],
      ),
    );
  }

  Widget _ratingInfo() {
    return Row(
      children: <Widget>[
        Container(
            margin: EdgeInsets.only(left: 5), child: StarDisplay(value: course.rating)),
        VerticalDivider()
      ],
    );
  }

  Widget _basketsInfo() {
    return Row(
      children: <Widget>[
        Container(child: Text(course.holes.toString() + " holur")),
        Icon(MyIcons.basket),
        VerticalDivider(
          width: 0,
        )
      ],
    );
  }

  Widget _distanceInfo() {
    return Row(
      children: <Widget>[
        Container(padding: EdgeInsets.only(right: 5), child: Text("--")),
        Container(
            padding: EdgeInsets.only(right: 5), child: Icon(LineIcons.car))
      ],
    );
  }
}
