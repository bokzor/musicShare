import React from 'react'
import {Link} from 'react-router'
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import AuthActions from '../actions/AuthActions'
import AuthStore from '../stores/AuthStore'
import Cookie from 'react-cookie'
import Formsy from 'formsy-react'
import TextInput from './TextInput'

@mixin(addChangeHandler)
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }



  componentWillMount() {
    Cookie.remove('XSRF-TOKEN');
  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    if (this.state.jwt) this.props.history.pushState(null, '/');
  }

  handleSubmit(data) {
    AuthActions.login(data);
  }

  render() {
    return (
      <section id="content" className="m-t-lg wrapper-md animated fadeInUp">
        <div className="container aside-xl">
          <a className="navbar-brand block" href="index.html"><span className="h1 font-bold">Musik</span></a>
          <section className="m-b-lg">
            <header className="wrapper text-center">
              <strong>Sign in to get in touch</strong>
            </header>
            <Formsy.Form onValidSubmit={this.handleSubmit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
              <TextInput validationError="Please enter a valid email" validations="isEmail" required name="email" placeholder="Email"/>
              <TextInput type="password" validationError="Please enter a password" validations="isLength:8" required name="password" placeholder="Password"/>
              <button
                disabled={!this.state.canSubmit}
                type="submit"
                className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded">
                <i className="icon-arrow-right pull-right"></i>
                <span className="m-r-n-lg">Sign in</span>
              </button>
              <div className="text-center m-t m-b"><a href="#">
                <small>Forgot password?</small>
              </a></div>
              <div className="line line-dashed"></div>
              <p className="text-muted text-center">
                <small>Do not have an account?</small>
              </p>
              <Link to="/signup" className="btn btn-lg btn-info btn-block rounded">Create an account</Link>
            </Formsy.Form>
          </section>
        </div>
      </section>
    );
  }
}


export default Signin;