import React from 'react'


class MusicLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jp-title text-lt">
        <ul>
          {this.props.music ?
            <li>{this.props.music.artist} - {this.props.music.title}</li>
            : null
          }
        </ul>
      </div>
    );
  }
}

export default MusicLabel