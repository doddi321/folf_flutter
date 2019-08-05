import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:folf/models/user.dart';

class UserManagement {

  User _user;
  BuildContext _context;

  UserManagement(this._context);

  /*
    creates user for authentication via email and password
  */
  createNewUser(String email, String password, String username, onCreateNewUserError, onComplete) {
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
  _onCreateNewUserSuccess(userResponse) {
    _user.uid = userResponse.uid; // add user id to new user
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
}
