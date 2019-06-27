import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';

import 'bodyDetails/bodyDetails.dart';
import 'headDetails.dart';

class CourseDetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
            bottomSheet: Material(
              color: MyColors.courseDetailOrange,
              child: InkWell(
                onTap: () {},
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
            ),
            appBar: AppBar(
              title: Text('Guðmundarlundur'),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  HeadDetails(),
                  SizedBox(height: 5.0),
                  BodyDetails()
                ],
              ),
            )));
  }
}
