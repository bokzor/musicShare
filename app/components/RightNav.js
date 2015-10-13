import React from 'react';

class RightNav extends React.Component {
    render() {
        return (
            <aside className="aside-md bg-light dk" id="sidebar" style={{ width: '20%' }}>
                <section className="vbox animated fadeInRight">
                    <section className="w-f-md scrollable hover">
                        <header className="header header-md bg-black header-search-my-users">
                            <form className="" role="search">
                                <div className="form-group clearfix m-b-none">
                                    <div className="input-group m-t m-b">
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-sm bg-empty text-muted btn-icon">
                                                <i className="fa fa-search"></i>
                                             </button>
                                         </span>
                                        <input type="text"
                                               className="form-control input-sm text-white bg-empty b-b b-dark no-border"
                                               placeholder="Search members"/>
                                    </div>
                                </div>
                            </form>
                        </header>
                        <ul className="list-group no-bg no-borders auto m-t-n-xxs list-my-users">
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a1.png" alt="..." className="img-circle"/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Chris Fox</a></div>
                                    <small className="text-muted">New York</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a2.png" alt="..."/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Amanda Conlan</a></div>
                                    <small className="text-muted">France</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a3.png" alt="..."/>
                <i className="busy b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Dan Doorack</a></div>
                                    <small className="text-muted">Hamburg</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a4.png" alt="..."/>
                <i className="away b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Lauren Taylor</a></div>
                                    <small className="text-muted">London</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a5.png" alt="..." className="img-circle"/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Chris Fox</a></div>
                                    <small className="text-muted">Milan</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a6.png" alt="..."/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Amanda Conlan</a></div>
                                    <small className="text-muted">Copenhagen</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a7.png" alt="..."/>
                <i className="busy b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Dan Doorack</a></div>
                                    <small className="text-muted">Barcelona</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a8.png" alt="..."/>
                <i className="away b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Lauren Taylor</a></div>
                                    <small className="text-muted">Tokyo</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a9.png" alt="..." className="img-circle"/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Chris Fox</a></div>
                                    <small className="text-muted">UK</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a1.png" alt="..."/>
                <i className="on b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Amanda Conlan</a></div>
                                    <small className="text-muted">Africa</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a2.png" alt="..."/>
                <i className="busy b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Dan Doorack</a></div>
                                    <small className="text-muted">Paris</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                <img src="images/a3.png" alt="..."/>
                <i className="away b-light right sm"></i>
                </span>
                                <div className="clear">
                                    <div><a href="#">Lauren Taylor</a></div>
                                    <small className="text-muted">Brussels</small>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>
            </aside>
        );
    }
}

export default RightNav;
