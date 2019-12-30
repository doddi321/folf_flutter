class User {
  String uid;
  String email;
  String name;
  String username;
  List<String> ownedGames = [];
  List<String> invitedGames = [];

  User(this.email, this.name, this.username, this.uid);

  Map<String, dynamic> toJson() => {
        'uid': uid,
        'email': email,
        'name': name,
        'username': username,
        'ownedGames': ownedGames,
        'invitedGames': invitedGames
      };

  User.fromMap(mapData) {
    this.uid = mapData["uid"];
    this.email = mapData["email"];
    this.name = mapData["name"];
    this.username = mapData["username"];
    this.ownedGames = mapData["ownedGames"] ?? [];
    this.invitedGames = mapData["invitedGames"] ?? [];
  }

  void addOwnedGame(String gameId) {
    ownedGames.add(gameId);
  }

  void addInvitedGame(String gameId) {
    invitedGames.add(gameId);
  }
}
