import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    // Get the components DOM node
    var elem = React.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      // Now set a transition on the opacity
      elem.style.transition = "opacity 250ms";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <section className="vbox">
        <section className="w-f-md">
          <section className="hbox stretch">
            <aside className="col-sm-9 no-padder" id="sidebar">
              <section className="vbox animated fadeInUp">
                <section className="scrollable">
                  <div className="m-t-n-xxs item pos-rlt">
                    <div className="top text-right img-container-top">
                      <span className="musicbar animate bg-success bg-empty inline m-r-lg m-t" style={{ width: '25px', height: '30px' }}>
                        <span className="bar1 a3 lter"></span>
                        <span className="bar2 a5 lt"></span>
                        <span className="bar3 a1 bg"></span>
                        <span className="bar4 a4 dk"></span>
                        <span className="bar5 a2 dker"></span>
                      </span>
                    </div>
                    <div className="bottom gd bg-info wrapper-lg img-container-bottom">
                      <span className="pull-right text-sm">96,377 <br/>Followers</span>
                      <a href="#" className="pull-right btn btn-default btn-following">Follow Bokzor</a>
                      <span className="h2 font-thin">Bokzor | <small>Adrien Bokor</small></span>
                    </div>
                    <div className="img-container">
                      <div className="img-container-center">
                        <img className="img-full img-responsive" src="images/m43.jpg" alt="..."/>
                      </div>
                    </div>
                  </div>

                  <section className="padder-lg w-f-md" id="bjax-target">
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="font-thin">New Songs</h3>
                        <div className="row row-sm">
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a2.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Spring rain</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Miaow</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a3.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Hope</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Miya</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a8.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Listen wind</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Soyia Jess</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a9.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Breaking me</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Pett JA</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a1.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Nothing</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Willion</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-6 col-sm-4">
                            <div className="item">
                              <div className="pos-rlt">
                                <div className="item-overlay opacity r r-2x bg-black">
                                  <div className="center text-center m-t-n">
                                    <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                  </div>
                                </div>
                                <a href="#"><img src="images/a6.png" alt="" className="r r-2x img-full"/></a>
                              </div>
                              <div className="padder-v">
                                <a href="#" className="text-ellipsis">Panda Style</a>
                                <a href="#" className="text-ellipsis text-xs text-muted">Lionie</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <h3 className="font-thin">Top Songs</h3>
                        <div className="list-group bg-white list-group-lg no-bg auto list-group-top-songs">
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">1</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a4.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Little Town</span>
                              <small className="text-muted clear text-ellipsis">by Chris Fox</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">2</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a5.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Lementum ligula vitae</span>
                              <small className="text-muted clear text-ellipsis">by Amanda Conlan</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">3</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a6.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Aliquam sollicitudin venenatis</span>
                              <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">4</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a7.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Aliquam sollicitudin venenatis ipsum</span>
                              <small className="text-muted clear text-ellipsis">by Lauren Taylor</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-right h2 text-muted m-l">5</span>
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src="images/a8.png" alt="..."/>
                            </span>
                            <span className="clear">
                              <span>Vestibulum ullamcorper</span>
                              <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin"><i className="icon-refresh i-lg  inline" id="refresh"></i></a>
                    <h2 className="font-thin m-b">My Music Library <span className="musicbar animate inline m-l-sm" style={{ width: '20px', height: '20px '}}>
                      <span className="bar1 a1 bg-primary lter"></span>
                      <span className="bar2 a2 bg-info lt"></span>
                      <span className="bar3 a3 bg-success"></span>
                      <span className="bar4 a4 bg-warning dk"></span>
                      <span className="bar5 a5 bg-danger dker"></span>
                    </span></h2>
                    <div className="row row-sm">
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
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
                            <div className="item-overlay opacity r r-2x bg-black active">
                              <div className="text-info padder m-t-sm text-sm">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o text-muted"></i>
                                <i className="fa fa-star-o text-muted"></i>
                              </div>
                              <div className="center text-center m-t-n">
                                <a href="#" data-toggle="class">
                                  <i className="icon-control-play i-2x text"></i>
                                  <i className="icon-control-pause i-2x text-active"></i>
                                </a>
                              </div>
                              <div className="bottom padder m-b-sm">
                                <a href="#" className="pull-right active" data-toggle="class">
                                  <i className="fa fa-heart-o text"></i>
                                  <i className="fa fa-heart text-active text-danger"></i>
                                </a>
                                <a href="#" data-toggle="class">
                                  <i className="fa fa-plus-circle text"></i>
                                  <i className="fa fa-check-circle text-active text-info"></i>
                                </a>
                              </div>
                            </div>
                            <a href="#"><img src="images/p2.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Vivamus vel tincidunt libero</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Lauren Taylor</a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p3.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Morbi id neque quam liquam sollicitudin</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Allen JH</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <div className="top">
                              <span className="pull-right m-t-n-xs m-r-sm text-white">
                                <i className="fa fa-bookmark i-lg"></i>
                              </span>
                            </div>
                            <a href="#"><img src="images/p4.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Tincidunt libero</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Amanda Conlan</a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p5.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Fermentum diam</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Nisa Colen</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
                            <div className="top">
                              <span className="pull-right m-t-sm m-r-sm badge bg-info">6</span>
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
                            <a href="#"><img src="images/p6.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Habitant</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Dan Doorack</a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <div className="top">
                              <span className="pull-right m-t-sm m-r-sm badge bg-white">12</span>
                            </div>
                            <a href="#"><img src="images/p7.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Vivamus vel tincidunt libero</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Ligula H</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p8.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Aliquam sollicitudin venenati</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">James East</a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p9.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Lementum ligula vitae</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Lauren Taylor</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
                            <div className="item-overlay r r-2x bg-light dker active">
                              <div className="text-info padder m-t-sm text-sm">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o text-muted"></i>
                              </div>
                              <div className="center text-center m-t-n">
                                <a href="#" data-toggle="class" className="active">
                                  <i className="icon-control-play i-2x text"></i>
                                  <i className="icon-control-pause i-2x text-active"></i>
                                </a>
                              </div>
                              <div className="bottom padder m-b-sm">
                                <a href="#" className="pull-right" data-toggle="class">
                                  <i className="fa fa-heart-o text"></i>
                                  <i className="fa fa-heart text-active text-danger"></i>
                                </a>
                                <a href="#" className="active" data-toggle="class">
                                  <i className="fa fa-plus-circle text"></i>
                                  <i className="fa fa-check-circle text-active text-info"></i>
                                </a>
                              </div>
                            </div>
                            <a href="#"><img src="images/p10.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Egestas dui nec fermentum </a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Chris Fox</a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p11.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Aliquam sollicitudin venenatis ipsum</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">Jack Jason</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="item">
                          <div className="pos-rlt">
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
                            <a href="#"><img src="images/p12.jpg" alt="" className="r r-2x img-full"/></a>
                          </div>
                          <div className="padder-v">
                            <a href="#" className="text-ellipsis">Vestibulum ullamcorper</a>
                            <a href="#" className="text-ellipsis text-xs text-muted">MM &amp; DD</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row m-t-lg m-b-lg">
                      <div className="col-sm-6">
                        <div className="bg-primary wrapper-md r">
                          <a href="#">
                            <span className="h4 m-b-xs block"><i className=" icon-user-follow i-lg"></i> Login or Create account</span>
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
            </aside>
          </section>
        </section>
        <footer className="footer bg-success dker">
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
                      <a className="jp-play"><i className="icon-control-play i-2x"></i></a>
                      <a className="jp-pause hid"><i className="icon-control-pause i-2x"></i></a>
                    </div>
                    <div><a className="jp-next"><i className="icon-control-forward i-lg"></i></a></div>
                    <div className="hide"><a className="jp-stop"><i className="fa fa-stop"></i></a></div>
                    <div><a className="" data-toggle="dropdown" data-target="#playlist"><i className="icon-list"></i></a></div>
                    <div className="jp-progress hidden-xs">
                      <div className="jp-seek-bar dk">
                        <div className="jp-play-bar bg">
                        </div>
                        <div className="jp-title text-lt">
                          <ul>
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden-xs hidden-sm jp-current-time text-xs text-muted"></div>
                    <div className="hidden-xs hidden-sm jp-duration text-xs text-muted"></div>
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
                      <a className="jp-restore-screen" title="restore screen"><i className="fa fa-compress text-lt"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jp-playlist dropup" id="playlist">
                <ul className="dropdown-menu aside-xl dker">

                  <li className="list-group-item"></li>
                </ul>
              </div>
              <div className="jp-no-solution hide">
                <span>Update Required</span>
                To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Profile;