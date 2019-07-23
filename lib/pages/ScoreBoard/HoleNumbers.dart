import 'package:flutter/material.dart';

class HoleNumbers extends StatefulWidget {
  _HoleNumbersState createState() => _HoleNumbersState();
}

class _HoleNumbersState extends State<HoleNumbers> {
  int selected = 0;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: 10,
      itemBuilder: (BuildContext context, int index) {
        return Row(children: <Widget>[
          InkWell(
            onTap: () {
              setState(() {
                selected = index;
              });
            },
            child: Container(
              decoration: selected == index
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
