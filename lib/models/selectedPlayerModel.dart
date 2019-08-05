import 'package:flutter/material.dart';

class SelectedPlayerModel {
  String name;
  String imageUrl;
  String userId;
  int total = 0;
  bool isSelected = false;
  List<int> individualScores;
  SelectedPlayerModel({@required this.name, this.imageUrl, this.userId});

  bool isEqualTo(SelectedPlayerModel player2) {
    return player2.userId == this.userId && this.name == player2.name;
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
