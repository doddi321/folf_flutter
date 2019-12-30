import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
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

  static updateGamesList(
      String userId, String gameId, bool ownedGame) {
    final ownerRef = Firestore.instance.collection("users").document("Lhb7TzoppxqQpq4cwbu");

    Firestore.instance.runTransaction((Transaction transaction) async {
      DocumentSnapshot docSnap = await transaction.get(ownerRef);
      User user = User.fromMap(docSnap.data);

      if (ownedGame) {
        user.addOwnedGame(gameId);
      }
      else {
        user.addInvitedGame(gameId);
      }
      transaction.update(ownerRef, user.toJson());
    });
  }
}
