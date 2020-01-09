import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:folf/models/invite.dart';
import 'package:folf/models/user.dart';

class QueryService {
  static final db = Firestore.instance;

  static Future<List<User>> getUsers() async {
    QuerySnapshot returnData = await db.collection("users").getDocuments();

    List<User> users = returnData.documents
        .map((document) => User.fromMap(document.data))
        .toList();

    return Future<List<User>>.value(users);
  }

  static Future<List<Invite>> getInvites(String userId) async {
    QuerySnapshot userQuerySnap = await db
        .collection("users")
        .where("uid", isEqualTo: userId)
        .limit(1)
        .getDocuments();

    if (userQuerySnap != null && userQuerySnap.documents.length > 0) {
      List invitedGames = userQuerySnap.documents[0].data["invitedGames"];
      List<String> gameIds =
          invitedGames.map((dynamic invitedGame) => invitedGame["gameId"]);

      QuerySnapshot gamesQuerySnap = await db
          .collection("games")
          .where(FieldPath.documentId, whereIn: gameIds)
          .getDocuments();

      List<String> courseIds = gamesQuerySnap.documents
          .map((DocumentSnapshot docSnap) => docSnap.data["course"]);

      QuerySnapshot courseQuerySnap = await db
          .collection("courses")
          .where(FieldPath.documentId, whereIn: courseIds)
          .getDocuments();

      Map<String, String> courseIdToCourseName;
      // finish implementing courseIdtoCourseName
      // then we can map gameIds to CourseNames in the thingy below 

      return List<Invite>.generate(invitedGames.length, (int i) {
        String date = invitedGames[i]["date"];
        String gameId = invitedGames[i]["gameId"];
        String ownerId = invitedGames[i]["ownerId"];
        String ownerName = userQuerySnap.documents[0].data["username"];

      });
    }

    return [];
  }
}
