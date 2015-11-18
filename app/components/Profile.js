import React from 'react'
import alt from '../alt'
import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'
import moment from 'moment'
import Loader from 'react-loader'

import MusicItem from './MusicItem'
import InfiniteList from './InfiniteList'
import FooterInContent from './FooterInContent'
import MusicBar from './MusicBar'
import FollowedButton from './FollowedButton'
import UnfollowedButton from './UnfollowedButton'

import ProfileActions from '../actions/ProfileActions'
import ProfileStore from '../stores/ProfileStore'

import FriendActions from '../actions/FriendActions'


//@mixin(composeAnimation)
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
    this.state.isLoading = true;
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.username !== this.props.params.username) {
      alt.recycle(ProfileStore);
      ProfileActions.getData(this.props.params.username);
      this.state.isLoading = true;
    }
  }

  onChange(state) {
    this.setState(state);
  }

  handleFollowButton(event) {
    event.preventDefault();
    ProfileActions.follow(this.state.user.username);
    FriendActions.addFollower({username: this.state.user.username});
    this.setState({
      followed: true,
      followedByCount: this.state.followedByCount + 1
    });
  }

  handleUnfollowButton(event) {
    event.preventDefault();
    ProfileActions.unfollow(this.state.user.username);
    FriendActions.removeFollower({username: this.state.user.username});
    this.setState({
      followed: false,
      followedByCount: this.state.followedByCount - 1
    });
  }

  loadMoreItems() {
    if (this.props.params.username) {
      ProfileActions.getMoreMusics(this.props.params.username, this.state.page);
    } else {
      ProfileActions.getMoreMusics(this.props.usernameConnectedCookie, this.state.page);
    }
    this.state.isLoading = true;

  }

  render() {

    if (this.state.followed) {
      var button = <UnfollowedButton onClick={this.handleUnfollowButton.bind(this)}
                                     username={this.state.user.username}/>
    } else {
      var button = <FollowedButton onClick={this.handleFollowButton.bind(this)}
                                   username={this.state.user.username}/>
    }

    let musicTop = this.state.musics.slice(0, 6).map((music) => {
      return (
        <MusicItem key={music._id} music={music}/>
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
                      <div className="bottom gd bg-info wrapper-lg img-container-bottom">
                        <span className="pull-right text-sm">{this.state.followedByCount} <br/>Followers</span>
                        {this.props.params.username
                          ?
                          button
                          :
                          null
                        }
                        <span className="h2 font-thin">{this.state.user.username}</span>
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
                      <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin">
                        <i className="icon-refresh i-lg  inline" id="refresh"></i></a>
                      <h2 className="font-thin m-b">My Music Library
                        <MusicBar />
                      </h2>
                      <div className="row row-sm">

                        <InfiniteList
                          isLoading={this.state.isLoading}
                          musics={this.state.musics.slice(6)}
                          loadMoreItems={this.loadMoreItems.bind(this)}
                        />

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