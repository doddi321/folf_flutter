import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:folf/models/user.dart';

class QueryService {
  static final databaseReference = Firestore.instance;

  static Future<List<User>> getUsers() async {
    QuerySnapshot returnData =
        await databaseReference.collection("users").getDocuments();

    List<User> users = returnData.documents
        .map((document) => User.fromMap(document.data))
        .toList();

    return Future<List<User>>.value(users);
  }
}
