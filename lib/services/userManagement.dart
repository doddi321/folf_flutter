import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:folf/models/user.dart';

class UserManagement {
  createNewUser(String email, String password) {
    FirebaseAuth.instance
        .createUserWithEmailAndPassword(email: email, password: password)
        .then(_onCreateNewUserSuccess)
        .catchError(_onCreateNewUserError);
  }

  // stores newUser in database.
  _onCreateNewUserSuccess(user) {
    User newUser = User(user.email, null, null, user.uid);
    Firestore.instance
        .collection('/users')
        .add(newUser.toJson())
        .then(_onStoreNewUserSuccess)
        .catchError(_onStoreNewUserError);
  }

  _onCreateNewUserError(e) {
    print(e);
  }

  _onStoreNewUserSuccess(response) {
    print(response);
  }

  _onStoreNewUserError(e) {
    print(e);
  }
}
