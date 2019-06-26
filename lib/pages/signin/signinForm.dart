import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

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

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          _buildEmailTextField(),
          _buildPasswordTextField(),
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

  InputDecoration _inputDecoration(String forWho) {
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
        fillColor: Colors.white);
  }

  Widget _buildEmailTextField() {
    return TextFormField(
        decoration: _inputDecoration('email'),
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

  Widget _buildPasswordTextField() {
    return TextFormField(
        obscureText: true,
        decoration: _inputDecoration('password'),
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
            FirebaseAuth.instance
                .signInWithEmailAndPassword(email: _email, password: _password)
                .then((response) {})
                .catchError((e) {
              print(e);
            });
          }
        },
        child: Text('Sign In'),
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
      onTap: () {},
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
