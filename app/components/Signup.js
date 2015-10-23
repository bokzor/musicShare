import React from 'react'
import {Link} from 'react-router'
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import AuthActions from '../actions/AuthActions'
import AuthStore from '../stores/AuthStore'

@mixin(addChangeHandler)
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var username = this.state.signup.username.trim();
    var email = this.state.signup.email.trim();
    var password = this.state.signup.password.trim();

    if (!username) {
      AuthActions.invalidUsername();
      this.refs.usernameTextField.getDOMNode().focus();
    }

    if (!email) {
      AuthActions.invalidEmail();
      this.refs.emailTextField.getDOMNode().focus();
    }

    if (!password) {
      AuthActions.invalidPassword();
      this.refs.passwordTextField.getDOMNode().focus();
    }

    if (username && email && password) {
      AuthActions.signup(this.state);
    }
  }

  render() {
    return (
      <section id="content" className="m-t-lg wrapper-md animated fadeInDown">
        <div className="container aside-xl">
          <a className="navbar-brand block"><span className="h1 font-bold">Musik</span></a>
          <section className="m-b-lg">
            <header className="wrapper text-center">
              <strong>Sign up to find interesting thing</strong>
            </header>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className={'form-group ' + this.state.usernameValidationState}>
                <input
                  placeholder="Username"
                  className="form-control rounded input-lg text-center no-border"
                  ref='usernameTextField'
                  onChange={this.changeHandler.bind(this, 'signup', 'username')}/>
                <span className='span-help-block'>{this.state.usernameHelpBlock}</span>
              </div>
              <div className={'form-group ' + this.state.emailValidationState}>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control rounded input-lg text-center no-border"
                  ref='emailTextField'
                  onChange={this.changeHandler.bind(this, 'signup', 'email')}/>
                <span className='span-help-block'>{this.state.emailHelpBlock}</span>
              </div>
              <div className={'form-group ' + this.state.passwordValidationState}>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control rounded input-lg text-center no-border"
                  ref='passwordTextField'
                  onChange={this.changeHandler.bind(this, 'signup', 'password')}/>
                <span className='span-help-block'>{this.state.passwordHelpBlock}</span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"
                onClick={this.handleSubmit.bind(this)}>
                <i className="icon-arrow-right pull-right"></i>
                <span className="m-r-n-lg">Sign up</span>
              </button>
              <div className="line line-dashed"></div>
              <p className="text-muted text-center">
                <small>Already have an account?</small>
              </p>
              <Link to='/signin' className="btn btn-lg btn-info btn-block btn-rounded">Sign in</Link>
            </form>
          </section>
        </div>
      </section>
    );
  }
}

export default Signup;