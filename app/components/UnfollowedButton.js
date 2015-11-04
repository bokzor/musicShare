import React from 'react'


class UnfollowedButton extends React.Component {

  render() {
    return (
        <a onClick={this.props.onClick} className="pull-right btn btn-default btn-following">
          Unfollow {this.props.username}
        </a>
    );
  }
}

export default UnfollowedButton