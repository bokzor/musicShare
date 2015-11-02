import React from 'react'


class MusicBar extends React.Component {


  render() {
    return (
      <span className="musicbar animate inline m-l-sm"
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