import 'package:folf/models/review.dart';

class Course {
  int holes;
  String name;
  String image;
  int rating;
  int oftenPlayed;
  int layouts;
  String description;
  List<Review> reviews;
  String location;
  String cid;

  Course({this.holes, this.name, this.image, this.rating, this.oftenPlayed, this.layouts, this.description, this.reviews, this.location, this.cid});

}