import React from 'react';
import {Link} from 'react-router';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.id} className="list-group-item">
        <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
          <img
            src={'http://api.adorable.io/avatars/40/' + this.props.username + "@adorable.png"}
            alt="..."
            className="img-circle"
          />
          <i className="on b-light right sm"/>
        </span>
        <div className="clear">
          <div>
            <Link to={'/profile/' + this.props.username}>{this.props.username}</Link>
          </div>
          <small className="text-muted">New York</small>
        </div>
      </li>
    );
  }
}

export default FriendList;
