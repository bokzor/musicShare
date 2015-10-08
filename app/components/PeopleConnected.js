import React from 'react';


class PeopleConnected extends React.Component {
    render() {
        return (
              <aside className="aside-md bg-light dk" id="sidebar">
                <section className="vbox animated fadeInRight">
                  <section className="w-f-md scrollable hover">
                    <h4 className="font-thin m-l-md m-t">Connected</h4>
                    <ul className="list-group no-bg no-borders auto m-t-n-xxs">
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
                  <footer className="footer footer-md bg-black">
                    <form className="" role="search">
                      <div className="form-group clearfix m-b-none">
                        <div className="input-group m-t m-b">
                          <span className="input-group-btn">
                            <button type="submit" className="btn btn-sm bg-empty text-muted btn-icon"><i className="fa fa-search"></i></button>
                          </span>
                          <input type="text" className="form-control input-sm text-white bg-empty b-b b-dark no-border" placeholder="Search members"/>
                        </div>
                      </div>
                    </form>
                  </footer>
                </section>
              </aside>
        );
    }
}


export default PeopleConnected;