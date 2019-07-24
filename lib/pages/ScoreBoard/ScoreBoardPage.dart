import 'package:flutter/material.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
import 'package:provider/provider.dart';

import 'HoleNumbers.dart';

class ScoreBoardPage extends StatefulWidget {

  final List<SelectedPlayerModel> players;
  ScoreBoardPage({this.players});

  @override
  _ScoreBoardPageState createState() => _ScoreBoardPageState(players);
}

class _ScoreBoardPageState extends State<ScoreBoardPage> {
  int selectedHole = 0;
  List<SelectedPlayerModel> players;

  _ScoreBoardPageState(this.players);

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      bottomSheet: Container(
          height: 40,
          child: HoleNumbers()),
      appBar: AppBar(
        title: Text('Guðmundarlundur'),
      ),
      backgroundColor: Color(0xFFF5F5F5),
      body: Container(
        child: Column(children: List<Widget>.generate(players.length, (index) {
          return Text(players[index].name);
        }),),
      ),
    );
  }
}


