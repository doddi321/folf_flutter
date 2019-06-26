import 'package:flutter/material.dart';

import 'bodyDetails/bodyDetails.dart';
import 'headDetails.dart';

class CourseDetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
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
