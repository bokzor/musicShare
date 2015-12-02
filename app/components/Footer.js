import React from 'react'
import ClassNames from 'classnames'
import Moment from 'moment'
import Youtube from 'youtube-iframe-player'
import utils from '../lib/utils'


import ProgressBar from './soundPlayer/ProgressBar'
import Playlist from './soundPlayer/Playlist'

import PlayerActions from '../actions/PlayerActions'
import PlayerStore from '../stores/PlayerStore'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = PlayerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  componentDidMount() {
    PlayerStore.listen(this.onChange);
    this.initPlayer();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {

    // get the current Music
    this.music = this.state.musics[this.state.currentMusicIndex];

    if (!this.music) {
      this.destructPlayer();
      return
    }

    // Init the player if the currentIndex change
    if (this.state.currentMusicIndex != prevState.currentMusicIndex || this.music.url != prevState.musics[prevState.currentMusicIndex].url) {
      this.initSoundObject(this.music);
    }

    //Pause or Play the player if the state change
    if (this.state.isPlaying != prevState.isPlaying) {
      (this.state.isPlaying ? this.handlePlay() : this.handlePause())
    }

  }

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
    this.destructPlayer();
  }

  initPlayer() {
    soundManager.setup({url: '/swf/', wmode: 'transparent', debugMode: true});
  }

  /**
   * onChange() listen for change in store
   *
   *
   * @param {Object} state
   */

  onChange(state) {
    this.setState(state);
  }


  /**
   * changePosition() change the position
   * of the current music
   *
   * @param {Int} percent
   */

  changePosition(percent) {
    this.setState({position: percent * this.state.duration});

    if (this.music.hostType == 'soundcloud') {
      this.player.setPosition(percent * this.state.duration * 1000);
    }

    if (this.music.hostType == 'youtube') {
      this.player.seekTo(percent * this.state.duration);
    }
  }


  /**
   * destructPlayer() free the memory
   * and clears interval
   *
   */

  destructPlayer() {

    clearInterval(this.time_update_interval);

    if (this.player) {

      // check if the player is a soundcloud instance
      this.player.hasOwnProperty('destruct') ? this.player.destruct() : this.player.destroy();

      this.player = null;
    }
  }


  /**
   * initSoundObject() create either a youtube
   * or a soundcloud sound object
   *
   * @param {Object} music
   */

  initSoundObject(music) {
    this.destructPlayer();

    if (music.hostType == 'soundcloud') {
      this.initSoundCloud(music);
    }

    if (music.hostType == 'youtube') {
      this.initYoutube(music);
    }

  }

  /**
   * initYoutube() create a youtube
   * sound object
   *
   * @param {Object} music
   */

  initYoutube(music) {
    const self = this;
    const id = utils.getIdYoutube(music.url);
    Youtube.init(() => {
      this.player = Youtube.createPlayer('youtube-video', {
        width: '200',
        height: '200',
        videoId: id,
        playerVars: {'autoplay': 0, 'controls': 0},
        events: {
          'onStateChange': self.onYoutubeStateChange.bind(self),
          'onReady': self.onYoutubeReady.bind(this)
        }
      });
    });
  }


  updateProgressBar() {
    this.setState({
      position: this.player.getCurrentTime(),
      duration: this.player.getDuration()
    });
  }

  onYoutubeReady() {
    this.setState({'isPlaying': true});
  }

  onYoutubeStateChange(event) {
    if (this.time_update_interval)
      clearInterval(this.time_update_interval);

    this.time_update_interval = setInterval(this.updateProgressBar.bind(this), 100);

    if (event.data === 0)
      this.playEnd();
  }

  initSoundCloud(music) {
    var self = this;

    this.player = soundManager.createSound({
      url: music.stream_url,
      volume: this.state.volume,
      autoPlay: true,
      whileloading() {
        //TODO : show a loader
      },
      onfinish: function () {
        self.playEnd();
        self.setState({position: 0});
        PlayerActions.setIsPlaying(false);
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
    this.setState({'isPlaying': true})

  }


  /**
   * playEnd() plays every music in the playlist
   *
   */

  playEnd() {
    (this.state.currentMusicIndex == this.state.musics.length - 1) ? this.handleStop() : PlayerActions.next();
  }

  /**
   * handleStop() stop the music and destruct the player
   *
   */


  handleStop() {
    this.destructPlayer();
    PlayerActions.setPause();
  }

  /**
   * handlePlay() play the current music
   *
   */


  handlePlay() {
    if (this.music.hostType == 'soundcloud')
      this.player.play();
    else {
      this.player.playVideo();
    }
  }

  /**
   * handlePause() pause the current music
   *
   */

  handlePause() {
    if (this.music.hostType == 'soundcloud')
      this.player.pause();
    else {
      this.player.pauseVideo();
    }
  }

  /**
   * handeleMute() mute or unmute the sound player
   * of the current music
   *
   */


  handleMute() {

    if (this.state.mute) {

      if (this.music.hostType == 'soundcloud')
        this.player.toggleMute();

      if (this.music.hostType == 'youtube')
        this.player.unMute();

      this.setState({mute: false});

    } else {

      if (this.music.hostType == 'soundcloud')
        this.player.toggleMute();

      if (this.music.hostType == 'youtube')
        this.player.mute();

      this.setState({mute: true})
    }

  }

  /**
   * handleRepeat() active or desactive the repeat mode
   *
   */

  handleRepeat() {
    this.state.repeat ? this.setState({repeat: false}) : this.setState({repeat: true});
  }

  /**
   * hanldeShuffle() active or desactive the suffle mode
   *
   */

  handleShuffle() {
    this.state.shuffle ? this.setState({shuffle: false}) : this.setState({shuffle: true});
  }


  render() {

    // progress bar
    var progress;

    this.state.duration > 0 ? progress = this.state.position / this.state.duration * 100 : progress = 0;


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
                  <div><a onClick={PlayerActions.prev} className="jp-previous"><i className="icon-control-rewind i-lg"/></a>
                  </div>

                  <div>
                    { (!this.state.isPlaying)
                      ?
                      <a onClick={PlayerActions.setPlay} className="jp-play"><i className="icon-control-play i-2x"/></a>
                      :
                      <a onClick={PlayerActions.setPause} className="jp-pause"><i
                        className="icon-control-pause i-2x"/></a>
                    }
                  </div>

                  <div>
                    <a onClick={PlayerActions.next} className="jp-next">
                      <i className="icon-control-forward i-lg"/>
                    </a>
                  </div>

                  <div className="hide">
                    <a className="jp-stop"><i className="fa fa-stop"/></a>
                  </div>

                  <div>
                    <a data-toggle="dropdown" data-target="#playlist"><i className="icon-list"/></a>
                  </div>

                  <ProgressBar
                    handleSeek={this.handleSeek}
                    progress={progress}
                    music={this.state.musics[this.state.currentMusicIndex]}
                    changePosition={this.changePosition}
                  />

                  <div className="hidden-xs hidden-sm jp-current-time text-xs text-muted">
                    {utils.formatTime(this.state.position)}
                  </div>

                  <div className="hidden-xs hidden-sm jp-duration text-xs text-muted">
                    {utils.formatTime(this.state.duration)}
                  </div>

                  <div className="hidden-xs hidden-sm">
                    <a onClick={this.handleMute} className={ClassNames({ 'jp-mute': true, 'hid': this.state.mute })}
                       title="mute">
                      <i className="icon-volume-2"/>
                    </a>
                    <a onClick={this.handleMute}
                       className={ClassNames({ 'jp-unmute': true, 'hid': !this.state.mute })}
                       title="unmute">
                      <i className="icon-volume-off"/>
                    </a>
                  </div>

                  <div className="hidden-xs hidden-sm jp-volume">
                    <div className="jp-volume-bar dk">
                      <div className="jp-volume-bar-value lter"></div>
                    </div>
                  </div>

                  <div>
                    <a onClick={this.handleShuffle}
                       className={ClassNames({ 'jp-shuffle': true, 'hid': this.state.shuffle })} title="shuffle">
                      <i className="icon-shuffle text-muted"/>
                    </a>
                    <a onClick={this.handleShuffle}
                       className={ClassNames({ 'jp-shuffle-off': true, 'hid': !this.state.shuffle })}
                       title="shuffle off">
                      <i className="icon-shuffle text-lt"/>
                    </a>
                  </div>

                  <div>
                    <a onClick={this.handleRepeat}
                       className={ClassNames({ 'jp-repeat': true, 'hid': this.state.repeat })} title="repeat">
                      <i className="icon-loop text-muted"/>
                    </a>
                    <a onClick={this.handleRepeat}
                       className={ClassNames({ 'jp-repeat': true, 'hid': !this.state.repeat })} title="repeat off">
                      <i className="icon-loop text-lt"/>
                    </a>
                  </div>

                  <div className="hide">
                    <a className="jp-full-screen" title="full screen"><i className="fa fa-expand"/></a>
                    <a className="jp-restore-screen" title="restore screen"><i className="fa fa-compress text-lt"/></a>
                  </div>
                </div>

              </div>
            </div>

            <Playlist
              musics={this.state.musics}
              index={this.state.currentMusicIndex}
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