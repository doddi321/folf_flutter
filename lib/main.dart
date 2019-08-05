import 'package:flutter/material.dart';
import 'package:folf/pages/MainPage/mainPage.dart';
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
      initialRoute: '/mainPage',
      routes: {
        '/': (BuildContext context) => SignInPage(),
        '/signup': (BuildContext context) => SignUpPage(),
        '/mainPage': (BuildContext context) => MainPage()
      },
    );
  }
}
