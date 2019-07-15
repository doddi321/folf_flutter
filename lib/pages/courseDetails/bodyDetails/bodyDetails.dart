import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/pages/courseDetails/bodyDetails/expandableTextTile.dart';
import 'package:folf/pages/courseDetails/bodyDetails/ratingDetails.dart';
import 'package:folf/pages/courseDetails/bodyDetails/ringInfo.dart';
import 'package:line_icons/line_icons.dart';

class BodyDetails extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          _buildCourseOverview(),
          SizedBox(height: 5,),
          ExpandableTextTile(),
          SizedBox(height: 5,),
          RatingDetails()
        ],
      ),
    );
  }

  Widget _buildCourseOverview() {
    return Container(
        color: Colors.white,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            SizedBox(height: 5.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RingInfo('baskets', '9 holur'),
                Container(
                    margin: EdgeInsets.only(left: 25, right: 22),
                    child: RingInfo('courses', '3 brautir')),
                RingInfo('100', 'oft spilaður')
              ],
            ),
            SizedBox(height: 5.0),
            Container(
              margin: EdgeInsets.only(top: 10, bottom: 10),
              padding: EdgeInsets.only(left: 20, right: 20),
              height: 50,
              child: RaisedButton(
                color: MyColors.lighBlue,
                onPressed: () {},
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(
                      "Fá yfirlitskort af vellinum ",
                      style: TextStyle(color: Colors.white),
                    ),
                    Icon(
                      LineIcons.map,
                      color: Colors.white,
                    )
                  ],
                ),
              ),
            ),
          ],
        ));
  }
}
