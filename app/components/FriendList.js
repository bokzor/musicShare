import React from 'react';
import {debounce} from 'lodash'
import FriendActions from '../actions/FriendActions'
import FriendStore from '../stores/FriendStore'
import FriendListItem from './FriendListItem'

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = FriendStore.getState();
    this.onChange = this.onChange.bind(this);
    this.filterByUsername = this.filterByUsername.bind(this);

    // limit this function every 200 ms
    this.onSearch = debounce(this.onSearch, 200);
  }

  componentDidMount () {
    FriendStore.listen(this.onChange);
    FriendActions.getFriendsList();
  }

  componentWillUnmount() {
    FriendStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  onSearch(event){
      FriendActions.updateSearchQuery(event.target.value);
      FriendActions.getSearchList(this.state.searchQuery);
  }

  filterByUsername(friend) {
    if (this.state.searchQuery === '') return true;
    return friend.username.indexOf(this.state.searchQuery) > -1;
  }


  render() {
    let friends = this.state.friends.filter(this.filterByUsername).map((friend) => {
      return (
        <FriendListItem id={friend.id} username={friend.username} />
      )
    });

    let search = this.state.searchList.map((user) => {
      return (
        <FriendListItem id={user.id} username={user.username} />
      )
    });

    return (
      <aside className="aside-md bg-light dk" id="sidebar" style={{ width: '20%' }}>
        <section className="vbox animated fadeInRight">
          <section className="w-f-md scrollable hover">
            <header className="header header-md bg-black header-search-my-users">
              <form className="" role="search">
                <div className="form-group clearfix m-b-none">
                  <div className="input-group m-t m-b">
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-sm bg-empty text-muted btn-icon">
                          <i className="fa fa-search"></i>
                        </button>
                     </span>
                    <input
                      type="text"
                      className="form-control input-sm text-white bg-empty b-b b-dark no-border"
                      placeholder="Search members"
                      onChange={this.onSearch.bind(this)}
                    />
                  </div>
                </div>
              </form>
            </header>
            <ul className="list-group no-bg no-borders auto m-t-n-xxs list-my-users">
              {friends}
              {(this.state.searchQuery != '') ? search : null}
            </ul>
          </section>
        </section>
      </aside>
    );
  }
}

export default FriendList;
