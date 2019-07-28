import 'package:flutter/material.dart';
import 'package:folf/providers/selectedHoleProvider.dart';
import 'package:provider/provider.dart';

class HoleNumbers extends StatefulWidget {
  final holesAmount;
  HoleNumbers({this.holesAmount});

  _HoleNumbersState createState() => _HoleNumbersState(holesAmount);
}

class _HoleNumbersState extends State<HoleNumbers> {
  int holesAmount;

  _HoleNumbersState(this.holesAmount);
  @override
  Widget build(BuildContext context) {
    SelectedHoleProvider selectedHoleProvider = Provider.of<SelectedHoleProvider>(context);

    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: holesAmount,
      itemBuilder: (BuildContext context, int index) {
        return Row(children: <Widget>[
          InkWell(
            onTap: () {
              setState(() {
                selectedHoleProvider.selectedHole = index;
              });
            },
            child: Container(
              decoration: selectedHoleProvider.selectedHole == index
                  ? BoxDecoration(
                      border: Border(
                          bottom: BorderSide(width: 5, color: Colors.black)))
                  : BoxDecoration(),
              width: 90,
              child: Center(
                child: Text(
                  (index + 1).toString(),
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
              ),
            ),
          ),
          index != 9
              ? VerticalDivider(
                  width: 0,
                  color: Colors.grey,
                )
              : Container(),
        ]);
      },
    );
  }
}
