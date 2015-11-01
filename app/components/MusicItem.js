import React from 'react';

class MusicItem extends React.Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <div className="item">
          <div className="pos-rlt">
            <div className="bottom">
              <span className="badge bg-info m-l-sm m-b-sm">03:20</span>
            </div>
            <div className="item-overlay opacity r r-2x bg-black">
              <div className="text-info padder m-t-sm text-sm">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o text-muted"></i>
              </div>
              <div className="center text-center m-t-n">
                <a href="#"><i className="icon-control-play i-2x"></i></a>
              </div>
              <div className="bottom padder m-b-sm">
                <a href="#" className="pull-right">
                  <i className="fa fa-heart-o"></i>
                </a>
                <a href="#">
                  <i className="fa fa-plus-circle"></i>
                </a>
              </div>
            </div>
            <a href="#"><img src="images/p1.jpg" alt="" className="r r-2x img-full"/></a>
          </div>
          <div className="padder-v">
            <a href="#" className="text-ellipsis">Tempered Song</a>
            <a href="#" className="text-ellipsis text-xs text-muted">Miaow</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicItem