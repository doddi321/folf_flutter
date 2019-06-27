import 'package:flutter/material.dart';

class StarDisplay extends StatelessWidget {
  final int value;
  final bool displayNumber;
  const StarDisplay({this.value = 0, this.displayNumber = true});

  @override
  Widget build(BuildContext context) {
    int starColor = 0xFFFF881A;
    List<Widget> rating = List.generate(5, (index) {
      return Icon(
        index < value ? Icons.star : Icons.star_border,
        color: Color(starColor),
        size: 16,
      );
    });
    
    if (displayNumber) {
      rating.insert(
          0,
          Text(
            value.toString(),
            style: TextStyle(color: Color(starColor)),
          ));
    }
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: rating,
    );
  }
}
