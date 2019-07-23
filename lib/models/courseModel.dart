import 'package:cloud_firestore/cloud_firestore.dart';

// todo: kannski laga dymnamic dæmið hér betur þegar líður á þetta

class CourseModel {
  int holes;
  String name;
  List<dynamic> images;
  String thumbnail;
  String courseMap;
  int rating;
  int oftenPlayed;
  List<dynamic> layouts;
  String description;
  List<dynamic> reviews;
  GeoPoint location;
  String cid;

  CourseModel(
      {this.holes,
      this.name,
      this.images,
      this.thumbnail,
      this.courseMap,
      this.rating,
      this.oftenPlayed,
      this.layouts,
      this.description,
      this.reviews,
      this.location,
      this.cid});

  static List<CourseModel> mapToCourses(data) {
    return data.map<CourseModel>((course) {
      return CourseModel(
          cid: course.data["cid"],
          courseMap: course.data["courseMap"],
          description: course.data["description"],
          holes: course.data["holes"],
          images: course.data["images"],
          layouts: course.data["layouts"],
          location: course.data["location"],
          name: course.data["name"],
          oftenPlayed: course.data["oftenPlayed"],
          rating: course.data["rating"],
          reviews: course.data["reviews"],
          thumbnail: course.data["thumbnail"]);
    }).toList();
  }
}
