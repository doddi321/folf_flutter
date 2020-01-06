import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/pages/ScoreBoard/ScoreBoardPage.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
import 'package:folf/services/userManagement.dart';
import 'package:folf/widgets/CustomScaffold.dart';
import 'package:provider/provider.dart';

import 'BodySelectCourse/BodySelectCourse.dart';
import 'bodyDetails/bodyDetails.dart';
import 'headDetails.dart';

class CourseDetailPage extends StatefulWidget {
  final CourseModel course;
  CourseDetailPage({this.course});

  @override
  _CourseDetailPageState createState() => _CourseDetailPageState(course);
}

class _CourseDetailPageState extends State<CourseDetailPage>
    with TickerProviderStateMixin {
  AnimationController _controllerDetailToSelectLayout;
  Animation _animDetailToSelectLayout;

  AnimationController _controllerSelectPlayerButton;

  int startGameButtonHeight;
  bool selectingPlayers = false;

  final CourseModel course;
  _CourseDetailPageState(this.course);

  SelectedPlayersProvider selectedPlayers;

  @override
  void initState() {
    super.initState();
    startGameButtonHeight = 60;

    // course detail page to select layout animation components
    _controllerDetailToSelectLayout =
        AnimationController(vsync: this, duration: Duration(milliseconds: 200));
    _animDetailToSelectLayout =
        Tween(begin: 0.0, end: -1.0).animate(CurvedAnimation(
      parent: _controllerDetailToSelectLayout,
      curve: Curves.fastOutSlowIn,
    ));

    // course select players button animation
    _controllerSelectPlayerButton =
        AnimationController(vsync: this, duration: Duration(milliseconds: 200));
  }

  @override
  void dispose() {
    _controllerDetailToSelectLayout.dispose();
    _controllerSelectPlayerButton.dispose();
    super.dispose();
  }

  void setSelectingPlayers(bool selectingPlayers) {
    setState(() {
      this.selectingPlayers = selectingPlayers;
      _controllerSelectPlayerButton.forward();
    });
  }

  @override
  Widget build(BuildContext context) {
    selectedPlayers = Provider.of<SelectedPlayersProvider>(context);

    final double width = MediaQuery.of(context).size.width;
    return Container(
        child: CustomScaffold(
            floatingActionButton: _buildSelectPlayersButton(),
            bottomSheet: _buildStartGameButton(),
            appBar: AppBar(
              title: Text(course.name),
            ),
            backgroundColor: Color(0xFFF5F5F5),
            body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  HeadDetails(
                    course: course,
                  ),
                  SizedBox(height: 5.0),
                  Stack(
                    children: <Widget>[
                      AnimatedBuilder(
                        animation: _controllerDetailToSelectLayout,
                        builder: (BuildContext context, Widget child) {
                          return Transform(
                            child: BodyDetails(course: course),
                            transform: Matrix4.translationValues(
                                _animDetailToSelectLayout.value * width,
                                0.0,
                                0.0),
                          );
                        },
                      ),
                      AnimatedBuilder(
                        animation: _controllerDetailToSelectLayout,
                        builder: (BuildContext context, Widget child) {
                          return Transform(
                            child: BodySelectCourse(
                                course: course,
                                setSelectingPlayers: setSelectingPlayers),
                            transform: Matrix4.translationValues(
                                (_animDetailToSelectLayout.value + 1) * width,
                                0.0,
                                0.0),
                          );
                        },
                      )
                    ],
                  ),
                ],
              ),
            )));
  }

  Widget _buildStartGameButton() {
    return AnimatedBuilder(
        animation: _controllerDetailToSelectLayout,
        builder: (BuildContext context, Widget child) {
          return Material(
            color: MyColors.courseDetailOrange,
            child: InkWell(
              onTap: () {
                _controllerDetailToSelectLayout.forward();
              },
              child: Container(
                height: startGameButtonHeight *
                    (_animDetailToSelectLayout.value + 1),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(
                      "HEFJA LEIK",
                      style: TextStyle(color: Colors.white, fontSize: 16),
                    )
                  ],
                ),
              ),
            ),
          );
        });
  }

  Widget _buildSelectPlayersButton() {
    return Visibility(
      visible: selectingPlayers,
      child: FloatingActionButton(
        onPressed: () {
          // provides the state of the game
          GameProvider gameProvider = GameProvider(
              game: GameModel(
                  course: course,
                  players: selectedPlayers.players
                      .where((player) => player.isSelected)
                      .toList()));

          // this is first time seeing this game so we store it in database and in cloud
          gameProvider.initalizeGame();

          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => ChangeNotifierProvider<GameProvider>(
                      builder: (_) => gameProvider, child: ScoreBoardPage())));
        },
        child: Icon(
          Icons.check,
          color: Colors.white,
        ),
        backgroundColor: MyColors.lighBlue,
      ),
    );
  }
}
