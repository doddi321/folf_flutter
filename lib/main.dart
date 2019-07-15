import 'package:flutter/material.dart';
import 'package:folf/pages/courseDetails/courseDetailPage.dart';
import 'package:folf/pages/courses/coursesPage.dart';
import 'package:folf/pages/signin/signInPage.dart';
import 'package:folf/pages/signup/signUpPage.dart';

void main() => runApp(FolfApp());

class FolfApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          fontFamily: "roboto",
          brightness: Brightness.light,
          primaryColor: Color(0xFF2CA58D),
          accentColor: Color(0xFFFF9B42)),
      initialRoute: '/courses',
      routes: {
        '/': (BuildContext context) => SignInPage(),
        '/signup': (BuildContext context) => SignUpPage(),
        '/courses': (BuildContext context) => CoursesPage(),
      },
    );
  }
}
