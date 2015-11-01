import React from 'react';
import InfiniteList from './InfiniteList'

class Discover extends React.Component {
  render() {
    return (
      <section>
        <section className="vbox">
          <section className="scrollable padder-lg w-f-md" id="bjax-target">
            <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i className="icon-refresh i-lg  inline" id="refresh"></i></a>
            <h2 className="font-thin m-b">Discover <span className="musicbar animate inline m-l-sm" style={{ width: '20px', height: '20px' }}>
              <span className="bar1 a1 bg-primary lter"></span>
              <span className="bar2 a2 bg-info lt"></span>
              <span className="bar3 a3 bg-success"></span>
              <span className="bar4 a4 bg-warning dk"></span>
              <span className="bar5 a5 bg-danger dker"></span>
              </span>
            </h2>

            <div className="row row-sm">
              <InfiniteList />
            </div>

          </section>
        </section>
      </section>
    );
  }
}

export default Discover