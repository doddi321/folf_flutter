import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/pages/courseDetails/bodyDetails/expandableTextTile.dart';
import 'package:folf/pages/courseDetails/bodyDetails/ratingDetails.dart';
import 'package:folf/pages/courseDetails/bodyDetails/ringInfo.dart';
import 'package:line_icons/line_icons.dart';
import 'package:photo_view/photo_view.dart';

class BodyDetails extends StatelessWidget {
  final CourseModel course;

  BodyDetails({this.course});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          _buildCourseOverview(context),
          SizedBox(
            height: 5,
          ),
          ExpandableTextTile(course: course),
          SizedBox(
            height: 5,
          ),
          RatingDetails()
        ],
      ),
    );
  }

  Widget _buildCourseOverview(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            SizedBox(height: 5.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RingInfo('baskets', course.holes.toString() + ' holur'),
                Container(
                    margin: EdgeInsets.only(left: 25, right: 22),
                    child: RingInfo('courses', course.layouts.length.toString() + ' brautir')),
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
                onPressed: () {
                  showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        if (course.mapImageUrl == null ||
                            course.mapImageUrl == "") {
                          return AlertDialog(content: Text("No map image of course exists."));
                        }
                        return AlertDialog(
                          contentPadding: EdgeInsets.all(0),
                          content: Container(
                              width: MediaQuery.of(context).size.width,
                              child: PhotoView(
                                imageProvider: CachedNetworkImageProvider(
                                    course.mapImageUrl),
                              )),
                        );
                      });
                },
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
