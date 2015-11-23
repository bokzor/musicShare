import React from 'react'
import classnames  from 'classnames'

import PlayerStore from '../stores/PlayerStore'

class MusicBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = PlayerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PlayerStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    const musicbarClass = classnames({
      'musicbar': true,
      'animate': this.state.isPlaying,
      'inline': true,
      'm-l-sm' : true
    });

    return (
      <span className={musicbarClass}
            style={{ width: '20px', height: '20px '}}
      >
        <span className="bar1 a1 bg-primary lter"></span>
        <span className="bar2 a2 bg-info lt"></span>
        <span className="bar3 a3 bg-success"></span>
        <span className="bar4 a4 bg-warning dk"></span>
        <span className="bar5 a5 bg-danger dker"></span>
      </span>
    );
  }
}

export default MusicBar