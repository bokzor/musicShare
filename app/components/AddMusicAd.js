import React from 'react';
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'
import Select from 'react-select'
import Formsy from 'formsy-react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'

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

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  handleSubmit(data) {
    this.state.music.artist = data.artist;
    this.state.music.title = data.title;
    this.state.music.genres = data.genres;
    this.state.music.tags = data.tags;
    AddMusicActions.addMusic(this.state.music);
    this.refs.form.reset();
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
                <Formsy.Form
                  className="form-horizontal"
                  onValidSubmit={this.handleSubmit.bind(this)}
                  onValid={this.enableButton.bind(this)}
                  onInvalid={this.disableButton.bind(this)}
                  ref="form"
                >

                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-url">URL</label>
                    <div className="col-sm-10">
                      <input
                        placeholder="https://soundcloud.com/XXXX / https://www.youtube.com/watch?v=XXXX"
                        type="text"
                        className={'form-control ' + this.state.urlValidationState}
                        id="input-id-url"
                        data-required="true"
                        value={this.state.music.url}
                        ref="urlTextField"
                        onChange={AddMusicActions.fetchUrl}
                      />
                      <span className="help-block">{this.state.urlHelpBlock}</span>
                    </div>
                  </div>

                  {(this.state.urlIsValid)
                    ? <div id="div-url-result">
                    <div className="line line-dashed b-b line-lg pull-in"></div>
                    <TextInput
                      validationError="Please enter an Artist"
                      validations="maxLength:30,minLength:3"
                      required
                      name="artist"
                      placeholder="Artist"
                      title="Artist"
                      value={this.state.music.artist}
                      classContainer="col-sm-6"
                      id="input-id-artist"
                    />

                    <TextInput
                      type="text"
                      validationError="Please enter a Title"
                      validations="maxLength:50,minLength:3"
                      required
                      name="title"
                      placeholder="Title"
                      title="Title"
                      value={this.state.music.title}
                      classContainer="col-sm-6"
                      id="input-id-title"
                    />

                    <SelectInput
                      name="genres"
                      required
                      options={this.state.genres}
                      title="Genres"
                      id="genres"
                      value={this.state.music.genres}
                      classContainer="col-sm-6"
                      validationError="Please select a genre"
                      validations="isExisty"
                    />

                    <SelectInput
                      name="tags"
                      multi={true}
                      allowCreate={true}
                      searchPromptText="Tags"
                      placeholder="Tags"
                      noResultsText="Add a Tag"
                      title="Tags"
                      id="tags"
                      classContainer="col-sm-6"
                    />

                    <div className="form-group">
                      <label className="col-sm-2 control-label" style={{ marginTop: '50px' }}>Image</label>
                      <div className="col-sm-6">
                        <img src={this.state.music.image} style={{ maxHeight: '100px' }}/>
                      </div>
                    </div>


                    <div className="form-group">
                      <div style={{ marginTop: '20px'}} className="col-sm-4 col-sm-offset-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          id="btn-save-music"
                          disabled={!this.state.canSubmit}>
                          Save Music
                        </button>
                      </div>
                    </div>

                  </div>
                    : null
                  }
                </Formsy.Form>
              </div>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default AddMusicAd;