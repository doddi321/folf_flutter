import 'package:flutter/material.dart';
import 'package:folf/models/user.dart';
import 'package:folf/services/queryService.dart';

class DropDownSearch extends StatefulWidget {
  final Function(User user) setUser;

  DropDownSearch({Key key, this.setUser}) : super(key: key);

  @override
  _DropDownSearchState createState() => _DropDownSearchState();
}

class _DropDownSearchState extends State<DropDownSearch> {
  static const int MAX = 3;
  static const double RESULT_ITEM_HEIGHT = 35;

  bool displaySearchResults = false;
  TextEditingController textController = TextEditingController();
  List<User> filteredUsers = [];
  List<User> allUsers;

  void filterUsers(String filterString) {
    filteredUsers = allUsers.where((user) {
      bool usernameContains =
          user.username == null ? false : user.username.contains(filterString);
      bool emailContains =
          user.email == null ? false : user.email.contains(filterString);

      return usernameContains || emailContains;
    }).toList();
  }

  User getUser(String string) {
    for (int i = 0; i < allUsers.length; i++) {
      String email = allUsers[i].email;
      String username = allUsers[i].username;

      bool emailEquals = email != null && email == string;
      bool usernameEquals = username != null && username == string;

      if (emailEquals || usernameEquals) {
        return allUsers[i];
      }
    }
    return null;
  }

  Widget searchField(BuildContext context) {
    Color color = Theme.of(context).primaryColor;

    BorderRadiusGeometry borderRadius =
        displaySearchResults && filteredUsers.length > 0
            ? BorderRadius.vertical(top: Radius.circular(5))
            : BorderRadius.all(Radius.circular(5));

    return Container(
      decoration: BoxDecoration(
          borderRadius: borderRadius,
          border: Border.all(width: 2, color: color)),
      child: TextField(
          controller: textController,
          onChanged: (String searchString) {
            setState(() {
              displaySearchResults = true;
            });

            // initalize search list
            if (allUsers == null) {
              QueryService.getUsers().then((users) {
                setState(() {
                  allUsers = users;
                  filterUsers(searchString);
                  widget.setUser(getUser(searchString));
                });
              });
            } else {
              filterUsers(searchString);
              widget.setUser(getUser(searchString));
            }
          },
          decoration: InputDecoration(
            hintText: "Player username or email",
            border: InputBorder.none,
            contentPadding: EdgeInsets.all(8),
          )),
    );
  }

  String userToString(User user) {
    String text = "";
    if (user.username != null && user.email != null) {
      text = user.username + " - " + user.email;
    } else if (user.username == null && user.email != null) {
      text = user.email;
    } else if (user.username != null && user.email == null) {
      text = user.username;
    } else {
      text = "";
    }
    return text;
  }

  Widget searchResultContent() {
    return Scrollbar(
      child: SingleChildScrollView(
          child: Column(
        children: List<Widget>.generate(filteredUsers.length, (index) {
          Border border = index == 0
              ? Border()
              : Border(top: BorderSide(color: Colors.grey));
          return InkWell(
            onTap: () {
              textController.text =
                  userToString(filteredUsers[index]).split(" - ")[0];
              widget.setUser(getUser(textController.text));

              setState(() {
                displaySearchResults = false;
              });
            },
            child: Container(
                padding: EdgeInsets.all(8),
                decoration: BoxDecoration(border: border),
                height: RESULT_ITEM_HEIGHT,
                width: double.infinity,
                child: Text(userToString(filteredUsers[index]))),
          );
        }),
      )),
    );
  }

  Widget searchResults(BuildContext context) {
    BorderSide borderSide =
        BorderSide(width: 2, color: Theme.of(context).primaryColor);

    return Container(
        decoration: BoxDecoration(
            border: Border(
          bottom: borderSide,
          left: borderSide,
          right: borderSide,
        )),
        height: 3 * RESULT_ITEM_HEIGHT,
        child: searchResultContent());
  }

  Widget searchResultLoader() {
    return Container(
      margin: EdgeInsets.all(10),
      alignment: Alignment.center,
      width: 25,
      height: 25,
      child: CircularProgressIndicator(),
    );
  }

  Widget displayingWidget(BuildContext contexct) {
    if (displaySearchResults) {
      if (allUsers == null) {
        return searchResultLoader();
      } else if (filteredUsers.length > 0) {
        return searchResults(context);
      }
    }

    return Container();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
        children: <Widget>[searchField(context), displayingWidget(context)]);
  }
}
