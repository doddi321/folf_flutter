import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/widgets/CustomScaffold.dart';
import 'BodySelectCourse.dart';
import 'headDetails.dart';

class SelectLayoutPage extends StatefulWidget {
  final CourseModel course;
  SelectLayoutPage({this.course});

  @override
  _SelectLayoutPageState createState() => _SelectLayoutPageState(course);
}

class _SelectLayoutPageState extends State<SelectLayoutPage> {
  final course;
  _SelectLayoutPageState(this.course);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: CustomScaffold(
            appBar: AppBar(
              title: Text(course.name),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  HeadDetails(
                    course: course,
                  ),
                  SizedBox(height: 5.0),
                  BodySelectCourse()
                ],
              ),
            )));
  }
}
