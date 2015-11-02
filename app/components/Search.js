import React from 'react';

import {Link} from 'react-router';
import {debounce} from 'lodash'

import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';

import InfiniteList from './InfiniteList'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
    this.onChange = this.onChange.bind(this);

    // limit this function every 1000 ms
    this.onSearch = debounce(this.onSearch, 1000);
  }

  componentDidMount () {
    SearchStore.listen(this.onChange);
    this.onSearch();
  }

  componentWillUnmount() {
    SearchStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.search !== this.props.params.search) {
      SearchActions.updateSearchQuery(this.props.params.search);
      this.onSearch();
    }
  }

  onChange(state) {
    this.setState(state);
  }

  onSearch(event){
    if (this.state.searchQuery) {
      SearchActions.getSearchMusic(this.state.searchQuery);
    } else {
      SearchActions.getSearchMusic(this.props.params.search);
    }
  }

  render() {
    let search = this.state.searchMusic.map((music) => {
      return (
        <p key={music._id}>{JSON.stringify(music, null, 4)}</p>
      )
    });

    return (
      <section>
        <section className="vbox">
          <section className="scrollable padder-lg w-f-md" id="bjax-target">
            <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i className="icon-refresh i-lg  inline" id="refresh"></i></a>
            <h2 className="font-thin m-b">Search results <span className="musicbar animate inline m-l-sm" style={{ width: '20px', height: '20px' }}>
              <span className="bar1 a1 bg-primary lter"></span>
              <span className="bar2 a2 bg-info lt"></span>
              <span className="bar3 a3 bg-success"></span>
              <span className="bar4 a4 bg-warning dk"></span>
              <span className="bar5 a5 bg-danger dker"></span>
              </span>
            </h2>
           <h3>{this.props.params.search} </h3>
            <div className="row row-sm">
              {search}
              <InfiniteList musics={this.state.musics} />
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Search