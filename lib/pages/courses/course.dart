import 'package:flutter/material.dart';
import 'package:folf/constants/myIcons.dart';
import 'package:folf/widgets/heartButton.dart';
import 'package:folf/widgets/starDisplay.dart';
import 'package:line_icons/line_icons.dart';

class Course extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        child: Column(
          children: <Widget>[
            _buildCourseImage(),
            _buildCourseInfo(),
          ],
        ),
      ),
    );
  }

  // ------------------------ course image here ----------------------------------

  Widget _buildCourseImage() {
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
        height: 125,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[HeartButton(), _courseTitle()],
          crossAxisAlignment: CrossAxisAlignment.stretch,
        ));
  }

  Widget _courseTitle() {
    return Expanded(
      child: Align(
        alignment: FractionalOffset.bottomLeft,
        child: Container(
          margin: EdgeInsets.all(5),
          child: Text(
            "Guðmundarlundur",
            style: TextStyle(
                color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
          ),
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
            margin: EdgeInsets.only(left: 5), child: StarDisplay(value: 5)),
        VerticalDivider()
      ],
    );
  }

  Widget _basketsInfo() {
    return Row(
      children: <Widget>[
        Container(child: Text("9 holur")),
        Icon(MyIcons.basket),
        VerticalDivider(width: 0,)
      ],
    );
  }

  Widget _distanceInfo() {
    return Row(
      children: <Widget>[
        Container(padding: EdgeInsets.only(right: 5), child: Text("24 km")),
        Container(
            padding: EdgeInsets.only(right: 5), child: Icon(LineIcons.car))
      ],
    );
  }
}
