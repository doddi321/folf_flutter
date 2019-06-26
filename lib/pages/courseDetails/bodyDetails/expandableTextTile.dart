import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:folf/constants/myColors.dart';

class ExpandableTextTile extends StatefulWidget {
  _ExpandableTextTileState createState() => _ExpandableTextTileState();
}

class _ExpandableTextTileState extends State<ExpandableTextTile> {

  bool isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      child: InkWell(
        onTap: () {
          setState(() {
           isExpanded = !isExpanded; 
          });
        },
        child: Container(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              SizedBox(
                height: 10,
              ),
              Container(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Um völlinn",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
              ),
              Container(
                padding: EdgeInsets.only(left: 15, right: 15, top: 5),
                child: Text(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat bing bong is the ding dong of the isng song.",
                  style: TextStyle(fontSize: 14, color: MyColors.textGrey),
                  textAlign: TextAlign.justify,
                  maxLines: isExpanded ? 1000 : 4,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Align(
                alignment: Alignment.centerRight,
                child: Container(
                    padding: EdgeInsets.only(right: 15),
                    child: Icon(
                      isExpanded ? Icons.keyboard_arrow_up : Icons.keyboard_arrow_down,
                      color: MyColors.textGrey,
                    )),
              )
            ],
          ),
        ),
      ),
    );
  }
}
