import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/playerIncreaseDecrease.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:provider/provider.dart';

import 'HoleNumbers.dart';

class ScoreBoardPage extends StatefulWidget {
  final List<SelectedPlayerModel> players;
  final CourseModel course;

  ScoreBoardPage({this.players, this.course});

  @override
  _ScoreBoardPageState createState() => _ScoreBoardPageState(players, course);
}

class _ScoreBoardPageState extends State<ScoreBoardPage> {
  List<SelectedPlayerModel> players;
  CourseModel course;

  _ScoreBoardPageState(this.players, this.course);

  @override
  void initState() {
    // only take the players that are selecte

    // initialize the hole scores for each selected player
    for (int i = 0; i < players.length; i++) {
      players[i].individualScores = List<int>.generate(course.holes, (_) => 0);
      players[i].total = 0;
    }

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    // provides the state of the game
    GameProvider gameProvider = GameProvider(
        game: GameModel(course: course, players: players), selectedHole: 0);

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
