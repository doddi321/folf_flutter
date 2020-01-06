import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:folf/constants/myIcons.dart';

class CustomScaffold extends StatelessWidget {
  final Widget floatingActionButton;
  final Widget bottomSheet;
  final Widget bottomNavigationBar;
  final PreferredSizeWidget appBar;
  final Color backgroundColor;
  final Widget body;
  const CustomScaffold(
      {this.floatingActionButton,
      this.bottomSheet,
      this.bottomNavigationBar,
      this.appBar,
      this.backgroundColor,
      this.body})
      : super();

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
          floatingActionButton: floatingActionButton,
          bottomSheet: bottomSheet,
          bottomNavigationBar: bottomNavigationBar,
          appBar: appBar,
          backgroundColor: backgroundColor,
          body: NotificationHandler(child: body)),
    );
  }
}

class NotificationHandler extends StatefulWidget {
  final Widget child;

  NotificationHandler({Key key, this.child}) : super(key: key);

  @override
  _NotificationHandlerState createState() => _NotificationHandlerState();
}

class _NotificationHandlerState extends State<NotificationHandler> {
  FirebaseMessaging _firebaseMessaging = FirebaseMessaging();

  Widget inviteText() {
    return Text("Game Invite", style: TextStyle(fontWeight: FontWeight.bold));
  }

  Widget inviteDetail({String text, IconData icon}) {
    return Row(children: <Widget>[Icon(icon), SizedBox(width: 5), Text(text)]);
  }

  Widget _buildInviteMessage() {
    return Container(
        child: Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        inviteText(),
        SizedBox(height: 10),
        inviteDetail(text: "xxx", icon: Icons.person),
        Divider(),
        inviteDetail(text: "xxx", icon: MyIcons.basket),
        Divider(),
        inviteDetail(text: "xxx", icon: Icons.timer),
      ],
    ));
  }

  Widget _buildInviteDialogBox() {
    return AlertDialog(content: _buildInviteMessage(), actions: [
      FlatButton(child: Text("go to invite"), onPressed: () {}),
      FlatButton(
          child: Text("close", style: TextStyle(color: Colors.red)),
          onPressed: () {
            Navigator.of(context).pop();
          }),
    ]);
  }

  @override
  void initState() {
    super.initState();
    _firebaseMessaging.configure(
      onMessage: (Map<String, dynamic> message) async {
        print("onMessage: $message");

        showDialog(
            context: context,
            builder: (BuildContext context) {
              return _buildInviteDialogBox();
            });
      },
      onLaunch: (Map<String, dynamic> message) async {
        print("onLaunch: $message");
      },
      onResume: (Map<String, dynamic> message) async {
        print("onResume: $message");
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: widget.child,
    );
  }
}
