import React from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  render() {
    return (
      <aside className="bg-black dk nav-xs aside hidden-print" id="nav">
        <section className="vbox">
          <section className="w-f-md scrollable">
            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0"
                 data-size="10px" data-railopacity="0.2">
              <nav className="nav-primary hidden-xs">
                <ul className="nav bg clearfix">
                  <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                    Discover
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon-disc icon text-success"></i>
                      <span className="font-bold">What's new</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-music-tone-alt icon text-info"></i>
                      <span className="font-bold">Top Songs</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/genres">
                      <i className="icon-music-tone icon text-info"></i>
                      <span className="font-bold">Genres</span>
                    </Link>
                  </li>
                  <li className="m-b hidden-nav-xs"></li>
                </ul>
                <ul className="nav" data-ride="collapse">
                  <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                    My profile
                  </li>
                  <li>
                    <Link to={"/profile"}>

                      <i className="fa fa-user icon"></i>
                      <span className="font-bold">My Profile</span>
                    </Link>
                  </li>
                  <li >
                    <a href="#">
                      <i className="fa fa-users icon"></i>
                      <span className="font-bold">Followed</span>
                    </a>
                  </li>
                  <li >
                    <Link to="/addMusicAd">
                      <i className="fa icon-plus icon"></i>
                      <span className="font-bold">Add a music</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <footer className="footer hidden-xs no-padder text-center-nav-xs">
            <div className="bg hidden-xs ">
              <div className="dropdown dropup wrapper-sm clearfix">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="thumb-sm avatar pull-left m-l-xs">
                <img src="images/a3.png" className="dker" alt="..."/>
                <i className="on b-black"></i>
                </span>
                <span className="hidden-nav-xs clear">
                <span className="block m-l">
                <strong className="font-bold text-lt">BokZor</strong>
                <b className="caret"></b>
                </span>
                <span className="text-muted text-xs block m-l">Art Director</span>
                </span>
                </a>
              </div>
            </div>
          </footer>
        </section>
      </aside>
    );
  }
}

export default LeftNav;