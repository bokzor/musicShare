import React from 'react';
import ReactList from 'react-list';

import InfiniteStore from '../stores/InfiniteStore'
import InfiniteActions from '../actions/InfiniteActions'

import MusicItem from './MusicItem'
import {isEqual} from 'lodash'


class InfiniteList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItem(index, key) {
    return <MusicItem key={key} music={this.props.musics[index]}/>
  }

  render() {
    return <ReactList
      length={this.props.musics.length}
      itemRenderer={this.renderItem.bind(this)}
      type='uniform'
      pageSize={30}
      threshold={200}
    />;
  }
}

export default InfiniteList