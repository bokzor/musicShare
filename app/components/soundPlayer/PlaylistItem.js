import React from 'react'
import ClassNames from 'classnames'
import PlayerActions from '../../actions/PlayerActions'

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeFromPlaylist() {
    PlayerActions.removeFromPlaylist(this.props.music)
  }

  render() {
    var activeClass = ClassNames({
      'jp-playlist-current': this.props.active
    });

    return (
      <li className={activeClass} >
        <div>
          <a onClick={this.removeFromPlaylist.bind(this)} className="jp-playlist-item-remove">×</a>
          <a className={activeClass + ' jp-playlist-item'}>{this.props.music.title}
            <span className="jp-artist"> - {this.props.music.artist}</span></a>
        </div>
      </li>
    );
  }


}

export default PlaylistItem