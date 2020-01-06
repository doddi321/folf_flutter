import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:folf/services/userManagement.dart';

class SigninForm extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _SigninFormState();
  }
}

class _SigninFormState extends State<SigninForm> {
  final _formKey = GlobalKey<FormState>();

  String _email = '';
  String _password = '';

  String emailErrorText;
  String passwordErrorText;

  bool isLoading = false;

  void clearErrorTexts() {
    emailErrorText = null;
    passwordErrorText = null;
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          _buildEmailTextField(emailErrorText),
          _buildPasswordTextField(passwordErrorText),
          SizedBox(height: 10.0),
          _buildSubmitButton(),
          SizedBox(height: 10.0),
          _buildForgotButtons(),
          SizedBox(height: 20.0),
          _buildSignupHere(),
          SizedBox(height: 10.0),
          _orLine(),
          SizedBox(height: 10.0),
          _buildFacebookButton(),
          SizedBox(height: 10.0),
          _useWithoutSigninpButton()
        ],
      ),
    );
  }

  InputDecoration _inputDecoration(String forWho, String errorText) {
    BorderRadius borderRadius;
    Icon icon;
    if (forWho == 'email') {
      borderRadius = BorderRadius.vertical(top: Radius.circular(5));
      icon = Icon(Icons.email);
    } else {
      borderRadius = BorderRadius.vertical(bottom: Radius.circular(5));
      icon = Icon(Icons.lock);
    }

    return InputDecoration(
        border: UnderlineInputBorder(borderRadius: borderRadius),
        focusedBorder: UnderlineInputBorder(
            borderSide: BorderSide(
                color: Colors.blue, style: BorderStyle.solid, width: 5),
            borderRadius: borderRadius),
        errorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
                color: Colors.red, width: 2, style: BorderStyle.solid),
            borderRadius: BorderRadius.circular(5)),
        focusedErrorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
                color: Colors.red, style: BorderStyle.solid, width: 5),
            borderRadius: BorderRadius.circular(5)),
        prefixIcon: icon,
        labelText: forWho,
        filled: true,
        errorText: errorText,
        fillColor: Colors.white);
  }

  Widget _buildEmailTextField(errorText) {
    return TextFormField(
        keyboardType: TextInputType.emailAddress,
        decoration: _inputDecoration('email', errorText),
        validator: (value) {
          String p =
              r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
          RegExp regExp = new RegExp(p);
          if (!regExp.hasMatch(value)) {
            return 'Email format is incorrect';
          }
          _email = value;
          return null;
        });
  }

  Widget _buildPasswordTextField(String errorText) {
    return TextFormField(
        obscureText: true,
        decoration: _inputDecoration('password', errorText),
        validator: (value) {
          if (value.isEmpty) {
            return 'Password cannot be empty';
          }
          _password = value;
          return null;
        });
  }

  Widget _buildSubmitButton() {
    return Container(
      height: 50,
      child: RaisedButton(
        color: Theme.of(context).accentColor,
        textColor: Colors.white,
        onPressed: () {
          if (_formKey.currentState.validate()) {
            setState(() {
              isLoading = true;
            });
            FirebaseAuth.instance
                .signInWithEmailAndPassword(email: _email, password: _password)
                .then((response) {
              clearErrorTexts();
              UserManagement.saveDeviceToken(); // to be able to send push notifications
              Navigator.popAndPushNamed(context, "/mainPage");
            }).catchError((e) {
              clearErrorTexts();
              if (e.code == "ERROR_USER_NOT_FOUND") {
                setState(() =>
                    (emailErrorText = "There is no user with this email."));
              } else if (e.code == "ERROR_WRONG_PASSWORD") {
                setState(() => (passwordErrorText = "The password is invalid."));
              }
            }).whenComplete(() {
              setState(() {
                isLoading = false;
              });
            });
          }
        },
        child: Row(
          children: <Widget>[
            Container(
                height: 30,
                width: 30,
                child: isLoading
                    ? CircularProgressIndicator(
                        backgroundColor: Colors.blue,
                      )
                    : Container()),
            Expanded(
                child: Center(
                    child: Padding(
              padding: const EdgeInsets.only(right: 30),
              child: Text("Sign in"),
            )))
          ],
        ),
      ),
    );
  }

  Widget _buildForgotButtons() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        InkWell(
            onTap: () {},
            child:
                Text("Forgot password", style: TextStyle(color: Colors.white))),
        Text("  |  ", style: TextStyle(color: Colors.white)),
        InkWell(
            onTap: () {},
            child:
                Text("Forgot username", style: TextStyle(color: Colors.white)))
      ],
    );
  }

  Widget _buildSignupHere() {
    return InkWell(
        onTap: () {
          Navigator.pushNamed(context, '/signup');
        },
        child: Center(
            child: Text(
          "Don't have an account? Sign up here",
          style: TextStyle(
              color: Theme.of(context).accentColor,
              fontWeight: FontWeight.bold),
        )));
  }

  Widget _orLine() {
    return Row(
      children: <Widget>[
        Expanded(
          child: new Container(
            height: 1.5,
            color: Colors.white,
          ),
        ),
        Padding(
            padding: EdgeInsets.all(10.0),
            child: Text(
              "or",
              style: TextStyle(color: Colors.white),
            )),
        Expanded(
          child: new Container(
            height: 1.5,
            color: Colors.white,
          ),
        ),
      ],
    );
  }

  Widget _buildFacebookButton() {
    return Container(
      height: 50,
      child: RaisedButton(
        color: Color(0xFF3B5998),
        textColor: Colors.white,
        onPressed: () {},
        child: Text('Facebook'),
      ),
    );
  }

  Widget _useWithoutSigninpButton() {
    return InkWell(
      onTap: () {
        Navigator.popAndPushNamed(context, "/mainPage");
      },
      child: Container(
        height: 50,
        decoration: new BoxDecoration(
            border: new Border.all(
                width: 1,
                color: Colors
                    .white), //color is transparent so that it does not blend with the actual color specified
            borderRadius: const BorderRadius.all(const Radius.circular(5.0)),
            color: new Color.fromRGBO(
                0, 0, 0, 0.4) // Specifies the background color and the opacity
            ),
        child: Center(
          child: Text(
            'Nota án innskráningar',
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    );
  }
}
