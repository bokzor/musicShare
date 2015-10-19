import React from 'react';
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'

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

  handleSubmit(event) {
    event.preventDefault();


    /*if (!name) {
      AddCharacterActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (name && gender) {
      AddCharacterActions.addCharacter(name, gender);
    }*/
  }

  render() {
    var hours, minutes, seconds, isMix;
    var duration = this.state.music.duration;
    if (duration) {
      // if music is longer than 20 minutes => isMix true
      isMix = duration > 1200000;
      if (isMix) {
        console.log('isMix' + isMix);
      }
      seconds = parseInt((duration / 1000) % 60);
      minutes = parseInt((duration / (1000 * 60)) % 60);
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    }

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
                        onChange={AddMusicActions.fetchUrl}s/>
                      <span className="help-block">{this.state.urlHelpBlock}</span>
                    </div>
                  </div>
                  <div id="div-url-result">
                    <div className="line line-dashed b-b line-lg pull-in"></div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-name">Complete name</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-id-name" value={this.state.music.completeName}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-artist">Artist</label>
                      <div className="col-sm-4">
                          <input type="text" className="form-control" id="input-id-artist" value={this.state.music.artist}/>
                      </div>
                      <label className="col-sm-2 control-label" for="input-id-title">Title</label>
                      <div className="col-sm-4">
                          <input type="text" className="form-control" id="input-id-title" value={this.state.music.title}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Genres</label>
                      <div className="col-sm-4">
                        <div className="btn-group m-r">
                          <button data-toggle="dropdown" className="btn btn-sm btn-default dropdown-toggle">
                            <span className="dropdown-label" data-placeholder="Please select">Please select</span>
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu dropdown-select">
                            <li><input type="checkbox" name="d-s-c-1"/><a href="#">Acoustic</a></li>
                            <li><input type="checkbox" name="d-s-c-2"/><a href="#">Ambient</a></li>
                            <li><input type="checkbox" name="d-s-c-3"/><a href="#">Blues</a></li>
                            <li><input type="checkbox" name="d-s-c-4"/><a href="#">Classical</a></li>
                            <li><input type="checkbox" name="d-s-c-5"/><a href="#">Electronic</a></li>
                          </ul>
                        </div>
                      </div>
                      <label className="col-sm-2 control-label" for="input-id-tag">Tag(s)</label>
                      <div className="col-sm-4">
                        <input type="text" className="form-control" id="input-id-tag"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" for="input-id-ismix">Is Mix ?</label>
                      <div className="col-sm-1">
                        <div className="checkbox i-checks">
                          <label>
                            {(isMix)
                              ?
                              <input type="checkbox" value="" id="input-id-ismix" checked/>
                              :
                              <input type="checkbox" value="" id="input-id-ismix"/>
                            }
                            <i></i>
                          </label>
                        </div>
                      </div>
                      <label className="col-sm-1 control-label" for="input-id-duration-hours">Duration</label>
                      <div className="col-sm-8">
                        <div className="row">
                          <div className="col-md-3 input-group m-b" style={{ marginLeft: '15px', float: 'left', marginRight: '40px' }}>
                            {(hours)
                              ?
                              <input type="text" className="form-control" id="input-id-duration-hours" value={hours}/>
                              :
                              <input type="text" className="form-control" id="input-id-duration-hours" value="0"/>
                            }
                            <span className="input-group-addon">Hour(s)</span>
                          </div>
                          <div className="col-md-3 input-group m-b" style={{ float: 'left', marginRight: '40px' }}>
                            {(minutes)
                              ?
                              <input type="text" className="form-control" id="input-id-duration-minutes" value={minutes}/>
                              :
                              <input type="text" className="form-control" id="input-id-duration-minutes" value="0"/>
                            }
                            <span className="input-group-addon">Minute(s)</span>
                          </div>
                          <div className="col-md-3 input-group m-b">
                            {(seconds)
                              ?
                              <input type="text" className="form-control" id="input-id-duration-secondes" value={seconds}/>
                              :
                              <input type="text" className="form-control" id="input-id-duration-secondes" value="0"/>
                            }
                            <span className="input-group-addon">Second(s)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" style={{ marginTop: '50px' }}>Image</label>
                      <div className="col-sm-5" style={{ marginTop: '50px' }}>
                        </div>
                        <div className="col-sm-5" style={{ textAlign: 'center' }}>
                          {(this.state.music.image)
                            ?
                            <img src={this.state.music.image} style={{ maxHeight: '150px' }}/>
                            :
                            <img src="http://placehold.it/150x150" style={{ maxHeight: '150px' }}/>
                          }
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-4 col-sm-offset-2">
                          <button type="submit" className="btn btn-primary" id="btn-save-music">Save Music</button>
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