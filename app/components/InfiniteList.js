import React from 'react'
import ReactList from 'react-list'
import Waypoint from 'react-waypoint'

import InfiniteStore from '../stores/InfiniteStore'
import InfiniteActions from '../actions/InfiniteActions'

import MusicItem from './MusicItem'
import {isEqual} from 'lodash'


class InfiniteList extends React.Component {

  constructor(props) {
    super(props);
    this.isLoading = this.props.isLoading;
  }

  componentWillReceiveProps(nextProps) {
    this.isLoading = nextProps.isLoading;
  }

  renderItem(index, key) {
    return <MusicItem key={key} music={this.props.musics[index]}/>
  }

  renderList() {
      return (
        <ReactList
          length={this.props.musics.length}
          itemRenderer={this.renderItem.bind(this)}
          type='uniform'
          pageSize={30}
          threshold={200}
        />
      );
  }

  renderWaypoint() {
    if (!this.isLoading) {
      return (
        <Waypoint
          onEnter={this.loadMoreItems.bind(this)}
          threshold={0.1}
        />
      );
    }
  }

  loadMoreItems() {
    this.props.loadMoreItems();
  }

  render() {
    return (
      <div>
        {this.renderList()}
        {this.renderWaypoint()}
      </div>
    );
  }
}

export default InfiniteList