import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:cloud_functions/cloud_functions.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:folf/models/user.dart';

class UserManagement {
  User _user;
  BuildContext _context;

  UserManagement(this._context);

  static Future<bool> isUserLoggedIn() async {
    var currUser = await FirebaseAuth.instance.currentUser();
    return currUser != null;
  }

  static Future<FirebaseUser> getCurrUser() async {
    FirebaseUser currUser = await FirebaseAuth.instance.currentUser();
    return currUser;
  }

  /*
    creates user for authentication via email and password
  */
  createNewUser(String email, String password, String username,
      onCreateNewUserError, onComplete) {
    // create _user to pass data to the onSuccess method to store new user in database.
    _user = new User(email, null, username, null);
    FirebaseAuth.instance
        .createUserWithEmailAndPassword(email: email, password: password)
        .then(_onCreateNewUserSuccess)
        .catchError(onCreateNewUserError)
        .whenComplete(onComplete);
  }

  /*
    stores new user in database.
  */
  _onCreateNewUserSuccess(AuthResult userResponse) {
    _user.uid = userResponse.user.uid; // add user id to new user
    Firestore.instance
        .collection('/users')
        .add(_user.toJson())
        .then(_onStoreNewUserSuccess)
        .catchError(_onStoreNewUserError);

    Navigator.popAndPushNamed(_context, "/mainPage");
  }

  _onStoreNewUserSuccess(response) {
    print(response);
  }

  _onStoreNewUserError(e) {
    print(e);
  }

  static saveDeviceToken() async {
    FirebaseMessaging messaging = FirebaseMessaging();
    String token = await messaging.getToken();
    if (token != null) {
      FirebaseUser currUser = await getCurrUser();
      QuerySnapshot snapshot = await Firestore.instance
          .collection("users")
          .where("uid", isEqualTo: currUser.uid)
          .limit(1)
          .getDocuments();

      DocumentReference tokenRef =
          snapshot.documents[0].reference.collection("tokens").document(token);

      await tokenRef.setData({
        "token": token,
        "createdAt": FieldValue.serverTimestamp(),
        "platform": Platform.operatingSystem
      });
    }
  }

  static updateGamesList(String userId, String gameId, bool ownedGame) async {
    // for some reason I had trouble implementing the transaction part straight in the dart code
    // so I was unfortunately forced to just create a function in firebase that I delegate the transaction to
    final HttpsCallable updateGameList =
        CloudFunctions.instance.getHttpsCallable(
      functionName: 'addOwnedGame',
    );

    await updateGameList.call(<String, dynamic>{
      'userId': userId,
      'gameId': gameId,
      'ownedGame': ownedGame
    });
  }
}
