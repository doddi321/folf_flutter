import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/pages/courseDetails/BodySelectCourse/animatedLayout.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/BodySelectPlayers.dart';

class BodySelectCourse extends StatefulWidget {
  final CourseModel course;
  final Function setSelectingPlayers;
  BodySelectCourse({@required this.course, @required this.setSelectingPlayers});

  @override
  _BodySelectCourseState createState() => _BodySelectCourseState(course, setSelectingPlayers);
}

class _BodySelectCourseState extends State<BodySelectCourse>
    with TickerProviderStateMixin {
  CourseModel course;
  Function setSelectingPlayers;
  _BodySelectCourseState(this.course, this.setSelectingPlayers);

  AnimationController _controller;
  Animation _removeAnimation;

  bool selected1 = false;
  bool selected2 = false;
  bool selected3 = false;

  List<bool> selected;

  @override
  void initState() {
    super.initState();

    selected = List<bool>.generate(course.layouts.length, (_) => false);

    _controller = AnimationController(
        duration: const Duration(milliseconds: 500), vsync: this);
    _removeAnimation = Tween(begin: 0.0, end: -1.0).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.fastOutSlowIn,
    ));
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(top: 10, bottom: 10, left: 10),
            child: AnimatedBuilder(
              animation: _controller,
              builder: (BuildContext context, Widget child) {
                return Transform.scale(
                  scale: (_removeAnimation.value + 1),
                  child: Text(
                    "Veldu braut",
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                );
              },
            ),
          ),
          _buildCourses(),
          AnimatedBuilder(
              animation: _controller,
              builder: (BuildContext context, Widget child) {
                return Transform.translate(
                    offset: Offset(width*(_removeAnimation.value+1), -AnimatedLayout.layoutHeight*(course.layouts.length-1) - 36),
                    child: BodySelectPlayers());
              })
        ],
      ),
    );
  }

  Widget _buildCourses() {

    double width = MediaQuery.of(context).size.width;
    return Column(
      children: List<Widget>.generate(course.layouts.length, (int index) {
        return InkWell(
            onTap: () {
              setState(() {
                selected.replaceRange(index, index, [true]);
                setSelectingPlayers(true);
              });
              _controller.forward();
            },
            child: AnimatedLayout(
              animation: _removeAnimation,
              layout: course.layouts[index],
              selected: selected[index],
              offsetNr: selected[index]
                  ? AnimatedLayout.layoutHeight * index + 40
                  : width,
            ));
      }),
    );
  }
}
