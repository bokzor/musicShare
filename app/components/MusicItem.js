import React from 'react'
import moment from 'moment'

import ImageLoader from 'react-imageloader'
import PlayerActions from '../actions/PlayerActions'

class MusicItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    e.preventDefault();
    PlayerActions.play(this.props.music);
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
                <a onClick={this.handlePlay} href="#"><i className="fa fa-play-circle i-2x"/></a>
              </div>
              <div className="bottom padder m-b-sm">
                <a href="#" data-toggle="class">
                  <i className="fa fa-plus-circle text"/>
                  <i className="fa fa-check-circle text-active text-info"/>
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