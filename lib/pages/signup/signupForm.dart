import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:folf/services/userManagement.dart';

class SignupForm extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _SignupFormState();
  }
}

class _SignupFormState extends State<SignupForm> {
  final _formKey = GlobalKey<FormState>();

  String _email = '';
  String _password = '';
  String _username = '';

  bool isLoading = false;

  String emailErrorText;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          _buildEmailTextField(emailErrorText),
          _buildUsernameTextField(),
          _buildPasswordTextField(),
          SizedBox(height: 10.0),
          _buildSubmitButton(),
          SizedBox(height: 10.0),
          _orLine(),
          SizedBox(height: 10.0),
          _buildFacebookButton(),
          SizedBox(height: 10.0),
          _useWithoutSigninButton()
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
    } else if (forWho == 'username') {
      borderRadius = BorderRadius.circular(0);
      icon = Icon(Icons.person);
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
        decoration: _inputDecoration('email', errorText),
        keyboardType: TextInputType.emailAddress,
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

  Widget _buildUsernameTextField() {
    return TextFormField(
        decoration: _inputDecoration('username', null),
        validator: (value) {
          if (value.isEmpty) {
            return 'Username is missing';
          }
          _username = value;
          return null;
        });
  }

  Widget _buildPasswordTextField() {
    return TextFormField(
        obscureText: true,
        decoration: _inputDecoration('password', null),
        validator: (value) {
          if (value.length < 6) {
            return 'Password needs to be at least 6 characters';
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
            void onCreateUserError(err) {
              if (err.code == 'ERROR_EMAIL_ALREADY_IN_USE') {
                setState(() => (emailErrorText = err.message));
              } else {
                final snackBar = SnackBar(
                  content: Text('Unexpected error while signing up.'),
                  backgroundColor: Colors.redAccent,
                );
                Scaffold.of(context).showSnackBar(snackBar);
              }
            }

            void onComplete() {
              setState(() {
                isLoading = false;
              });
            }

            UserManagement(context)
                .createNewUser(_email, _password, _username, onCreateUserError, onComplete);
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
              child: Text("Sign up"),
            )))
          ],
        ),
      ),
    );
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

  Widget _useWithoutSigninButton() {
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
