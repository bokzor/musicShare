import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
                <div className="navbar-header aside bg-info nav-xs">
                    <a className="btn btn-link visible-xs icon-list" data-target="#nav,html" data-toggle="class:nav-off-screen,open" ></a>
                    <Link className="navbar-brand text-lt" to="/">
                        <i className="icon-earphones"></i>
                        <img alt="." className="hide" src="images/logo.png"/>
                        <span className="hidden-nav-xs m-l-sm">Musik</span>
                    </Link>
                        <a className="btn btn-link visible-xs icon-settings" data-target=".user" data-toggle="dropdown" ></a>
                </div>
            
                <ul className="nav navbar-nav hidden-xs">
                    <li>
                        <a className="text-muted" data-toggle="class:nav-xs,nav-xs" href="#nav,.navbar-header"><i className="fa fa-indent text"></i> <i className="fa fa-dedent text-active"></i></a>
                    </li>
                </ul>
            
                <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-sm bg-white btn-icon rounded"><i className="fa fa-search"></i></button>
                            </span>
                            <input className="form-control input-sm no-border rounded" placeholder="Search songs, albums..." type="text"/>
                        </div>
                    </div>
                </form>
            
                <div className="navbar-right">
                    <ul className="nav navbar-nav m-n hidden-xs nav-user user">
                        <li className="hidden-xs">
                            <a className="dropdown-toggle lt" data-toggle="dropdown" href="#"><i className="icon-bell"></i> <span className="badge badge-sm up bg-danger count">2</span></a>
                            <section className="dropdown-menu aside-xl animated fadeInUp">
                                <section className="panel bg-white">
                                    <div className="panel-heading b-light bg-light">
                                        <strong>You have <span className="count">2</span> notifications</strong>
                                    </div>
            
                                    <div className="list-group list-group-alt">
                                        <a className="media list-group-item" href="#"><span className="pull-left thumb-sm"><img alt="..." className="img-circle" src="images/a0.png"/></span> <span className=
                                        "media-body block m-b-none">Use awesome animate.css<br/>
                                        <small className="text-muted">10 minutes ago</small></span></a> <a className="media list-group-item" href="#"><span className="media-body block m-b-none">1.0 initial released<br/>
                                        <small className="text-muted">1 hour ago</small></span></a>
                                    </div>
            
                                    <div className="panel-footer text-sm">
                                        <a className="pull-right fa fa-cog" href="#" ></a> <a data-toggle="class:show animated fadeInRight" href="#notes">See all the notifications</a>
                                    </div>
                                </section>
                            </section>
                        </li>
            
                        <li className="dropdown">
                            <a className="dropdown-toggle bg clear" data-toggle="dropdown" href="#"><span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm"><img alt="..." src="images/a0.png"/></span>
                            John.Smith <b className="caret"></b></a>
                            <ul className="dropdown-menu animated fadeInRight">
                                <li>
                                    <span className="arrow top"></span> <a href="#">Settings</a>
                                </li>
            
                                <li>
                                    <a href="profile.html">Profile</a>
                                </li>
            
                                <li>
                                    <a href="#"><span className="badge bg-danger pull-right">3</span> Notifications</a>
                                </li>
            
                                <li>
                                    <a href="docs.html">Help</a>
                                </li>
            
                                <li className="divider">
                                </li>
            
                                <li>
                                    <a data-toggle="ajaxModal" href="modal.lockme.html">Logout</a>
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