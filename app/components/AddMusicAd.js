import React from 'react';
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import Select from 'react-select'


import AddMusicStore from '../stores/AddMusicStore'
import AddMusicActions from '../actions/AddMusicActions'

@mixin(addChangeHandler)
class AddMusicAd extends React.Component {

  constructor(props) {
    super(props);
    this.state = AddMusicStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddMusicStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddMusicStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  changeGenre(value) {
    this.state.music.genres = value;
  }

  changeTag(value) {
    this.state.music.tags = value;
  }

  handleSubmit(event) {
    event.preventDefault();
    AddMusicActions.addMusic(this.state.music)
  }

  render() {
    return (
      <section>
        <section className="vbox">
          <section className="scrollable padder-lg w-f-md" id="bjax-target">
            <h2 className="font-thin m-b">Add a music</h2>
            <section className="panel panel-default" style={{ width: '80%', margin: '0 auto' }}>
              <header className="panel-heading font-bold" id="text-form-add-music">
                Add a music to my profile!
              </header>
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-url">URL</label>
                    <div className="col-sm-10">
                      <input
                        placeholder="https://soundcloud.com/XXXX / https://www.youtube.com/watch?v=XXXX"
                        type="text"
                        className={'form-control ' + this.state.urlValidationState}
                        id="input-id-url"
                        data-required="true"
                        ref="urlTextField"
                        onChange={AddMusicActions.fetchUrl} s/>
                      <span className="help-block">{this.state.urlHelpBlock}</span>
                    </div>
                  </div>
                  <div style={{display: 'none'}} id="div-url-result">
                    <div className="line line-dashed b-b line-lg pull-in"></div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-name">Complete name</label>
                      <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="input-id-name"
                               value={this.state.music.completeName}
                               onChange={this.changeHandler.bind(this, 'music', 'completeName')}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-artist">Artist</label>
                      <div className="col-sm-4">
                        <input type="text"
                               className="form-control"
                               id="input-id-artist"
                               value={this.state.music.artist}
                               onChange={this.changeHandler.bind(this, 'music', 'artist')}/>

                      </div>
                      <label className="col-sm-2 control-label" for="input-id-title">Title</label>
                      <div className="col-sm-4">
                        <input type="text"
                               className="form-control"
                               id="input-id-title"
                               value={this.state.music.title}
                               onChange={this.changeHandler.bind(this, 'music', 'title')}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Genres</label>
                      <div className="col-sm-4">
                        <div className="btn-group m-r">
                          <Select
                            name="form-field-name"
                            value={this.state.music.genres}
                            options={this.state.genres}
                            onChange={this.changeGenre.bind(this)}
                            multi={true}
                          />
                        </div>
                      </div>
                      <label className="col-sm-2 control-label" for="input-id-tag">Tag(s)</label>
                      <div className="col-sm-4">
                        <Select
                          name="form-field-name"
                          multi={true}
                          allowCreate={true}
                          onChange={this.changeTag.bind(this)}
                          searchPromptText="Tags"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-ismix">Is Mix ?</label>
                      <div className="col-sm-1">
                        <div className="checkbox i-checks">
                          <label>
                            {(this.state.music.isMix)
                              ?
                              <input type="checkbox" value="" id="input-id-ismix" checked/>
                              :
                              <input type="checkbox" value="" id="input-id-ismix"/>
                            }
                            <i></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" style={{ marginTop: '50px' }}>Image</label>
                      <div className="col-sm-5">
                        <img src={this.state.music.image} style={{ maxHeight: '100px' }}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div style={{ marginTop: '20px'}} className="col-sm-4 col-sm-offset-2">
                        <button type="submit"
                                className="btn btn-primary"
                                id="btn-save-music"
                                onClick={this.handleSubmit.bind(this)}>Save Music
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default AddMusicAd;