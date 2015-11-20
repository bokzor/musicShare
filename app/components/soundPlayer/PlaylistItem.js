import React from 'react'
import ClassNames from 'classnames'
import PlayerActions from '../../actions/PlayerActions'

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  removeFromPlaylist() {
    PlayerActions.removeFromPlaylist(this.props.music);
  }

  handlePlay() {
    PlayerActions.play(this.props.music);
  }

  render() {
    var activeClass = ClassNames({
      'jp-playlist-current': this.props.active
    });

    return (
      <li className={activeClass} >
        <div>
          <a onClick={this.removeFromPlaylist} className="jp-playlist-item-remove">×</a>
          <a onClick={this.handlePlay} className={activeClass + ' jp-playlist-item'}>{this.props.music.title}
            <span className="jp-artist"> - {this.props.music.artist}</span></a>
        </div>
      </li>
    );
  }


}

export default PlaylistItem