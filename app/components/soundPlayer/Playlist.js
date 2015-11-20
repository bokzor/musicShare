import React from 'react'
import PlaylistItem from './PlaylistItem'


class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let playlist = this.props.musics.map((music, i) => {
      if(this.props.index == i)
        return (
          <PlaylistItem key={'p' + music._id} active={true} music={music} />
        );
      else {
        return (
          <PlaylistItem key={'p' + music._id} music={music} />
        )
      }

    });

    return (
      <div className="jp-playlist dropup" id="playlist">
        <ul className="dropdown-menu aside-xl dker">
          {playlist}
        </ul>
      </div>
    );
  }
}

export default Playlist