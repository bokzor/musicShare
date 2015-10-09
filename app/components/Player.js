import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <div id="jp_container_N">
          <div className="jp-type-playlist">
            <div className="jp-jplayer hide" id="jplayer_N">
            </div>

            <div className="jp-gui">
              <div className="jp-video-play hide">
                <a className="jp-video-play-icon">play</a>
              </div>

              <div className="jp-interface">
                <div className="jp-controls">
                  <div>
                    <a className="jp-previous icon-control-rewind i-lg"></a>
                  </div>

                  <div>
                    <a className="jp-play icon-control-play i-2x"></a> <a
                    className="jp-pause hid icon-control-pause i-2x"></a>
                  </div>

                  <div>
                    <a className="jp-next icon-control-forward i-lg"></a>
                  </div>

                  <div className="hide">
                    <a className="jp-stop fa fa-stop"></a>
                  </div>

                  <div>
                    <a className="icon-list" data-target="#playlist" data-toggle="dropdown"><i
                      className="icon-list"></i></a>
                  </div>

                  <div className="jp-progress hidden-xs">
                    <div className="jp-seek-bar dk">
                      <div className="jp-play-bar bg-info">
                      </div>

                      <div className="jp-title text-lt">
                        <ul>
                          <li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="hidden-xs hidden-sm jp-current-time text-xs text-muted">
                  </div>

                  <div className="hidden-xs hidden-sm jp-duration text-xs text-muted">
                  </div>

                  <div className="hidden-xs hidden-sm">
                    <a className="jp-mute icon-volume-2" title="mute"></a> <a className="jp-unmute hid icon-volume-off"
                                                                              title="unmute"></a>
                  </div>

                  <div className="hidden-xs hidden-sm jp-volume">
                    <div className="jp-volume-bar dk">
                      <div className="jp-volume-bar-value lter">
                      </div>
                    </div>
                  </div>

                  <div>
                    <a className="jp-shuffle icon-shuffle text-muted" title="shuffle"></a> <a
                    className="jp-shuffle-off hid icon-shuffle text-lt"
                    title="shuffle off"></a>
                  </div>

                  <div>
                    <a className="jp-repeat icon-loop text-muted" title="repeat"></a> <a
                    className="jp-repeat-off hid icon-loop text-lt" title="repeat off"></a>
                  </div>

                  <div className="hide">
                    <a className="jp-full-screen fa fa-expand" title="full screen"></a>
                    <a className="jp-restore-screen fa fa-compress text-lt" title="restore screen"></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="jp-playlist dropup" id="playlist">
              <ul className="dropdown-menu aside-xl dker">

                <li className="list-group-item">
                </li>
              </ul>
            </div>

            <div className="jp-no-solution hide">
              <span>Update Required</span> To play the media you will need to either update your browser to a recent
              version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Player;