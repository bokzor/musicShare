import React from 'react';


class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <li key={this.props.id} className="list-group-item">
            <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
            <img src={'http://api.adorable.io/avatars/40/' + this.props.username + "@adorable.png"} alt="..."
                 className="img-circle"/>
            <i className="on b-light right sm"></i>
            </span>
        <div className="clear">
          <div><a href="#">{this.props.username}</a></div>
          <small className="text-muted">New York</small>
        </div>
      </li>
    );
  }
}

export default FriendList;
