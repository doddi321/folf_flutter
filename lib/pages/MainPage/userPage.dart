import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class UserPage extends StatefulWidget {
  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
          child: RaisedButton(
        onPressed: () {
          signOut(context);
        },
        child: Text("Logout"),
      )),
    );
  }

  static Future<void> signOut(BuildContext context) async {
    await FirebaseAuth.instance.signOut().then((_) {
      Navigator.popAndPushNamed(context, "/");
    });
  }
}
