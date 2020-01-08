import 'package:flutter/material.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';

// kinda unfortunate naming, this is player model, too lazy to change naming.
class SelectedPlayerModel {
  String name;
  String imageUrl = "";
  String userId;
  int total = 0;
  bool isSelected = false;
  bool fake = true;
  List<dynamic> individualScores;
  SelectedPlayerModel(
      {@required this.name, this.imageUrl, @required this.userId, this.fake});

  bool isEqualTo(SelectedPlayerModel player2) {
    return player2.userId == this.userId && this.name == player2.name;
  }

  SelectedPlayerModel.fromMap(mapData) {
    this.name = mapData["name"];
    this.imageUrl = mapData["imageUrl"];
    this.userId = mapData["userId"];
    this.total = mapData["total"];
    this.isSelected = mapData["isSelected"];
    this.individualScores = mapData["individualScores"];
    this.fake = this.userId == "fake";
  }

  Map<String, dynamic> toJson() => {
        "name": name,
        "imageUrl": imageUrl,
        "userId": userId,
        "total": total,
        "isSelected": isSelected,
        "individualScores": individualScores,
      };
}
