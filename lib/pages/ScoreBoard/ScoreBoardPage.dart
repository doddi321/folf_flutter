import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/playerIncreaseDecrease.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:provider/provider.dart';

import 'HoleNumbers.dart';

class ScoreBoardPage extends StatefulWidget {
  ScoreBoardPage();

  @override
  _ScoreBoardPageState createState() => _ScoreBoardPageState();
}

class _ScoreBoardPageState extends State<ScoreBoardPage> {
  GameProvider gameProvider;
  CourseModel course;
  List<SelectedPlayerModel> players;

  _ScoreBoardPageState();

  @override
  void initState() {
    super.initState();
  }

  void initalizeHoles() {
    for (SelectedPlayerModel player in players) {
      // initialize the scores to if it hasnt been already
      if (player.individualScores == null) {
        player.individualScores = List<int>.generate(course.holes, (_) => 0);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    gameProvider = Provider.of<GameProvider>(context);
    course = gameProvider.game.course;
    players = gameProvider.game.players;
    initalizeHoles();

    return MultiProvider(
        providers: [ChangeNotifierProvider.value(value: gameProvider)],
        child: Scaffold(
            bottomSheet: Container(
                height: 40, child: HoleNumbers(holesAmount: course.holes)),
            appBar: AppBar(
              title: Text(course.name),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: Padding(
              padding: EdgeInsets.only(top: 20),
              child: Column(
                  children: List<Widget>.generate(players.length, (index) {
                return Container(
                    padding: EdgeInsets.only(left: 20, right: 20, bottom: 25),
                    child: PlayerIncreaseDecrease(playerIndex: index));
              })),
            )));
  }
}
