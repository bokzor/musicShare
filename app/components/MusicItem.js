import React from 'react'
import moment from 'moment'
import ClassNames from 'classnames'

import ImageLoader from 'react-imageloader'
import PlayerActions from '../actions/PlayerActions'
import PlayerStore from '../stores/PlayerStore'

class MusicItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = PlayerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);
    this.handleRemoveFromPlaylist = this.handleRemoveFromPlaylist.bind(this);
  }

  componentDidMount() {
    PlayerStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
  }

  handlePlay() {
    PlayerActions.play(this.props.music);
  }

  handlePause() {
    PlayerActions.pause();
  }

  handleAddToPlaylist() {
    PlayerActions.addToPlaylist(this.props.music);
  }

  handleRemoveFromPlaylist() {
    PlayerActions.removeFromPlaylist(this.props.music);
  }

  onChange(state) {
    this.setState(state);
  }

  isInPlaylist() {
    var index = this.state.musics.map(function (e) {
      return e._id;
    }).indexOf(this.props.music._id);
    return index > -1
  }

  isPlaying() {
    var index = this.state.musics.map(function (e) {
      return e._id;
    }).indexOf(this.props.music._id);

    return (this.state.isPlaying && this.state.currentMusicIndex == index);
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
        <div className="item">
          <div className="pos-rlt">
            <div className="bottom">
              <span
                className="badge bg-info m-l-sm m-b-sm">{moment.utc(this.props.music.duration).format('HH:mm:ss')}</span>
            </div>
            <div className="item-overlay opacity r r-2x bg-black">
              <div className="center text-center m-t-n">
                { (!this.isPlaying())
                  ?
                  <a onClick={this.handlePlay} href="#"><i className="fa fa-play-circle i-2x"/></a>
                  :
                  <a onClick={this.handlePause} href="#"><i className="icon-control-pause i-2x"/></a>
                }
              </div>
              <div className="bottom padder m-b-sm">
                <a href="#" className={ClassNames({'active' : this.isInPlaylist() })} >
                  <i onClick={this.handleAddToPlaylist} className="fa fa-plus-circle text"/>
                  <i onClick={this.handleRemoveFromPlaylist} className="fa fa-check-circle text-active text-info"/>
                </a>
              </div>
            </div>
            <div className="crop">
            <a href="#">
              <img
                src={this.props.music.img}
                alt="" className="r r-2x img-full"
              />
            </a>
          </div>
        </div>
        <div className="padder-v">
          <a href="#" className="text-ellipsis">{this.props.music.title}</a>
          <a href="#" className="text-ellipsis text-xs text-muted">{this.props.music.artist}</a>
        </div>
      </div>
  </div>
  )
    ;
  }
}

export default MusicItem