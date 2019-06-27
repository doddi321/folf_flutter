import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/widgets/starDisplay.dart';

class RatingDetails extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: <Widget>[_buildRatingSummary(), _reviews()],
      ),
    );
  }

  Widget _buildRatingSummary() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[_ratingText(), _starsAndReviewCount()],
        ),
        _giveRatingButton()
      ],
    );
  }

  Widget _ratingText() {
    return Container(
      padding: EdgeInsets.only(left: 10),
      child: Align(
        alignment: Alignment.bottomLeft,
        child: Text(
          "4.7",
          style: TextStyle(fontSize: 56),
        ),
      ),
    );
  }

  Widget _starsAndReviewCount() {
    return Padding(
      padding: EdgeInsets.only(bottom: 10, left: 5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          StarDisplay(
            displayNumber: false,
            value: 4,
          ),
          Row(
            children: <Widget>[
              Text(
                "123",
                style: TextStyle(color: MyColors.textGrey),
              ),
              Icon(
                Icons.person,
                size: 16,
                color: MyColors.textGrey,
              )
            ],
          )
        ],
      ),
    );
  }

  Widget _giveRatingButton() {
    return Expanded(
      child: Padding(
          padding: EdgeInsets.only(right: 20, left: 20),
          child: OutlineButton(
            padding: EdgeInsets.only(top: 15, bottom: 15),
            onPressed: () {},
            color: Colors.white,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0)),
            borderSide: BorderSide(color: Colors.greenAccent, width: 1),
            child: Text(
              "GEFA EINKUN",
              style: TextStyle(color: Colors.greenAccent),
            ),
          )),
    );
  }

  Widget _reviews() {
    List<Widget> ratings = List.generate(4, (index) {
      return Column(
        children: <Widget>[_review(), Divider()],
      );
    });
    ratings.add(_seeAllReviewsButton());
    return Column(children: ratings);
  }

  Widget _review() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.only(right: 5.0),
            child: Icon(
              Icons.supervised_user_circle,
              size: 64,
            ),
          ),
          Flexible(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  "Þórður Friðriksson",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                Row(
                  children: <Widget>[
                    StarDisplay(
                      displayNumber: false,
                      value: 4,
                    ),
                    Text(
                      " 18/07/2019",
                      style: TextStyle(color: Colors.grey),
                    ),
                  ],
                ),
                SizedBox(
                  height: 5,
                ),
                Padding(
                  padding: const EdgeInsets.only(right: 20),
                  child: Text(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    style: TextStyle(fontSize: 14, color: MyColors.textGrey),
                    textAlign: TextAlign.justify,
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _seeAllReviewsButton() {
    return Container(
      margin: EdgeInsets.only(bottom: 80),
      child: OutlineButton(
        padding: EdgeInsets.only(top: 15, bottom: 15, left: 10, right: 10),
        onPressed: () {},
        color: Colors.white,
        shape:
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
        borderSide: BorderSide(color: MyColors.courseDetailOrange, width: 1),
        child: Text(
          "SjÁ ÖLL UMMÆLI",
          style: TextStyle(color: MyColors.courseDetailOrange),
        ),
      ),
    );
  }
}
