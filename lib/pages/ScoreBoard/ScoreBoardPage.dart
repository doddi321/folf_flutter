import 'package:flutter/material.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/ScoreBoard/playerIncreaseDecrease.dart';
import 'package:folf/pages/ScoreBoard/results.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:folf/widgets/CustomScaffold.dart';
import 'package:provider/provider.dart';

import 'HoleNumbers.dart';

class ScoreBoardPage extends StatefulWidget {
  ScoreBoardPage();

  @override
  _ScoreBoardPageState createState() => _ScoreBoardPageState();
}

class _ScoreBoardPageState extends State<ScoreBoardPage> {
  PageController controller;
  GameProvider gameProvider;
  int selectedHole = 0;
  bool loading;

  CourseModel course;
  List<SelectedPlayerModel> players;

  _ScoreBoardPageState();

  void onScroll() {
    // TODO
  }

  @override
  void initState() {
    loading = true;
    // initalize game
    // get stream
    // retrieve course
    // retrieve inital values for players
    // initalizeHoles()
    // remeber to set the todo thing in the streambuilder
    // rember to set loading to false
    controller = PageController()..addListener(onScroll);
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

  void slideToCorrectHole(int page) {
    controller.animateToPage(page,
        duration: const Duration(milliseconds: 400), curve: Curves.easeInOut);
  }

  Widget _buildHoleScorePage(int position) {
    return StreamBuilder<dynamic>(
      stream: null, // TODO
      initialData: null, // TODO
      builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
        if (snapshot.hasError) return Text('Error: ${snapshot.error}');

        return Padding(
          padding: EdgeInsets.only(top: 20),
          child: Column(
              children: List<Widget>.generate(players.length, (index) {
            return Container(
                padding: EdgeInsets.only(left: 20, right: 20, bottom: 25),
                child: PlayerIncreaseDecrease(
                    playerIndex: index, holeNr: position));
          })),
        );
      },
    );
  }

  Widget _buildResultsPage() {
    return Results();
  }

  Widget _buildBody() {
    return PageView.builder(
        controller: controller,
        itemCount: course.holes + 1,
        itemBuilder: (context, position) {
          bool resultTab = course.holes == position;
          return resultTab
              ? _buildResultsPage()
              : _buildHoleScorePage(position);
        },
        onPageChanged: (int page) {
          gameProvider.setSelectedHole(page);
        });
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      bottomSheet: HoleNumbers(slideToCorrectHole: slideToCorrectHole),
      appBar: AppBar(
        title: Text(course.name),
      ),
      backgroundColor: Color(0xFFF5F5F5),
      body: loading ? CircularProgressIndicator() : _buildBody(),
    );
  }
}
