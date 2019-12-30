import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class GameModel{
  List<SelectedPlayerModel> players;
  CourseModel course;
  String gameId;
  String date;
  String ownerId;

  GameModel({@required this.players, @required this.course, this.date, this.gameId, this.ownerId});

   Map<String, dynamic> toJson() =>
  {
    'players': List.generate(players.length, (index) => players[index].toJson()),
    'course': course.cid,
    'ownerId': ownerId
  };
}