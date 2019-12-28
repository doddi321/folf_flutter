class User {
  String uid;
  String email;
  String name;
  String username;

  User(this.email, this.name, this.username, this.uid);

    Map<String, dynamic> toJson() =>
    {
      'uid': uid,
      'email': email,
      'name': name,
      'username': username,
    };

    User.fromMap(mapData) {
      this.uid = mapData["uid"];
      this.email = mapData["email"];
      this.name = mapData["name"];
      this.username = mapData["username"];
    }
}