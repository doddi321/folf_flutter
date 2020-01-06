import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/models/user.dart';
import 'package:folf/pages/courseDetails/bodySelectPlayers/dropDownSearch.dart';

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
  bool displayErrorMsg = false;

  User user;

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
        height: 300,
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

  void setUser(User user) {
    this.user = user;
  }

  Widget invite() {
    return Column(children: <Widget>[
      DropDownSearch(setUser: setUser),
      SizedBox(height: 10),
      textButton("Add", false, () {
        if (user == null) {
          setState(() {
            displayErrorMsg = true;
          });
        } else {
          displayErrorMsg = false;
          SelectedPlayerModel player = SelectedPlayerModel(
              name: user.username, userId: user.uid, fake: false, imageUrl: "");
          addPlayer(player, false);
        }
      }),
      SizedBox(height: 5),
      displayErrorMsg
          ? Text("player does not exist", style: TextStyle(color: Colors.red))
          : Container()
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
