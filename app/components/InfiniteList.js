import React from 'react';

import InfiniteStore from '../stores/InfiniteStore'
import MusicItem from './MusicItem'


class InfiniteList extends React.Component {

  constructor(props){
    super(props);
    this.isInfiniteLoading = false;
    this.state = InfiniteStore.getState();
    this.state.elements = this.buildElements(0, 20)
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
   InfiniteStore.listen(this.onChange);
  }

  componentWillUnmount() {
    InfiniteStore.unlisten(this.onChange);
  }

  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
      elements.push(<MusicItem key={i}/>)
    }
    return elements;
  }

  handleInfiniteLoad() {
    this.setState({
      isInfiniteLoading: true
    });

    console.log('infinite load');

    setTimeout(function() {
      var elemLength = that.state.elements.length,
        newElements = that.buildElements(elemLength, elemLength + 1000);
      that.setState({
        isInfiniteLoading: false,
        elements: that.state.elements.concat(newElements)
      });
    }, 2500);
  }

  elementInfiniteLoad() {
    return <div className="infinite-list-item">
      Loading...
    </div>;
  }

  render() {
  }
}

export default InfiniteList