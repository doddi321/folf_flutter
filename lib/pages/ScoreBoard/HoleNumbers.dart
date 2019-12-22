import 'package:flutter/material.dart';
import 'package:folf/providers/gameProvider.dart';
import 'package:provider/provider.dart';

class HoleNumbers extends StatefulWidget {
  final void Function(int page) slideToCorrectHole;
  HoleNumbers({this.slideToCorrectHole});

  _HoleNumbersState createState() => _HoleNumbersState();
}

class _HoleNumbersState extends State<HoleNumbers> {
  final double itemWidth = 90;
  GameProvider gameProvider;
  ScrollController scrollController;

  Widget _buildHoleNr(int index, bool resultTab) {
    Widget nrWidget = Text((index + 1).toString(),
        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20));

    Widget resultWidget = Icon(Icons.flag);

    Widget child = resultTab ? resultWidget : nrWidget;

    return InkWell(
      onTap: () {
        widget.slideToCorrectHole(index);
      },
      child: Stack(
        children: <Widget>[
          Container(
            width: itemWidth,
            child: Center(
              child: child,
            ),
          ),
          index == gameProvider.selectedHole
              ? Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    color: Colors.black,
                    width: itemWidth,
                    height: 5,
                  ))
              : Container()
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // get state provider for game
    gameProvider = Provider.of<GameProvider>(context);
    scrollController =
        ScrollController(initialScrollOffset: gameProvider.holeScrollOffset);

    // function that gets run after build completes, handles setting scrollOffset and auto scrolling
    WidgetsBinding.instance.addPostFrameCallback((_) {
      scrollHandler();
    });

    return Container(
      height: 40,
      child: ListView.builder(
        controller: scrollController,
        scrollDirection: Axis.horizontal,
        itemCount: gameProvider.game.course.holes + 1,
        itemBuilder: (BuildContext context, int index) {
          // if last index then return result tab
          bool resultTab = gameProvider.game.course.holes == index;

          return Row(children: <Widget>[
            _buildHoleNr(index, resultTab),
            index != gameProvider.game.course.holes
                ? VerticalDivider(
                    width: 0,
                    color: Colors.grey,
                  )
                : Container(),
          ]);
        },
      ),
    );
  }

  int nrOfHolesDisplayed() {
    double width = MediaQuery.of(context).size.width;
    return width ~/ itemWidth;
  }

  String getScrollDir() {
    if (gameProvider.selectedHole == gameProvider.prevSelectedHole + 1) {
      return "right";
    }
    return "left";
  }

  bool nextScrollPage(int holesDisplayed, String direction) {
    if (direction == "right") {
      return (gameProvider.selectedHole % holesDisplayed) == 0;
    } else {
      return (gameProvider.prevSelectedHole % holesDisplayed) == 0;
    }
  }

  void scrollToNextPage() {
    scrollController.animateTo(gameProvider.holeScrollOffset,
        curve: Curves.linear, duration: Duration(milliseconds: 100));
  }

  double getScrollOffset(int holesDisplayed, String dir) {
    if (dir == "right") {
      return gameProvider.selectedHole * itemWidth;
    }
    return (gameProvider.selectedHole - holesDisplayed + 1) * itemWidth;
  }

  void scrollHandler() {
    // nr of holes displayed at each moment
    int holesDisplayed = nrOfHolesDisplayed();

    String scrollDir = getScrollDir();

    // if it is time to scroll then scroll to next "scroll page"
    if (nextScrollPage(holesDisplayed, scrollDir)) {
      // set new scroll offset
      gameProvider.holeScrollOffset =
          getScrollOffset(holesDisplayed, scrollDir);

      scrollToNextPage();
    }
  }
}
