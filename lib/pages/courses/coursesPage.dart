import 'package:flutter/material.dart';
import 'package:folf/pages/courses/course.dart';

class CoursesPage extends StatefulWidget {
  _CoursesPageState createState() => _CoursesPageState();
}

class _CoursesPageState extends State<CoursesPage> {
  Course course = Course();

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
      appBar: AppBar(
        title: Text('Courses'),
      ),
      backgroundColor: Color(0xFFF5F5F5),
      body: ListView.separated(
        padding: EdgeInsets.all(10.0),
        itemCount: 1,
        itemBuilder: (BuildContext context, int index) {
          return course;
        },
        separatorBuilder: (BuildContext context, int index) => Container(
            margin: EdgeInsets.only(right: 10, left: 10), child: Divider()),
      ),
    ));
  }
}
