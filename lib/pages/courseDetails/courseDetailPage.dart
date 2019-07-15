import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/courseModel.dart';

import 'BodySelectCourse/BodySelectCourse.dart';
import 'bodyDetails/bodyDetails.dart';
import 'headDetails.dart';

class CourseDetailPage extends StatefulWidget {  
  final CourseModel course;
  CourseDetailPage({this.course});

  @override
  _CourseDetailPageState createState() => _CourseDetailPageState(course);
}

class _CourseDetailPageState extends State<CourseDetailPage>
    with TickerProviderStateMixin {

  AnimationController _controller;
  Animation _animation;
  int startGameButtonHeight;
  Widget widg = BodyDetails();

  final course;
  _CourseDetailPageState(this.course);

  @override
  void initState() {
    super.initState();
    startGameButtonHeight = 60;
    _controller =
        AnimationController(vsync: this, duration: Duration(milliseconds: 200));

    _animation = Tween(begin: 0.0, end: -1.0).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.fastOutSlowIn,
    ))
      ..addStatusListener(handler);
  }

  void handler(status) {
    if (status == AnimationStatus.completed) {
      _animation.removeStatusListener(handler);
      _controller.reset();
      startGameButtonHeight = 0;
      widg = BodySelectCourse(course: course,);
      _animation = Tween(begin: 1.0, end: 0.0).animate(CurvedAnimation(
        parent: _controller,
        curve: Curves.fastOutSlowIn,
      ));
      _controller.forward();
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    return Container(
        child: Scaffold(
            bottomSheet: _buildStartGameButton(),
            appBar: AppBar(
              title: Text('Guðmundarlundur'),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  HeadDetails(course: course,),
                  SizedBox(height: 5.0),
                  AnimatedBuilder(
                    animation: _controller,
                    builder: (BuildContext context, Widget child) {
                      return Transform(
                        child: widg,
                        transform: Matrix4.translationValues(
                            _animation.value * width, 0.0, 0.0),
                      );
                    },
                  )
                ],
              ),
            )));
  }

  Widget _buildStartGameButton() {
    return AnimatedBuilder(
        animation: _controller,
        builder: (BuildContext context, Widget child) {
          return Material(
            color: MyColors.courseDetailOrange,
            child: InkWell(
              onTap: () {
                _controller.forward();
              },
              child: Container(
                height: startGameButtonHeight * (_animation.value + 1),
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
        });
  }
}
