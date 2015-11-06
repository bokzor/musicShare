import React from 'react'
import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'
import moment from 'moment'

import MusicItem from './MusicItem'
import InfiniteList from './InfiniteList'
import FooterInContent from './FooterInContent'
import MusicBar from './MusicBar'
import FollowedButton from './FollowedButton'
import UnfollowedButton from './UnfollowedButton'
import Dropzone from 'react-dropzone'

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
      ProfileActions.getData(this.props.params.username);
    } else {
      ProfileActions.getData(this.props.usernameConnectedCookie);
    }
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.username !== this.props.params.username) {
      ProfileActions.getData(this.props.params.username);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  handleFollowButton(event) {
    event.preventDefault();
    ProfileActions.follow(this.state.data.user.username);
    this.setState({
      followed: true,
      followedByCount: this.state.followedByCount + 1
    });
  }

  handleUnfollowButton(event) {
    event.preventDefault();
    ProfileActions.unfollow(this.state.data.user.username);
    this.setState({
      followed: false,
      followedByCount: this.state.followedByCount - 1
    });

  }

  render() {
    let data = this.state.data;

    if (this.state.followed) {
      var button = <UnfollowedButton onClick={this.handleUnfollowButton.bind(this)} username={data.user.username}/>
    } else {
      var button = <FollowedButton onClick={this.handleFollowButton.bind(this)} username={data.user.username}/>
    }

    let musicTop = this.state.data.musics.slice(0, 6).map((music) => {
      return (
        <div key={music._id} className="col-xs-6 col-sm-4">
          <div className="item">
            <div className="pos-rlt">
              <div className="bottom">
                <span className="badge bg-info m-l-sm m-b-sm">{moment.utc(music.duration).format('HH:mm:ss')}</span>
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


    return (
      <section className="vbox">
        <section className="w-f-md">
          <section className="hbox stretch">
            <aside className="col-sm-9 no-padder">
              <section className="vbox animated fadeInUp">
                <section className="scrollable">
                  <div className="m-t-n-xxs item pos-rlt">
                    <div className="top text-right img-container-top">
                      <span className="musicbar animate bg-success bg-empty inline m-r-lg m-t"
                            style={{ width: '25px', height: '30px' }}>
                        <span className="bar1 a3 lter"></span>
                        <span className="bar2 a5 lt"></span>
                        <span className="bar3 a1 bg"></span>
                        <span className="bar4 a4 dk"></span>
                        <span className="bar5 a2 dker"></span>
                      </span>
                    </div>

                    <div style={{position: 'absolute', zIndex: '10', width: '500px', right: '0', bottom: '0', margin: '-35px 20px'}}>
                      <section className="panel panel-info">
                        <div className="panel-body">
                          <a href="#" className="thumb pull-right m-l m-b-xs m-t-xs" style={{width: '100px'}}>
                            <img src="images/plex1.jpg" alt="..."/>
                            <i className="on md b-white bottom"></i>
                          </a>
                          <div className="clear">
                            <div className="h2 m-b-xs font-thin">Bokzor</div>
                            <small className="block text-muted"><strong>2,415</strong> followers • <strong>225</strong> following • <strong>55</strong> music</small>
                            <a href="#" className="btn btn-success m-t-xs" style={{float: 'right'}}>Follow Bokzor</a>
                            <a className="btn btn-default m-t-xs m-r" style={{float: 'right'}}>
                              <span className="text">Profile</span>
                            </a>
                            <a className="btn btn-default m-t-xs m-r" style={{float: 'right'}}>
                              <span className="text">Cover</span>
                            </a>
                          </div>

                          <div className="m-t-xs">
                            <Dropzone
                              disableClick={true}
                              multiple={false}
                              onDrop={this.onDrop}
                              style={{width: '150px', height: '100px', borderWidth: '2px', borderColor: '#bce8f1', borderStyle: 'dashed', borderRadius: '2px', textAlign: 'center', padding: '10px'}}
                              >
                              <div>(Profile)</div>
                            </Dropzone>
                          </div>

                        </div>
                      </section>
                    </div>

                    <div className="bottom gd bg-info wrapper-lg img-container-bottom">
                      <span className="pull-right text-sm">{this.state.followedByCount} <br/>Followers</span>
                      {this.props.params.username
                        ?
                        button
                        :
                        null
                      }
                      <span className="h2 font-thin">{data.user.username}</span>
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
                        </div>
                      </div>
                    </div>
                    <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin"><i
                      className="icon-refresh i-lg  inline" id="refresh"></i></a>
                    <h2 className="font-thin m-b">My Music Library
                      <MusicBar />
                    </h2>
                    <div className="row row-sm">

                      <InfiniteList musics={this.state.data.musics.slice(6)}/>

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