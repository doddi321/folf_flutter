import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';

class PlayerScoreBoard extends StatefulWidget {
  final int holes;
  final SelectedPlayerModel player;
  PlayerScoreBoard({Key key, this.holes, this.player}) : super(key: key);

  @override
  _PlayerScoreBoardState createState() => _PlayerScoreBoardState(holes, player);
}

class _PlayerScoreBoardState extends State<PlayerScoreBoard> {
  double cellSize = 35;
  double borderSize = 2;
  int page = 0;
  int holesPerPage = 9;
  ScrollController scrollController = ScrollController();
  int holes;
  SelectedPlayerModel player;
  double width;
  double height;
  int totalPages;

  _PlayerScoreBoardState(this.holes, this.player) {
    width = holesPerPage * cellSize + borderSize;
    height = 3 * cellSize + borderSize;
    totalPages = (this.holes / holesPerPage).ceil();
  }

  Widget _buildHoleRow(int page) {
    int startHole = page * holesPerPage + 1;
    List<String> holeValues = List<String>.generate(holesPerPage, (index) {
      int holeValue = index + startHole;
      return holeValue > holes ? "-" : holeValue.toString();
    });
    return Row(
        children: List<Widget>.generate(holesPerPage, (index) {
      return Container(
          height: cellSize,
          width: cellSize,
          child: Center(
              child: Text(holeValues[index],
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.white))));
    }));
  }

  Widget _buildParRow() {
    return Row(
        children: List<Widget>.generate(holesPerPage, (index) {
      return Container(
          height: cellSize,
          width: cellSize,
          child:
              Center(child: Text("-", style: TextStyle(color: Colors.white))));
    }));
  }

  Widget _buildScoreRow(int page) {
    int startHole = page * holesPerPage + 1;
    return Row(
        children: List<Widget>.generate(holesPerPage, (index) {
          int holeValue = startHole + index;
          String text = holeValue > holes ? "-" : player.individualScores[holeValue-1].toString(); 
      return Container(
          height: cellSize,
          width: cellSize,
          child: Center(
              child: Text(text,
                  style: TextStyle(color: Colors.white))));
    }));
  }

  Widget _buildScoreBoardScores(int index) {
    return Container(
      decoration: BoxDecoration(
          color: Colors.cyan,
          border: Border(
              left: BorderSide(width: 1, color: Color(0xFFFC4DBE0)),
              right: BorderSide(width: 1, color: Color(0xFFFC4DBE0)))),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          _buildHoleRow(index),
          _buildParRow(),
          _buildScoreRow(index)
        ],
      ),
    );
  }

  Widget _buildDot(bool active) {
    double radius = 8;
    return Container(
      margin: EdgeInsets.symmetric(horizontal: borderSize),
      width: radius,
      height: radius,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: active ? Colors.cyan : Colors.grey,
      ),
    );
  }

  Widget _buildDotIndicator() {
    int dotCount = totalPages < 2 ? 0 : totalPages;
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List<Widget>.generate(dotCount, (index) {
        bool active = index == page;
        return _buildDot(active);
      }),
    );
  }

  Widget _buildScoreBoardHeaders() {
    return Container(
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: List<Widget>.generate(3, (index) {
            String text = "Hole";
            if (index == 1) {
              text = "Par";
            } else if (index == 2) {
              text = "Score";
            }
            return Container(
                height: cellSize, child: Center(child: Text(text)));
          })),
    );
  }

  Widget _buildPlayerScoreboard() {
    return Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _buildScoreBoardHeaders(),
            SizedBox(width: 5),
            Container(
              width: width,
              height: height,
              child: NotificationListener<ScrollNotification>(
                onNotification: (notif) {
                  if (notif is ScrollEndNotification) {
                    setState(() {
                      page = scrollController.offset ~/ width;
                    });
                  }
                },
                child: ListView.builder(
                  controller: scrollController,
                  scrollDirection: Axis.horizontal,
                  physics: PageScrollPhysics(),
                  itemCount: totalPages,
                  itemBuilder: (context, index) {
                    return _buildScoreBoardScores(index);
                  },
                ),
              ),
            )
          ],
        ),
        SizedBox(height: 5),
        _buildDotIndicator()
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: _buildPlayerScoreboard(),
    );
  }
}
