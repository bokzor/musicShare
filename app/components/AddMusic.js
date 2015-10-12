import React from 'react';
import AddMusicStore from '../stores/AddMusicStore';
import AddMusicActions from '../actions/AddMusicActions';

class AddMusic extends React.Component {
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

    var title = this.state.title.trim();
    var isMix = this.state.isMix;

    if (!title) {
      AddMusicActions.invalidTitle();
      this.refs.titleTextField.getDOMNode().focus();
    }

    if (!isMix) {
      AddMusicActions.invalidIsMix();
    }

    if (title && isMix) {
      AddMusicActions.addMusic(title, isMix);
    }
  }

  render() {
    return (
      <section>
        <section className="vbox">
          <section className="scrollable padder-lg w-f-md" id="bjax-target">
            <h2 className="font-thin m-b">Add a music <span className="musicbar animate inline m-l-sm" style={{ width: '20px',height: '20px' }}>
              <span className="bar1 a1 bg-primary lter"></span>
              <span className="bar2 a2 bg-info lt"></span>
              <span className="bar3 a3 bg-success"></span>
              <span className="bar4 a4 bg-warning dk"></span>
              <span className="bar5 a5 bg-danger dker"></span>
            </span></h2>
            <section className="panel panel-default">
              <header className="panel-heading font-bold">
                Add a music to my profile!
              </header>
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-name">Complete name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-id-name"/>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-artist">Artist</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-id-artist"/>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className={'form-group ' + this.state.titleValidationState}>
                    <label className="col-sm-2 control-label" for="input-id-title">Title</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref='titleTextField' value={this.state.title} onChange={AddMusicActions.updateTitle} autoFocus/>
                      <span className='help-block'>{this.state.helpBlock}</span>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className={'form-group ' + this.state.isMixValidationState}>
                    <label className="col-sm-2 control-label" for="input-id-ismix">Is Mix ?</label>
                    <div className="col-sm-10">
                      <div className="checkbox i-checks">
                        <label>
                          <input type="checkbox" id="input-id-ismix" value={this.state.isMix === 'False'} checked={this.state.isMix === 'True'} onChange={AddMusicActions.updateIsMix}/>
                          <i></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-duration-hours">Duration</label>
                    <div className="col-sm-10">
                      <div className="row">
                        <div className="col-md-2 input-group m-b" style={{ marginLeft: '15px', float: 'left', marginRight: '25px' }}>
                          <input type="text" className="form-control" id="input-id-duration-hours"/>
                          <span className="input-group-addon">Hour(s)</span>
                        </div>
                        <div className="col-md-2 input-group m-b" style={{ float: 'left', marginRight: '25px' }}>
                          <input type="text" className="form-control" id="input-id-duration-minutes"/>
                          <span className="input-group-addon">Minute(s)</span>
                        </div>
                        <div className="col-md-2 input-group m-b">
                          <input type="text" className="form-control" id="input-id-duration-secondes"/>
                          <span className="input-group-addon">Seconde(s)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-tag">Tag</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="input-id-tag"/>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Genres</label>
                    <div className="col-sm-10">
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
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Emo</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Folk</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Hardcore</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Hip hop</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Indie</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Jazz</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Latin</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Metal</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Pop</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Pop punk</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Punk</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Reggae</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Rnb</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Rock</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">Soul</a></li>
                          <li><input type="checkbox" name="d-s-c-5"/><a href="#">World</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Image</label>
                    <div className="col-sm-10">
                      <input type="file" className="filestyle" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline v-middle input-s" id="filestyle-0" style={{ position: 'fixed', left: '-500px' }}/>
                      <div className="bootstrap-filestyle" style={{ display: 'inline' }}>
                        <input type="text" className="form-control inline v-middle input-s" disabled=""/>
                        <label for="filestyle-0" className="btn btn-default">
                          <span>Choose file</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" for="input-id-url">Url</label>
                    <div className="col-sm-10">
                      <div className="input-group m-b">
                        <span className="input-group-addon">https://www.youtube.com/watch?v=</span>
                        <input type="text" className="form-control" id="input-id-url" placeholder="Za0CMC4Zw3k"/>
                      </div>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Host</label>
                    <div className="col-sm-10">
                      <select name="account" className="form-control m-b">
                        <option>Soundcloud</option>
                        <option>Youtube</option>
                      </select>
                    </div>
                  </div>
                  <div className="line line-dashed b-b line-lg pull-in"></div>
                  <div className="form-group">
                    <div className="col-sm-4 col-sm-offset-2">
                      <button type="submit" className="btn btn-default">Cancel</button>
                      <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <div className="row m-t-lg m-b-lg">
              <div className="col-sm-6">
                <div className="bg-primary wrapper-md r">
                  <a href="#">
                    <span className="h4 m-b-xs block"><i className="icon-user-follow i-lg"></i> Login or Create account</span>
                    <span className="text-muted">Save and share your playlist with your friends when you log in or create an account.</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="bg-black wrapper-md r">
                  <a href="#">
                    <span className="h4 m-b-xs block"><i className="icon-cloud-download i-lg"></i> Download our app</span>
                    <span className="text-muted">Get the apps for desktop and mobile to start listening music at anywhere and anytime.</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default AddMusic;