import 'package:flutter/material.dart';

class SelectedPlayerModel {
  String name;
  String imageUrl;
  String userId;
  SelectedPlayerModel({@required this.name, this.imageUrl,this.userId});

  bool isEqualTo(SelectedPlayerModel player2) {
    return player2.userId == this.userId;
  }
}