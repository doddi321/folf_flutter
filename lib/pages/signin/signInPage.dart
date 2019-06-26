import 'package:flutter/material.dart';
import 'package:folf/pages/signin/signinForm.dart';

class SignInPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // gesture detector is to unfocus textfield when clicked outside of form.
    return GestureDetector(
      onTap: () => FocusScope.of(context).requestFocus(new FocusNode()),
      child: Scaffold(
        backgroundColor: Theme.of(context).primaryColor,
        body: Container(
            margin: EdgeInsets.only(top: 20, right: 20, left: 20),
            child: _buildBody()),
      ),
    );
  }

  Widget _buildBody() {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Image.asset('assets/images/fake-logo.png'),
          SigninForm()
        ],
      ),
    );
  }


}
