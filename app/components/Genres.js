import React from 'react';

class Genre extends React.Component {
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
    render () {
        return(
            <section id="content">
              <section className="vbox">
                <section className="w-f-md" id="bjax-target">
                  <section className="hbox stretch">
                    <aside className="aside bg-light dk" id="sidebar">
                      <section className="vbox animated fadeInUp">
                        <section className="scrollable hover">
                          <div className="list-group no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                            <a href="genres.html" className="list-group-item">
                              All
                            </a>
                            <a href="genres.html" className="list-group-item active">
                              acoustic
                            </a>
                            <a href="genres.html" className="list-group-item">
                              ambient
                            </a>
                            <a href="genres.html" className="list-group-item">
                              blues
                            </a>
                            <a href="genres.html" className="list-group-item">
                              classical
                            </a>
                            <a href="genres.html" className="list-group-item">
                              country
                            </a>
                            <a href="genres.html" className="list-group-item">
                              electronic
                            </a>
                            <a href="genres.html" className="list-group-item">
                              emo
                            </a>
                            <a href="genres.html" className="list-group-item">
                              folk
                            </a>
                            <a href="genres.html" className="list-group-item">
                              hardcore
                            </a>
                            <a href="genres.html" className="list-group-item">
                              hip hop
                            </a>
                            <a href="genres.html" className="list-group-item">
                              indie
                            </a>
                            <a href="genres.html" className="list-group-item">
                              jazz
                            </a>
                            <a href="genres.html" className="list-group-item">
                              latin
                            </a>
                            <a href="genres.html" className="list-group-item">
                              metal
                            </a>
                            <a href="genres.html" className="list-group-item">
                              pop
                            </a>
                            <a href="genres.html" className="list-group-item">
                              pop punk
                            </a>
                            <a href="genres.html" className="list-group-item">
                              punk
                            </a>
                            <a href="genres.html" className="list-group-item">
                              reggae
                            </a>
                            <a href="genres.html" className="list-group-item">
                              rnb
                            </a>
                            <a href="genres.html" className="list-group-item">
                              rock
                            </a>
                            <a href="genres.html" className="list-group-item">
                              soul
                            </a>
                            <a href="genres.html" className="list-group-item">
                              world
                            </a>
                          </div>
                        </section>
                      </section>
                    </aside>
                    <section>
                      <section className="vbox">
                        <section className="scrollable padder-lg">
                          <h2 className="font-thin m-b">Acoustic</h2>
                          <div className="row row-sm">
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m1.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Tempered Song</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Miaow</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m2.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Morbi id neque quam</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Phasellus</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/a10.png" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Aliquam sollicitudin venenatis ipsum</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Malesuada</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m4.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Citudin venenatis ipsum ac</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Volutpat</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m5.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Vestibulum ullamcorper sodales nisi</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Mauris Qiaos</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m6.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Mauris convallis mauris at</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Neque</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m0.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Sodales nisi nec condimentum</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Augue</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m8.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Nisi nec condimentum</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Miaow</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m9.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Phasellus at ultricies nequ</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Volutpat</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m10.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Quis malesuada augue</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Feugiat</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m11.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Ipsum ac feugiat</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Quam AC</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m12.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Ullamcorper sodales nisi nec condimentu</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Convallis</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m13.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Tudin venenatis ulum ullamcorper</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Pellent Esque</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m14.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Sodales nisi nec condimentum</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Utricies</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m15.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Sec condimentum augue</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Quis Fox</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/a9.png" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Dimentum at pellentesque volutpat</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Suada</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m16.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Natis ipsum ac feugiat</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Monvallis</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                              <div className="item">
                                <div className="pos-rlt">
                                  <div className="item-overlay opacity r r-2x bg-black">
                                    <div className="center text-center m-t-n">
                                      <a href="#"><i className="fa fa-play-circle i-2x"></i></a>
                                    </div>
                                  </div>
                                  <a href="track-detail.html"><img src="images/m17.jpg" alt="" className="r r-2x img-full"/></a>
                                </div>
                                <div className="padder-v">
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis">Dimentum tesque volut icies neque</a>
                                  <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el" data-replace="true" className="text-ellipsis text-xs text-muted">Londi Mentum</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="pagination pagination">
                            <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                          </ul>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
            </section>

        );
    }

}

export default Genre;