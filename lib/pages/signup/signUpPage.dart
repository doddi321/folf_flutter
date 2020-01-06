import 'package:flutter/material.dart';
import 'package:folf/pages/signup/signupForm.dart';
import 'package:folf/widgets/CustomScaffold.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // gesture detector is to unfocus textfield when clicked outside of form.
    return GestureDetector(
      onTap: () => FocusScope.of(context).requestFocus(new FocusNode()),
      child: CustomScaffold(
        backgroundColor: Theme.of(context).primaryColor,
        body: Container(
            margin: EdgeInsets.only(top: 20, right: 20, left: 20),
            child: _buildBody(context)),
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Image.asset('assets/images/fake-logo.png'),
          _buildBackButton(context),
          SignupForm()
        ],
      ),
    );
  }

  Widget _buildBackButton(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: 5),
      child: InkWell(
        onTap: () {
          Navigator.pop(context);
        },
              child: Container(
          decoration: BoxDecoration(
            border: Border.all(
                color: Colors.lightGreenAccent,
                width: 1,
                style: BorderStyle.solid),
            borderRadius: BorderRadius.circular(5),
            color: new Color.fromRGBO(0, 0, 0, 0.4),
          ),
          height: 50,
          width: 50,
          child: Icon(Icons.arrow_back, color: Colors.lightGreenAccent,),
        ),
      ),
    );
  }
}
