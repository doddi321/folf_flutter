import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class GameModel {
  List<SelectedPlayerModel> players;
  CourseModel course;
  String gameId;
  String date;
  String ownerId;

  GameModel(
      {@required this.players,
      @required this.course,
      this.date,
      this.gameId,
      this.ownerId});

  GameModel.fromMap(mapData, gameId, course) {
    this.players = List<SelectedPlayerModel>.generate(mapData["players"].length,
        (int i) => SelectedPlayerModel.fromMap(mapData["players"][i]));
    this.course = course;
    this.date = mapData["date"];
    this.gameId = gameId;
    this.ownerId = mapData["ownerId"] ?? [];
  }
  Map<String, dynamic> toJson() => {
        'players':
            List.generate(players.length, (index) => players[index].toJson()),
        'course': course.cid,
        'ownerId': ownerId,
        'date': date,
      };
}
