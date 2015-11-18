import React from 'react'
import ProgressBar from './soundPlayer/ProgressBar'
import Playlist from './soundPlayer/Playlist'

import PlayerActions from '../actions/PlayerActions'
import PlayerStore from '../stores/PlayerStore'
import utils from '../lib/utils'
import Moment from 'moment'
import Youtube from 'youtube-iframe-player'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = PlayerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }

  componentDidMount() {
    PlayerStore.listen(this.onChange);
    this.initPlayer();
  }

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
  }

  initPlayer() {
    this.player = soundManager.setup({url: '/swf/', wmode: 'transparent', debugMode: true});
  }

  onChange(state) {
    this.setState(state);
  }

  handleSongPlaying(music) {
    this.setState({duration: music.duration});
  }

  changePosition(percent) {
    this.setState({progress: percent * 100, position: percent * this.state.duration});
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    let music = this.state.musics[this.state.currentSongIndex];
    // init the player if the currentIndex change
    if (this.state.currentSongIndex != prevState.currentSongIndex) {
      this.initSoundObject(music);
    }

    // change the music position
    if (this.state.position != prevState.position) {
      if (music.hostType == 'soundcloud') {
        this.soundObject.setPosition(this.state.position * 1000);
      }
      if (music.hostType == 'youtube') {
        this.soundObject.seekTo(this.state.position);
      }
    }
  }

  destructPlayer() {
    console.log('destr');


    clearInterval(this.time_update_interval);
    if(this.soundObject) {
      if (this.soundObject.hasOwnProperty('destruct')) {
        console.log('destruct');
        this.soundObject.destruct();
      }
      else {
        console.log('destroy');
        this.soundObject.destroy();
      }
    }
  }

  initSoundObject(music) {
    this.destructPlayer();

    if (music.hostType == 'soundcloud') {
      console.log('init soundcloud');
      this.initSoundCloud(music);
    }
    if (music.hostType == 'youtube') {
      console.log('init youtube');
      this.initYoutube(music);
    }

  }

  initYoutube(music) {
    let self = this;
    let id = utils.getIdYoutube(music.url);
    Youtube.init(() => {
      this.soundObject = Youtube.createPlayer('youtube-video', {
        width: '200',
        height: '200',
        videoId: id,
        playerVars: {'autoplay': 1, 'controls': 0},
        events: {
          'onStateChange': self.onYoutubeStateChange.bind(self)
        }
      });
    });
  }

  updateProgressBar() {
    this.setState({
      position: this.soundObject.getCurrentTime(),
      duration: this.soundObject.getDuration()
    });
  }


  onYoutubeStateChange(event) {
    if(this.time_update_interval)
      clearInterval(this.time_update_interval);
    this.time_update_interval = setInterval(this.updateProgressBar.bind(this), 1000);
  }


  initSoundCloud(music) {
    var self = this;

    this.soundObject = soundManager.createSound({
      url: music.stream_url,
      volume: this.state.volume,
      autoPlay: true,
      whileloading() {
        //TODO : show a loader
      },
      onfinish: function () {
        self.setState({position: 0, isPlaying: false});
      },
      whileplaying() {
        self.setState(
          {
            position: this.position / 1000,
            duration: this.duration / 1000
          }
        );
      }
    });
  }

  playEnd() {
    if (this.state.currentSongIndex == this.state.musics.length - 1) {
      this.stop();
    } else {
      this.next();
    }
  }

  handlePlay() {
    if (this.state.musics[this.state.currentSongIndex].hostType == 'soundcloud')
      this.soundObject.play();

    if (this.state.musics[this.state.currentSongIndex].hostType == 'youtube')
      this.soundObject.playVideo();

    this.setState({isPlaying: true})
  }


  handlePause() {
    if (this.state.musics[this.state.currentSongIndex].hostType == 'soundcloud')
      this.soundObject.pause();

    if (this.state.musics[this.state.currentSongIndex].hostType == 'youtube')
      this.soundObject.pauseVideo();

    this.setState({isPlaying: false})
  }

  render() {


    // progressBar loading
    var progress;
    if (this.state.duration > 0)
      progress = this.state.position / this.state.duration * 100;
    else {
      progress = 0;
    }

    return (
      <footer className="footer bg-dark">
        <div id="youtube-video"></div>
        <div id="jp_container_N">
          <div className="jp-type-playlist">
            <div id="jplayer_N" className="jp-jplayer hide"></div>
            <div className="jp-gui">
              <div className="jp-video-play hide">
                <a className="jp-video-play-icon">play</a>
              </div>
              <div className="jp-interface">
                <div className="jp-controls">
                  <div><a className="jp-previous"><i className="icon-control-rewind i-lg"></i></a></div>
                  <div>
                    { (!this.state.isPlaying)
                      ?
                      <a onClick={this.handlePlay} className="jp-play"><i className="icon-control-play i-2x"></i></a>
                      :
                      <a onClick={this.handlePause} className="jp-pause"><i className="icon-control-pause i-2x"></i></a>
                    }

                  </div>
                  <div><a className="jp-next"><i className="icon-control-forward i-lg"></i></a></div>
                  <div className="hide"><a className="jp-stop"><i className="fa fa-stop"></i></a></div>
                  <div><a clasName="" data-toggle="dropdown" data-target="#playlist"><i className="icon-list"></i></a>
                  </div>
                  <ProgressBar
                    handleSeek={this.handleSeek}
                    progress={progress}
                    music={this.state.musics[this.state.currentSongIndex]}
                    changePosition={this.changePosition}
                  />
                  <div
                    className="hidden-xs hidden-sm jp-current-time text-xs text-muted">{utils.formatTime(this.state.position)}</div>
                  <div
                    className="hidden-xs hidden-sm jp-duration text-xs text-muted">{utils.formatTime(this.state.duration)}</div>
                  <div className="hidden-xs hidden-sm">
                    <a className="jp-mute" title="mute"><i className="icon-volume-2"></i></a>
                    <a className="jp-unmute hid" title="unmute"><i className="icon-volume-off"></i></a>
                  </div>
                  <div className="hidden-xs hidden-sm jp-volume">
                    <div className="jp-volume-bar dk">
                      <div className="jp-volume-bar-value lter"></div>
                    </div>
                  </div>
                  <div>
                    <a className="jp-shuffle" title="shuffle"><i className="icon-shuffle text-muted"></i></a>
                    <a className="jp-shuffle-off hid" title="shuffle off"><i className="icon-shuffle text-lt"></i></a>
                  </div>
                  <div>
                    <a className="jp-repeat" title="repeat"><i className="icon-loop text-muted"></i></a>
                    <a className="jp-repeat-off hid" title="repeat off"><i className="icon-loop text-lt"></i></a>
                  </div>
                  <div className="hide">
                    <a className="jp-full-screen" title="full screen"><i className="fa fa-expand"></i></a>
                    <a className="jp-restore-screen" title="restore screen"><i
                      className="fa fa-compress text-lt"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <Playlist
              musics={this.state.musics}
              index={this.state.currentSongIndex}

            />
            <div className="jp-no-solution hide">
              <span>Update Required</span>
              To play the media you will need to either update your browser to a recent version or update your <a
              href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;