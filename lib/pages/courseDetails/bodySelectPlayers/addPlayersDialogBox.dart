import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/dropDownSearch.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';
import 'package:folf/services/queryService.dart';

class AddPlayerDialogBox extends StatefulWidget {
  final Function addPlayer;

  AddPlayerDialogBox({this.addPlayer});

  _AddPlayerDialogBoxState createState() => _AddPlayerDialogBoxState(addPlayer);
}

class _AddPlayerDialogBoxState extends State<AddPlayerDialogBox> {
  final createPlayerController = TextEditingController();
  final invitePlayerController = TextEditingController();

  final Function addPlayer;
  _AddPlayerDialogBoxState(this.addPlayer);

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    createPlayerController.dispose();
    super.dispose();
  }

  static const CREATE_OR_INVITE = 0;
  static const CREATE = 1;
  static const INVITE = 2;
  int displaying = CREATE_OR_INVITE;

  Widget getWidgetToDisplay() {
    Widget retWidget;
    if (displaying == CREATE_OR_INVITE) {
      retWidget = inviteOrCreate();
    } else if (displaying == CREATE) {
      retWidget = create();
    } else {
      retWidget = invite();
    }
    return retWidget;
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      content: Container(
        height: 200,
        child: getWidgetToDisplay(),
      ),
      actions: <Widget>[
        textButton("Close", true, () {
          Navigator.pop(context, true);
        })
      ],
    );
  }

  Widget inviteOrCreate() {
    return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          textButton("Create new player", false, () {
            setState(() {
              displaying = CREATE;
            });
          }),
          SizedBox(height: 10),
          textButton("Add existing player", false, () {
            setState(() {
              displaying = INVITE;
            });
          }),
        ]);
  }

  bool validateCreateInput() {
    String newPlayerName = createPlayerController.text;
    return newPlayerName.length != 0;
  }

  Widget invite() {
    return Column(children: <Widget>[
      DropDownSearch(),
      SizedBox(height: 10),
      textButton("Invite", false, () {})
    ]);
  }

  Widget create() {
    return Column(children: <Widget>[
      TextField(
          controller: createPlayerController,
          decoration: InputDecoration(hintText: "Input name of new player")),
      SizedBox(height: 10),
      textButton("Add", false, () {
        if (validateCreateInput()) {
          addPlayer(
              SelectedPlayerModel(
                  name: createPlayerController.text, imageUrl: "", userId: ""),
              true);
          Navigator.pop(context, true);
        }
      })
    ]);
  }

  Widget textButton(String text, bool filled, Function onTap) {
    return Material(
      color: filled ? MyColors.courseDetailOrange : Colors.white,
      child: InkWell(
        onTap: () {
          onTap();
        },
        child: Container(
            padding: EdgeInsets.all(8.0),
            child: Center(
                child: Text(
              text,
              style: TextStyle(
                  color: filled ? Colors.white : MyColors.courseDetailOrange,
                  fontSize: 14),
            )),
            decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                border:
                    Border.all(color: MyColors.courseDetailOrange, width: 1))),
      ),
    );
  }
}
