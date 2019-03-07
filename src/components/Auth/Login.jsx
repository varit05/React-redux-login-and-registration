import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state);
    const { inputEmail, inputPassword } = this.state;
    this.props.logIn({ inputEmail, inputPassword });
  };

  render() {
    const { authError } = this.props;
    return (
      <React.Fragment>
        <div className="login-form">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h3 className="h3 mb-3 font-weight-normal"> Sign in</h3>
            <div className="social-login">
              <button className="btn facebook-btn social-btn" type="button">
                <span>
                  <i className="fab fa-facebook-f" /> Sign in with Facebook
                </span>
              </button>
              <button className="btn google-btn social-btn" type="button">
                <span>
                  <i className="fab fa-google-plus-g" /> Sign in with Google
                </span>
              </button>
            </div>
            <p> OR </p>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              onChange={this.handleChange}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              onChange={this.handleChange}
            />

            <button className="btn btn-success btn-block" type="submit">
              <i className="fas fa-sign-in-alt" /> Sign in
            </button>
            <a id="forgot_pswd">Forgot password?</a>
            <hr />
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus" /> Sign up New Account
            </button>
          </form>
          {authError ? (
            <div class="p-3 mb-2 bg-danger text-white">
              <span>{authError}</span>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(authActions.logIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
