import React from 'react';
import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'

import FooterInContent from './FooterInContent';

import ProfileActions from '../actions/ProfileActions'
import ProfileStore from '../stores/ProfileStore'

@mixin(composeAnimation)
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange);
    if (this.props.params.username) {
      ProfileActions.getUser(this.props.params.username);
    } else {
      ProfileActions.getUser(this.props.usernameConnectedCookie);
    }
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    // Fetch new charachter data when URL path changes
    if (prevProps.params.username !== this.props.params.username) {
      ProfileActions.getUser(this.props.params.username);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  handleFollowButton(event) {
    event.preventDefault();
    alert('Follow xxx');
  }

  render() {
    let user = this.state.user;

    let musicTop = this.state.user.musics.slice(0, 6).map((music) => {
      return (
        <div key={music._id} className="col-xs-6 col-sm-4">
          <div className="item">
            <div className="pos-rlt">
              <div className="bottom">
                <span className="badge bg-info m-l-sm m-b-sm">{music.duration}</span>
              </div>
              <div className="item-overlay opacity r r-2x bg-black">
                <div className="center text-center m-t-n">
                  <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                </div>
              </div>
              <a href="#"><img src={music.img} alt="" className="r r-2x img-full"/></a>
            </div>
            <div className="padder-v">
              <a href="#" className="text-ellipsis">{music.title}</a>
              <a href="#" className="text-ellipsis text-xs text-muted">{music.artist}</a>
            </div>
          </div>
        </div>
      );
    });

    let musicsBottom = this.state.user.musics.slice(6).map((music) => {
      return (
        <div key={music._id} className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div className="item">
            <div className="pos-rlt">
              <div className="bottom">
                <span className="badge bg-info m-l-sm m-b-sm">{music.duration}</span>
              </div>
              <div className="item-overlay opacity r r-2x bg-black">
                <div className="text-info padder m-t-sm text-sm">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o text-muted"></i>
                </div>
                <div className="center text-center m-t-n">
                  <a href="#"><i className="icon-control-play i-2x"></i></a>
                </div>
                <div className="bottom padder m-b-sm">
                  <a href="#" className="pull-right">
                    <i className="fa fa-heart-o"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-plus-circle"></i>
                  </a>
                </div>
              </div>
              <a href="#"><img src={music.img} alt="" className="r r-2x img-full"/></a>
            </div>
            <div className="padder-v">
              <a href="#" className="text-ellipsis">{music.title}</a>
              <a href="#" className="text-ellipsis text-xs text-muted">{music.artist}</a>
            </div>
          </div>
        </div>
      )
    });

    return (
      <section className="vbox">
        <section className="w-f-md">
          <section className="hbox stretch">
            <aside className="col-sm-9 no-padder">
              <section className="vbox animated fadeInUp">
                <section className="scrollable">
                  <div className="m-t-n-xxs item pos-rlt">
                    <div className="top text-right img-container-top">
                      <span className="musicbar animate bg-success bg-empty inline m-r-lg m-t" style={{ width: '25px', height: '30px' }}>
                        <span className="bar1 a3 lter"></span>
                        <span className="bar2 a5 lt"></span>
                        <span className="bar3 a1 bg"></span>
                        <span className="bar4 a4 dk"></span>
                        <span className="bar5 a2 dker"></span>
                      </span>
                    </div>
                    <div className="bottom gd bg-info wrapper-lg img-container-bottom">
                      <span className="pull-right text-sm">{user.followedByCount} <br/>Followers</span>

                      {this.props.usernameConnectedCookie !== this.state.user.username
                        ?
                          <a
                            className="pull-right btn btn-default btn-following"
                            onClick={ this.handleFollowButton.bind(this) }>Follow {user.username}
                          </a>
                        :
                          <span></span>
                      }

                      <span className="h2 font-thin">{user.username} | <small>Adrien Bokor</small></span>
                    </div>
                    <div className="img-container">
                      <div className="img-container-center">
                        <img className="img-full img-responsive" src="images/m43.jpg" alt="..."/>
                      </div>
                    </div>
                  </div>

                  <section className="padder-lg w-f-md" id="bjax-target">
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="font-thin">New Songs</h3>
                        <div className="row row-sm">

                          {musicTop}

                        </div>
                      </div>
                      <div className="col-md-5">
                        <h3 className="font-thin">Top Songs</h3>
                        <div className="list-group bg-white list-group-lg no-bg auto list-group-top-songs">
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">1</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a4.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Little Town</span>
                              <small className="text-muted clear text-ellipsis">by Chris Fox</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">2</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a5.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Lementum ligula vitae</span>
                              <small className="text-muted clear text-ellipsis">by Amanda Conlan</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">3</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a6.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Aliquam sollicitudin venenatis</span>
                              <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">4</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a7.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Aliquam sollicitudin venenatis ipsum</span>
                              <small className="text-muted clear text-ellipsis">by Lauren Taylor</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">5</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a8.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Vestibulum ullamcorper</span>
                              <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin"><i className="icon-refresh i-lg  inline" id="refresh"></i></a>
                    <h2 className="font-thin m-b">My Music Library <span className="musicbar animate inline m-l-sm" style={{ width: '20px', height: '20px '}}>
                      <span className="bar1 a1 bg-primary lter"></span>
                      <span className="bar2 a2 bg-info lt"></span>
                      <span className="bar3 a3 bg-success"></span>
                      <span className="bar4 a4 bg-warning dk"></span>
                      <span className="bar5 a5 bg-danger dker"></span>
                    </span></h2>
                    <div className="row row-sm">

                      {musicsBottom}

                    </div>
                    <FooterInContent/>
                  </section>
                </section>
              </section>
            </aside>
          </section>
        </section>
      </section>
    );
  }
}

export default Profile;