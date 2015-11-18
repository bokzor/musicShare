import React from 'react'
import ClassNames from 'classnames'


class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var activeClass = ClassNames({
      'jp-playlist-current': this.props.active
    });

    return (
      <li className={activeClass} >
        <div>
          <a className="jp-playlist-item-remove">×</a>
          <a className={activeClass + ' jp-playlist-item'}>{this.props.music.title}
            <span className="jp-artist">{this.props.music.artist}</span></a>
        </div>
      </li>
    );
  }


}

export default PlaylistItem