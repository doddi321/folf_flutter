import 'package:flutter/material.dart';

import 'HoleNumbers.dart';

class ScoreBoardPage extends StatefulWidget {
  @override
  _ScoreBoardPageState createState() => _ScoreBoardPageState();
}

class _ScoreBoardPageState extends State<ScoreBoardPage> {
  int selectedHole = 0;

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
        child: Text("hello"),
      ),
    );
  }
}


