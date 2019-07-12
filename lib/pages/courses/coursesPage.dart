import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/pages/courseDetails/courseDetailPage.dart';
import 'package:folf/pages/courses/course.dart';
import 'package:shimmer/shimmer.dart';

class CoursesPage extends StatefulWidget {
  _CoursesPageState createState() => _CoursesPageState();
}

class _CoursesPageState extends State<CoursesPage> {
  List<CourseModel> courses;
  bool isLoading;

  // todo: ætti ég að hafa þetta í sér file þúst ehv svona eins og service og kannski mapperinn þar líka?
  Future<List<DocumentSnapshot>> getCourseDocuments() async {
    QuerySnapshot qn =
        await Firestore.instance.collection("courses").getDocuments();
    return qn.documents;
  }

  @override
  void initState() {
    isLoading = true;
    super.initState();
    getCourseDocuments().then((snapshot) {
      setState(() {
        isLoading = false;
        courses = CourseModel.mapToCourses(snapshot);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
            appBar: AppBar(
              title: Text('Courses'),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: isLoading ? _buildLoadingWidget() : _buildList()));
  }

  Widget _buildList() {
    return ListView.separated(
      padding: EdgeInsets.all(10.0),
      itemCount: courses.length,
      itemBuilder: (BuildContext context, int index) {
        return InkWell(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => CourseDetailPage(course: courses[index]),
                ),
              );
            },
            child: Course(course: courses[index]));
      },
      separatorBuilder: (BuildContext context, int index) => Container(
          margin: EdgeInsets.only(right: 10, left: 10), child: Divider()),
    );
  }

  Widget _buildLoadingWidget() {
    int offset = 0;
    int time = 2000;
    return SafeArea(
      child: ListView.builder(
        itemCount: 6,
        itemBuilder: (BuildContext context, int index) {
          offset += 5;
          time = 800 + offset;
          return Padding(
              padding: EdgeInsets.symmetric(horizontal: 15),
              child: Shimmer.fromColors(
                highlightColor: Colors.white,
                baseColor: Colors.grey[300],
                child: _loadingWidgetLayout(),
                period: Duration(milliseconds: time),
              ));
        },
      ),
    );
  }

  Widget _loadingWidgetLayout() {
    double containerWidth = 280;
    double containerHeight = 15;

    return Container(
      margin: EdgeInsets.symmetric(vertical: 7.5),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Container(
            height: 100,
            width: 100,
            color: Colors.grey,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                height: containerHeight,
                width: containerWidth,
                color: Colors.grey,
              ),
              SizedBox(height: 5),
              Container(
                height: containerHeight,
                width: containerWidth,
                color: Colors.grey,
              ),
              SizedBox(height: 5),
              Container(
                height: containerHeight,
                width: containerWidth * 0.75,
                color: Colors.grey,
              )
            ],
          )
        ],
      ),
    );
  }
}
