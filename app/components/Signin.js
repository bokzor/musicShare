import React from 'react'
import {Link} from 'react-router'
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import AuthActions from '../actions/AuthActions'
import AuthStore from '../stores/AuthStore'
import cookie from 'react-cookie';



@mixin(addChangeHandler)
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    cookie.remove('XSRF-TOKEN');

  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    if (this.state.jwt) {
      this.props.history.pushState(null, '/');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    AuthActions.login(this.state);
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
            <form>
              <div className="form-group">
                <input
                  placeholder="Email"
                  className="form-control rounded input-lg text-center no-border"
                  onChange={this.changeHandler.bind(this, 'login', 'username')}/>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control rounded input-lg text-center no-border"
                  onChange={this.changeHandler.bind(this, 'login', 'password')}/>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"
                onClick={this.handleSubmit.bind(this)}>
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
            </form>
          </section>
        </div>
      </section>
    );
  }
}

Signin.contextTypes = {
  router: React.PropTypes.func
};

export default Signin;