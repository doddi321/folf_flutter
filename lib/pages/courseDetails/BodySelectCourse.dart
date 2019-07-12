import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/constants/myIcons.dart';
import 'package:line_icons/line_icons.dart';

class BodySelectCourse extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(top: 20, bottom: 10, left: 10),
            child: Text(
              "Veldu braut",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
          _buildCourses(),  
        ],
      ),
    );
  }

  Widget _buildCourses() {
    List<Widget> courses = List.generate(3, (index) {
      return _course(index);
    });
    return Column(children: courses);
  }

  Widget _course(int difficulty) {
    String difficultyText;
    Color difficultyColor;

    switch (difficulty) {
      case 0:
        difficultyText = "Auðvelt";
        difficultyColor = Colors.greenAccent;
        break;
      case 1:
        difficultyText = "Miðlungs";
        difficultyColor = Colors.orangeAccent;
        break;
      case 2:
        difficultyText = 'Erfitt';
        difficultyColor = Colors.redAccent;
        break;
    }

    return Container(
      color: Colors.white,
      padding: EdgeInsets.only(left: 10, top: 10),
      margin: EdgeInsets.only(bottom: 1),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Row(
            children: <Widget>[
              Icon(Icons.flag, color: difficultyColor,),
              SizedBox(width: 5,),
              Text(
                difficultyText,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, ),
              ),
            ],
          ),
          Container(
            height: 30,
            child: Row(
              children: <Widget>[
                _iconInfo('baskets', '10'),
                Padding(
                  padding: const EdgeInsets.only(top: 4.0, bottom: 4.0),
                  child: VerticalDivider(
                    color: MyColors.textGrey,
                  ),
                ),
                _iconInfo('par', '30'),
                Padding(
                  padding: const EdgeInsets.only(top: 4.0, bottom: 4.0),
                  child: VerticalDivider(
                    color: MyColors.textGrey,
                  ),
                ),
                _iconInfo('length', '678')
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _iconInfo(String info, String data) {
    String text;
    Icon icon;

    switch (info) {
      case 'baskets':
        text = data + ' holur ';
        icon = Icon(
          MyIcons.basket,
          size: 20,
          color: MyColors.textGrey,
        );
        break;
      case 'par':
        text = 'Par ' + data + ' ';
        icon = Icon(
          LineIcons.clipboard,
          size: 20,
          color: MyColors.textGrey,
        );
        break;
      case 'length':
        text = data + ' m ';
        icon = Icon(
          MyIcons.ruler,
          size: 18,
          color: MyColors.textGrey,
        );
    }

    return Row(
      children: <Widget>[
        Text(
          text,
          style: TextStyle(color: MyColors.textGrey),
        ),
        icon,
      ],
    );
  }
}
