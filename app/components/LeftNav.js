import React from 'react';

class LeftNav extends React.Component {
    render() {
        return (
            <aside className="bg-black dk nav-xs aside hidden-print" id="nav">
                <section className="vbox">
                    <section className="w-f-md scrollable">
                        <div className="slim-scroll" data-disable-fade-out="true" data-distance="0" data-height="auto"
                             data-railopacity="0.2" data-size="10px">

                            <nav className="nav-primary hidden-xs">
                                <ul className="nav bg clearfix">
                                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                        Discover
                                    </li>
                                    <li>
                                        <a href="index.html">
                                            <i className="icon-disc icon text-success"></i>
                                            <span className="font-bold">What's new</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="listen.html">
                                            <i className="icon-music-tone-alt icon text-info"></i>
                                            <span className="font-bold">Top Songs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="genres.html">
                                            <i className="icon-music-tone icon text-info"></i>
                                            <span className="font-bold">Genres</span>
                                        </a>
                                    </li>
                                    <li className="m-b hidden-nav-xs"></li>
                                </ul>
                                <ul className="nav" data-ride="collapse">
                                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                        My profile
                                    </li>
                                    <li >
                                        <a href="#">
                                            <i className="fa fa-user icon"></i>
                                            <span className="font-bold">My Profile</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a href="#">
                                            <i className="fa fa-users icon"></i>
                                            <span className="font-bold">Followed</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </section>


                    <footer className="footer hidden-xs no-padder text-center-nav-xs">
                        <div className="bg hidden-xs">
                            <div className="dropdown dropup wrapper-sm clearfix">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <span className="thumb-sm avatar pull-left m-l-xs">
                                        <img alt="..." className="dker" src="images/a3.png"/> 
                                        <i className="on b-black"></i>
                                    </span> 
                                    <span className="hidden-nav-xs clear"><span className="block m-l">
                                        <strong className="font-bold text-lt">John.Smith</strong>
                                        <b className="caret"></b>
                                    </span>
                                        <span className="text-muted text-xs block m-l">Art Director</span>
                                    </span>
                                </a>

                                <ul className="dropdown-menu animated fadeInRight aside text-left">
                                    <li>
                                        <span className="arrow bottom hidden-nav-xs"></span>
                                        <a href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a href="profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="badge bg-danger pull-right">3</span>
                                            Notifications
                                        </a>
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
                            </div>
                        </div>
                    </footer>
                </section>
            </aside>

        );
    }
}

export default LeftNav;