import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:folf/services/userManagement.dart';

class UserPage extends StatefulWidget {
  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  bool loggedIn;
  bool loading;

  @override
  void initState() {
    super.initState();
    loading = true;
    UserManagement.isUserLoggedIn().then((bool loggedIn) {
      setState(() {
        this.loggedIn = loggedIn;
        loading = false;
      });
    });
  }

  Widget _buildLoading() {
    return Container(child: CircularProgressIndicator());
  }

  Widget _buildLogout() {
    return Container(
        child: RaisedButton(
      onPressed: () {
        signOut(context);
      },
      child: Text("Logout"),
    ));
  }

  Widget _buildLoggedOut() {
    return Container(child: Text("logged out"));
  }

  @override
  Widget build(BuildContext context) {
    return loading
        ? _buildLoading()
        : loggedIn ? _buildLogout() : _buildLoggedOut();
  }

  static Future<void> signOut(BuildContext context) async {
    await FirebaseAuth.instance.signOut().then((_) {
      Navigator.popAndPushNamed(context, "/");
    });
  }
}
