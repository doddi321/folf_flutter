class Invite {
  String date;
  String gameId;
  String ownerId;
  String ownerName;
  String courseName;

  Invite({this.date, this.gameId, this.ownerId,this.ownerName, this.courseName});

  Invite.fromMap(dynamic mapData) {
    this.date = mapData["date"];
    this.gameId = mapData["gameId"];
    this.ownerId = mapData["ownerId"]:
    this.ownerName = mapData["ownerName"];
  }
}
