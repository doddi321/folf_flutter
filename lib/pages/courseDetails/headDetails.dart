import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/widgets/heartButton.dart';
import 'package:folf/widgets/starDisplay.dart';
import 'package:line_icons/line_icons.dart';

class HeadDetails extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[_buildImageContainer(), _buildLocationContainer()],
      ),
    );
  }

  Widget _buildImageContainer() {
    return Container(
        decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/images/course-standin.jpg"),
              fit: BoxFit.cover,
            ),
            borderRadius: BorderRadius.only(
                topLeft:
                    const Radius.circular(4), // 4 because card uses radius 4
                topRight: const Radius.circular(4))),
        height: 150,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[HeartButton(), _imageNr()],
          crossAxisAlignment: CrossAxisAlignment.stretch,
        ));
  }

  Widget _imageNr() {
    return Expanded(
      child: Align(
        alignment: FractionalOffset.bottomLeft,
        child: Container(
          decoration: BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5)),
              color: Color.fromRGBO(255, 255, 255, 0.9)),
          margin: EdgeInsets.all(5),
          padding: EdgeInsets.all(5),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Text("1/3 "),
              Icon(
                LineIcons.image,
                size: 20,
              )
            ],
          ),
        ),
      ),
    );
  }

  _buildLocationContainer() {
    return Container(
      color: Colors.white,
      child: Row(
        children: <Widget>[
          Container(
            margin: EdgeInsets.all(10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  "Guðmundarlundur",
                  style: TextStyle(fontSize: 20),
                ),
                Text(
                  "Kópavogur, 10 km",
                  style: TextStyle(color: MyColors.textGrey),
                ),
                StarDisplay(value: 4),
              ],
            ),
          ),
          Expanded(
              child: Align(
                  alignment: FractionalOffset.centerRight,
                  child: Container(
                      padding: EdgeInsets.only(right: 20),
                      child: Image(image: AssetImage('assets/images/google-maps.png'), height: 48,))))
        ],
      ),
    );
  }
}
