import 'package:flutter/material.dart';

class DropDownSearch extends StatefulWidget {
  DropDownSearch({Key key}) : super(key: key);

  @override
  _DropDownSearchState createState() => _DropDownSearchState();
}

class _DropDownSearchState extends State<DropDownSearch> {
  static const int MAX = 3;
  static const double RESULT_ITEM_HEIGHT = 35;

  bool displaySearchResults = false;

  Widget searchField(BuildContext context) {
    Color color = Theme.of(context).primaryColor;

    BorderRadiusGeometry borderRadius = displaySearchResults
        ? BorderRadius.vertical(top: Radius.circular(5))
        : BorderRadius.all(Radius.circular(5));

    return Container(
      decoration: BoxDecoration(
          borderRadius: borderRadius,
          border: Border.all(width: 2, color: color)),
      child: TextField(
        onChanged: (String searchString) {
          // TODO
        },
          decoration: InputDecoration(
        hintText: "Player name",
        border: InputBorder.none,
        contentPadding: EdgeInsets.all(8),
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
        child: Scrollbar(
          child: SingleChildScrollView(
              child: Column(
            children: List<Widget>.generate(6, (index) {
              Border border = index == 0
                  ? Border()
                  : Border(top: BorderSide(color: Colors.grey));
              return Container(
                  padding: EdgeInsets.all(8),
                  decoration: BoxDecoration(border: border),
                  height: RESULT_ITEM_HEIGHT,
                  width: double.infinity,
                  child: Text("data"));
            }),
          )),
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      searchField(context),
      displaySearchResults ? searchResults(context) : Container()
    ]);
  }
}
