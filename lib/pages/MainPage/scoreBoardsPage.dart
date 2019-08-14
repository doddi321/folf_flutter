import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/ScoreBoard/ScoreBoardPage.dart';
import 'package:folf/services/localDatabaseService.dart';

class ScoreBoardsPage extends StatefulWidget {
  @override
  _ScoreBoardsPageState createState() => _ScoreBoardsPageState();
}

class _ScoreBoardsPageState extends State<ScoreBoardsPage> {
  List<GameModel> games;
  bool loadingGames = true;

  Future<List<GameModel>> getGames() {
    return LocalDatabaseService.instance.queryGames();
  }

  @override
  Widget build(BuildContext context) {
    getGames().then((games) {
      this.games = games;
      setState(() {
        loadingGames = false;
      });
    });

    return loadingGames
        ? Center(
            child: CircularProgressIndicator(
            backgroundColor: Colors.transparent,
          ))
        : Container(
            child: ListView.builder(
            itemCount: games.length,
            itemBuilder: (BuildContext context, int index) {
              return _GameInstance(game: games[index]);
            },
          ));
  }
}

class _GameInstance extends StatelessWidget {
  final GameModel game;

  _GameInstance({this.game});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 5),
      child: Material(
        color: MyColors.lighGreyishBlue,
        child: InkWell(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => ScoreBoardPage(
                      players: game.players, course: game.course)),
            );
          },
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(game.course.name,
                      style:
                          TextStyle(fontSize: 14, fontWeight: FontWeight.bold)),
                  SizedBox(height: 5),
                  Text(game.date, style: TextStyle(color: MyColors.textGrey)),
                  SizedBox(height: 5),
                  _buildPlayerRows(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildPlayerRows() {
    int playersPerRow = 3;
    int playerCount = game.players.length;
    int rowCount = (playerCount + playersPerRow - 1) ~/ playersPerRow;

    int whereAt = 0;
    List<Widget> rows = List<Widget>.generate(rowCount, (int index) {
      int beginIndex = whereAt;
      int endIndex = playerCount - beginIndex >= 3
          ? beginIndex + playersPerRow - 1
          : playerCount - 1;
      whereAt = endIndex + 1;
      return _buildPlayerRow(beginIndex, endIndex);
    });

    return Column(children: rows);
  }

  Widget _buildPlayerRow(int beginIndex, int endIndex) {
    int playersPerRow = endIndex - beginIndex + 1;
    return Padding(
      padding: EdgeInsets.only(bottom: 10),
      child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: List<Widget>.generate(playersPerRow,
              (int index) => _buildPlayer(game.players[index + beginIndex]))),
    );
  }

  Widget _buildPlayer(SelectedPlayerModel player) {
    return Padding(
      padding: const EdgeInsets.only(right: 16),
      child: Row(children: <Widget>[
        CircleAvatar(
            backgroundColor: Colors.grey,
            child: Icon(
              Icons.person,
              color: Colors.white,
            )),
        SizedBox(width: 5),
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
                player.name.length > 15
                    ? player.name.substring(0, 14) + "..."
                    : player.name,
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 10)),
            SizedBox(height: 5),
            Text(player.total.toString(),
                style: TextStyle(color: MyColors.textGrey))
          ],
        )
      ]),
    );
  }
}
