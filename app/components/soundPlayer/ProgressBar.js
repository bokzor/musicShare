import React from 'react'
import MusicLabel from './MusicLabel'


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeek = this.handleSeek.bind(this);
  }

  handleSeek(event) {
    var container = $(this.refs.progressBar);
    var containerStartX = container.offset().left;
    var percent = (event.clientX - containerStartX) / container.width();
    percent = percent >= 1 ? 1 : percent;
    this.props.changePosition(percent);
  }

  render() {
    return (
      <div className="jp-progress hidden-xs">
        <div
          ref="progressBar"
          className="jp-seek-bar dk"
          onClick={this.handleSeek}>
          <div
            style={{width: this.props.progress + '%'}}
            className="jp-play-bar bg-info">
          </div>
          <MusicLabel
            music={this.props.music} />
        </div>
      </div>
    );
  }
}

export default ProgressBar