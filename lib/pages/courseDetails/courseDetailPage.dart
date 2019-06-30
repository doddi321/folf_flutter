import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/pages/courseDetails/BodySelectCourse2.dart';

import 'BodySelectCourse.dart';
import 'bodyDetails/bodyDetails.dart';
import 'headDetails.dart';

class CourseDetailPage extends StatefulWidget {
  @override
  _CourseDetailPageState createState() => _CourseDetailPageState();
}

class _CourseDetailPageState extends State<CourseDetailPage> {
  static const int _details = 0;
  static const int _selectCourse = 1;
  int _stage = 0;

  @override
  Widget build(BuildContext context) {
    Widget body = _getBody();

    return Container(
        child: Scaffold(
            bottomSheet: _buildStartButton(),
            appBar: AppBar(
              title: Text('Guðmundarlundur'),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  HeadDetails(),
                  SizedBox(height: 5.0),
                  body,
                ],
              ),
            )));
  }

  Widget _getBody() {
    switch (_stage) {
      case _details:
        return BodyDetails();
      case _selectCourse:
        return BodySelectCourse();
    }
    return Text("hellllloooo");
  }

  Widget _buildStartButton() {
    return Material(
      color: MyColors.courseDetailOrange,
      child: InkWell(
        onTap: () {
          setState(() {
            _stage = _stage == _details ? _selectCourse : _details;
          });
        },
        child: Container(
          height: 60,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                "HEFJA LEIK",
                style: TextStyle(color: Colors.white, fontSize: 16),
              )
            ],
          ),
        ),
      ),
    );
  }
}
