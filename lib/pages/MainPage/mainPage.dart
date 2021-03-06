import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:folf/constants/myIcons.dart';
import 'package:folf/pages/MainPage/InvitesPage.dart';
import 'package:folf/pages/MainPage/courses/coursesPage.dart';
import 'package:folf/pages/MainPage/scoreBoardsPage.dart';
import 'package:folf/pages/MainPage/userPage.dart';
import 'package:folf/widgets/CustomScaffold.dart';
import 'package:line_icons/line_icons.dart';

class MainPage extends StatefulWidget {
  MainPageState createState() => MainPageState();
}

class MainPageState extends State<MainPage> {
  int _bottomNavigationIndex = 0;

  static const COURSES = 0;
  static const LIKED = 1;
  static const SCOREBOARDS = 2;
  static const USER = 3;
  static const INVITES = 4;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
        appBar: AppBar(
          title: Text("Courses"),
        ),
        backgroundColor: Color(0xFFF5F5F5),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _bottomNavigationIndex,
          onTap: (index) {
            setState(() {
              _bottomNavigationIndex = index;
            });
          },
          type: BottomNavigationBarType.fixed,
          items: <BottomNavigationBarItem>[
            BottomNavigationBarItem(
                icon: Icon(MyIcons.basket), title: Text("Courses")),
            BottomNavigationBarItem(
                icon: Icon(LineIcons.heart_o), title: Text("Liked")),
            BottomNavigationBarItem(
                icon: Icon(LineIcons.clipboard), title: Text("Scoreboards")),
            BottomNavigationBarItem(
                icon: Icon(Icons.person_outline), title: Text("User")),
            BottomNavigationBarItem(
                icon: Icon(Icons.markunread_mailbox), title: Text("Invites"))
          ],
        ),
        body: _buildBody());
  }

  _buildBody() {
    switch (_bottomNavigationIndex) {
      case COURSES:
        return CoursesPage();

      case USER:
        return UserPage();

      case SCOREBOARDS:
        return ScoreBoardsPage();

      case INVITES:
        return InvitesPage();
    }

    return Container(child: Text("data"));
  }
}
