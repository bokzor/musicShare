import React from 'react'


class FollowedButton extends React.Component {

  render() {
    return (
        <a onClick={this.props.onClick} className="btn btn-success m-t-xs" style={{float: 'right'}}>
          Follow {this.props.username}
        </a>
    );
  }
}

export default FollowedButton