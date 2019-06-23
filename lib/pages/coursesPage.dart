import 'package:flutter/material.dart';
import 'package:folf/widgets/course.dart';

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
      backgroundColor: Colors.white,
      body: ListView.separated(
        padding: EdgeInsets.all(10.0),
        itemCount: 2,
        itemBuilder: (BuildContext context, int index) {
          return course;
        },
        separatorBuilder: (BuildContext context, int index) => const Divider(),
      ),
    ));
  }
}
