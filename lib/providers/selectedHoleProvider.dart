import 'package:flutter/material.dart';

class SelectedHoleProvider with ChangeNotifier {
  int _selectedHole;
  SelectedHoleProvider(this._selectedHole);

  set selectedHole(int selectedHole) {
    _selectedHole = selectedHole;
    notifyListeners();
  }

  get selectedHole => _selectedHole;
}
