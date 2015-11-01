import React from 'react';
import ReactList from 'react-list';

import InfiniteStore from '../stores/InfiniteStore'
import InfiniteActions from '../actions/InfiniteActions'

import MusicItem from './MusicItem'


class InfiniteList extends React.Component {

  constructor(props){
    super(props);
    this.state = InfiniteStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
    console.log(this.state.musics, 'dd')
  }

  componentDidMount() {
    InfiniteStore.listen(this.onChange);
    InfiniteActions.getMusics();
  }

  componentWillUnmount() {
    InfiniteStore.unlisten(this.onChange);
  }


  renderItem(index, key) {
    return <MusicItem key={key} music={this.state.musics[index]} />
  }

  render() {
    return <ReactList
      length={this.state.musics.length}
      itemRenderer={this.renderItem.bind(this)}
      type='uniform'
      pageSize={30}
      threshold={200}
    />;
  }
}

export default InfiniteList