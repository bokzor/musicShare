import React from 'react'
import moment from 'moment'


class MusicItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div key={this.props.music._id} className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <div className="item">
          <div className="pos-rlt">
            <div className="bottom">
              <span className="badge bg-info m-l-sm m-b-sm">{moment.utc(this.props.music.duration).format('HH:mm:ss')}</span>
            </div>
            <div className="item-overlay opacity r r-2x bg-black">
              <div className="center text-center m-t-n">
                <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
              </div>
            </div>
            <a href="#"><img src={this.props.music.img} alt="" className="r r-2x img-full"/></a>
          </div>
          <div className="padder-v">
            <a href="#" className="text-ellipsis">{this.props.music.title}</a>
            <a href="#" className="text-ellipsis text-xs text-muted">{this.props.music.artist}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicItem