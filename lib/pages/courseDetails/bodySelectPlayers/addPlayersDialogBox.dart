import 'package:flutter/material.dart';
import 'package:folf/constants/myColors.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:folf/providers/selectedPlayersProvider.dart';

class AddPlayerDialogBox extends StatefulWidget {
  final Function addPlayer;

  AddPlayerDialogBox({this.addPlayer});

  _AddPlayerDialogBoxState createState() => _AddPlayerDialogBoxState(addPlayer);
}

class _AddPlayerDialogBoxState extends State<AddPlayerDialogBox> {
  final _formKey = GlobalKey<FormState>();
  final textEditingController = TextEditingController();

  final Function addPlayer;
  _AddPlayerDialogBoxState(this.addPlayer);

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    textEditingController.dispose();
    super.dispose();
  }

  // 1 is for creating new player, 2 is for adding existing player, 0 is for neither
  int state = 0;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      content: Container(
        height: 180,
        child: inviteOrCreate(),
      ),
      actions: <Widget>[
        textButton("Close", true, true, () {
          Navigator.pop(context, true);
        })
      ],
    );
  }

  Widget inviteOrCreate() {
    return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Visibility(visible: state > 0, child: Text("Give new player a name")),
          textButton("Create new player", false, state == 0, () {
            setState(() {
              state = 1;
            });
          }),
          Visibility(
              visible: state != 0,
              child: Form(
                  key: _formKey,
                  child: TextFormField(
                      validator: (value) {
                        if (value.isEmpty) {
                          return "Name cannot be empty";
                        }
                        return null;
                      },
                      controller: textEditingController))),
          SizedBox(height: 10),
          textButton("Add existing player", false, state == 0, () {}),
          SizedBox(height: 10),
          textButton("Save", false, state != 0, () {
            if (_formKey.currentState.validate()) {
              addPlayer(SelectedPlayerModel(
                  name: textEditingController.text,
                  imageUrl: "",
                  userId: ""), true);
              Navigator.pop(context, true);
            }
          }),
        ]);
  }

  Widget textButton(String text, bool filled, bool visible, Function onTap) {
    return Visibility(
      visible: visible,
      child: Material(
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
                  border: Border.all(
                      color: MyColors.courseDetailOrange, width: 1))),
        ),
      ),
    );
  }
}
