import React from 'react'


class FollowedButton extends React.Component {

  render() {
    return (
        <a onClick={this.props.onClick} className="pull-right btn btn-default btn-following">
          Follow {this.props.username}
        </a>
    );
  }
}

export default FollowedButton