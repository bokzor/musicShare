import React from 'react'
import {Link} from 'react-router'
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import AuthActions from '../actions/AuthActions'
import AuthStore from '../stores/AuthStore'
import Formsy from 'formsy-react'
import TextInput from './TextInput'


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

  handleSubmit(data){
    AuthActions.signup(data);
  }

  onChange(state) {
    this.setState(state);
    if (this.state.jwt) this.props.history.pushState(null, '/', { username: this.state.username });
  }

  render() {
    return (
      <section id="content" className="m-t-lg wrapper-md animated fadeInDown">
        <div className="container aside-xl">
          <a className="navbar-brand block"><span className="h1 font-bold">Mwsik</span></a>
          <section className="m-b-lg">
            <header className="wrapper text-center">
              <strong>Sign up to find interesting thing</strong>
            </header>
            <Formsy.Form
              onValidSubmit={this.handleSubmit.bind(this)}
              onValid={this.enableButton.bind(this)}
              onInvalid={this.disableButton.bind(this)}
            >

              <TextInput
                validationError="Please enter a valid username"
                validations="isAlphanumeric"
                required name="username"
                placeholder="Username"
                classInput="rounded input-lg text-center no-border"
              />

              <TextInput
                validationError="Please enter a valid email"
                validations="isEmail"
                required
                name="email"
                placeholder="Email"
                classInput="rounded input-lg text-center no-border"
              />

              <TextInput
                validationError="Please enter a valid password"
                validations="isLength:8"
                required
                name="password"
                placeholder="Password"
                type="password"
                classInput="rounded input-lg text-center no-border"
              />

              <button
                type="submit"
                className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"
                disabled={!this.state.canSubmit}>
                <i className="icon-arrow-right pull-right"></i>
                <span className="m-r-n-lg">Sign up</span>
              </button>

              <div className="line line-dashed"></div>
              <p className="text-muted text-center">
                <small>Already have an account?</small>
              </p>

              <Link to='/signin' className="btn btn-lg btn-info btn-block btn-rounded">Sign in</Link>

            </Formsy.Form>
          </section>
        </div>
      </section>
    );
  }
}

export default Signup;