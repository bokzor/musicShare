import React from 'react'


class UnfollowedButton extends React.Component {

  render() {
    return (
        <a onClick={this.props.onClick} className="btn btn-success m-t-xs" style={{float: 'right'}}>
          Unfollow
        </a>
    );
  }
}

export default UnfollowedButton