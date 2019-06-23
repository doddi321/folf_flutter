import 'package:flutter/material.dart';
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

  Widget _buildCourseImage() {
    return Container(
        decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/course-standin.jpg"),
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
          children: <Widget>[
            Align(
              alignment: FractionalOffset.topRight,
              child: Container(
                margin: EdgeInsets.all(10),
                decoration:
                    BoxDecoration(shape: BoxShape.circle, color: Color.fromRGBO(
                255, 255, 255, 0.9)),
                child: IconButton(
                  iconSize: 32,
                  icon: Icon(
                    LineIcons.heart_o,
                    color: Colors.red[300],
                  ),
                  onPressed: () {},
                ),
              ),
            ),
            Expanded(
              child: Align(
                alignment: FractionalOffset.bottomLeft,
                child: Container(
                  margin: EdgeInsets.all(5),
                  child: Text(
                    "Guðmundarlundur",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
          ],
          crossAxisAlignment: CrossAxisAlignment.stretch,
        ));
  }

  Widget _buildCourseInfo() {
    return Container(
      color: Colors.blue,
      height: 50,
      child: Row(),
    );
  }
}
