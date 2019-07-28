import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/playerIncreaseDecrease.dart';
import 'package:folf/providers/selectedHoleProvider.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
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
  SelectedHoleProvider selectedHoleProvider;

  _ScoreBoardPageState(this.players, this.course);

  @override
  void initState() {
    // only take the players that are selected
    players = players.where((player) => player.isSelected).toList();

    // initialize the hole scores for each selected player
    for (int i = 0; i < players.length; i++) {
      players[i].individualScores = List<int>.generate(course.holes, (_) => 0);
    }

    selectedHoleProvider = SelectedHoleProvider(0);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return MultiProvider(
        providers: [
          ChangeNotifierProvider.value(
            value: SelectedPlayersProvider.copyConstructor(players),
          ),
          ChangeNotifierProvider.value(
            value: selectedHoleProvider,
          )
        ],
        child: Scaffold(
            bottomSheet: Container(
                height: 40,
                child: HoleNumbers(holesAmount: course.holes)),
            appBar: AppBar(
              title: Text('Guðmundarlundur'),
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
