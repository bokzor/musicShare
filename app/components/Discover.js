import React from 'react';

import DiscoverStore from '../stores/DiscoverStore'
import DiscoverActions from '../actions/DiscoverActions'

import InfiniteList from './InfiniteList'
import MusicBar from './MusicBar'
import Loader from 'react-loader'

class Discover extends React.Component {

  constructor(props) {
    super(props);
    this.state = DiscoverStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    DiscoverStore.listen(this.onChange);
    DiscoverActions.getMusics();
  }

  componentWillUnmount() {
    DiscoverStore.unlisten(this.onChange);
  }

  loadMoreItems() {
    DiscoverActions.getMusics(this.state.page);
    this.state.isLoading = true;

  }


  render() {
    return (
      <section>
        <section className="vbox">
          <section className="scrollable padder-lg w-f-md" id="bjax-target">
            <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin">
              <i className="icon-refresh i-lg  inline" id="refresh"></i>
            </a>
            <h2 className="font-thin m-b">Discover
              <MusicBar />
            </h2>

            <div className="row row-sm">
              <Loader color="#4cb6cb" loaded={!this.state.isLoading}>
                <InfiniteList
                  isLoading={this.state.isLoading}
                  musics={this.state.musics}
                  loadMoreItems={this.loadMoreItems.bind(this)}
                />
              </Loader>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Discover