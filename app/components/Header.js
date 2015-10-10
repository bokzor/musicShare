import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
        <div className="navbar-header aside bg-info nav-xs">
          <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
            <i className="icon-list"></i>
          </a>
          <Link to="/" className="navbar-brand text-lt">
            <i className="icon-earphones"></i>
            <img src="images/logo.png" alt="." className="hide"/>
            <span className="hidden-nav-xs m-l-sm">Musik</span>
          </Link>
          <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
            <i className="icon-settings"></i>
          </a>
        </div>
        <ul className="nav navbar-nav hidden-xs">
          <li>
            <a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" className="text-muted">
              <i className="fa fa-indent text"></i>
              <i className="fa fa-dedent text-active"></i>
            </a>
          </li>
        </ul>
        <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
          <div className="form-group">
            <div className="input-group">
        <span className="input-group-btn">
          <button type="submit" className="btn btn-sm bg-white btn-icon rounded"><i className="fa fa-search"></i>
          </button>
        </span>
              <input type="text" className="form-control input-sm no-border rounded"
                     placeholder="Search songs, albums..."/>
            </div>
          </div>
        </form>
        <div className="navbar-right ">
          <ul className="nav navbar-nav m-n hidden-xs nav-user user">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle bg clear" data-toggle="dropdown">
                <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                  <img src="images/a0.png" alt="..."/>
                </span>
                BokZor <b className="caret"></b>
              </a>
              <ul className="dropdown-menu animated fadeInRight">
                <li>
                  <span className="arrow top"></span>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="docs.html">Help</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="modal.lockme.html" data-toggle="ajaxModal">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;