import 'package:cloud_firestore/cloud_firestore.dart';

class QueryService {
  static final databaseReference = Firestore.instance;

  static Future<QuerySnapshot> getUserDocs() {
    return databaseReference.collection("users").getDocuments();
  }

  static queryUsers() {
    getUserDocs().then((onValue) {
      print(onValue);
    });
  }


}
