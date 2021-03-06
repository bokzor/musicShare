import alt from '../alt'

import React from 'react'
import mixin from 'mixin-decorator'
import {Link} from 'react-router'
import {isEqual} from 'lodash'
import Loader from 'react-loader'

import composeAnimation from '../decorators/composeAnimation'

import GenreActions from '../actions/GenreActions'
import GenreStore from '../stores/GenreStore'
import GenreData from '../data/GenreData'

import InfiniteList from './InfiniteList'


//@mixin(composeAnimation)
class Genre extends React.Component {

  constructor(props) {
    super(props);
    this.state = GenreStore.getState();
    this.genres = GenreData;
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    GenreStore.listen(this.onChange);

    if (this.props.params.genreId) {
      GenreActions.getGenreMusics(this.props.params.genreId);
    } else {
      GenreActions.getMusics();
    }
  }

  componentWillUnmount() {
    GenreStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      alt.recycle(GenreStore);
      if (this.props.params.genreId)
        GenreActions.getGenreMusics(this.props.params.genreId, 0);
      else {
        GenreActions.getMusics(0);
      }
      this.state.isLoading = true;
    }
  }

  onChange(state) {
    this.setState(state);
  }

  loadMoreItems() {
    if (this.props.params.genreId) {
      GenreActions.getGenreMusics(this.props.params.genreId, this.state.page);
    } else {
      GenreActions.getMusics(this.state.page);
    }
    this.state.isLoading = true;
  }

  render() {
    let genre = GenreData.find(e => e.value == this.props.params.genreId);

    let genres = this.genres.map((genre) => {
      return (
        <Link key={genre.value} activeClassName="active" to={'/genres/' + genre.value} className="list-group-item">
          {genre.label}
        </Link>
      )
    });

    return (
      <section id="content">
        <section className="vbox">
          <section className="w-f-md" id="bjax-target">
            <section className="hbox stretch">
              <aside className="aside bg-light dk" id="sidebar">
                <section className="vbox animated fadeInUp">
                  <section className="scrollable hover">
                    <div className="list-group no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                      <Link to="/genres" className="list-group-item">
                        All
                      </Link>
                      {genres}
                    </div>
                  </section>
                </section>
              </aside>
              <section>
                <section className="vbox">
                  <section className="scrollable padder-lg">
                    <h2 className="font-thin m-b">
                      {(genre)
                        ? genre.label
                        : 'All'
                      }
                    </h2>
                    <div className="row row-sm">
                      <Loader color="#4cb6cb" loaded={!this.state.isLoading}>
                        <InfiniteList
                          isLoading={this.state.isLoading}
                          musics={this.state.musics}
                          loadMoreItems={this.loadMoreItems.bind(this)}
                          genre={this.state.genre}
                        />
                      </Loader>
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open"
           data-target="#nav,html"></a>
      </section>

    );
  }

}

export default Genre;