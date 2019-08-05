import 'package:cloud_firestore/cloud_firestore.dart';

// todo: kannski laga dymnamic dæmið hér betur þegar líður á þetta

class CourseModel {
  int holes;
  String name;
  String thumbnail;
  int rating;
  int oftenPlayed;
  List<dynamic> layouts;
  String description;
  String cid;
  dynamic coord;
  String mapImageUrl;

  CourseModel(
      {this.holes,
      this.name,
      this.thumbnail,
      this.rating,
      this.oftenPlayed,
      this.layouts,
      this.description,
      this.cid,
      this.coord,
      this.mapImageUrl});

  static List<CourseModel> mapToCourses(data) {
    return data.map<CourseModel>((course) {
      return CourseModel(
          cid: course.documentID,
          description: course.data["description"],
          holes: course.data["holes"],
          layouts: course.data["layouts"],
          name: course.data["name"],
          oftenPlayed: course.data["oftenPlayed"],
          rating: course.data["rating"],
          thumbnail: course.data["thumbnail"],
          coord: course.data["coord"],
          mapImageUrl: course.data["mapImageUrl"]);
    }).toList();
  }
}
