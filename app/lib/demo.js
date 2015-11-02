$(document).ready(function(){

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
    {
      title:"Pass The Buck",
      artist:"Fritz",
      mp3:"https://r2---sn-cxab5jvh-cg0d.googlevideo.com/videoplayback?ms=au&ipbits=0&pl=17&mv=m&mt=1446211229&source=youtube&fexp=9405967%2C9407536%2C9408254%2C9408502%2C9408710%2C9414764%2C9416126%2C9416675%2C9417707%2C9418201%2C9418203%2C9418401%2C9419965%2C9420282%2C9421026%2C9421581%2C9421946%2C9422342%2C9422596%2C9423355&id=o-ALaVPpyUknSEUdpe4L_rMSOs-ildxd3gjOvCnlTaA8Ck&mm=31&expire=1446232913&itag=43&upn=yYhci9SDoq0&sver=3&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&mn=sn-cxab5jvh-cg0d&signature=B2D76C01243A97BC8963E5712E4076F1086AE8AB.3998247359EDBDCCAEF7A1DAAF9CC32789598C76&requiressl=yes&initcwndbps=1957500&ip=80.236.231.58&mime=video%2Fwebm&key=yt6&ratebypass=yes&dur=0.000&lmt=1343058811818321",
      poster: "images/m0.jpg"
    },
    {
      title:"Back Home",
      artist:"3studios",
      //mp3:"https://www.dropbox.com/s/zdxnk7xbm07itn9/03%20Back%20Home.mp3?dl=1",
      poster: "images/m0.jpg"
    },
    {
      title:"Core Issues",
      artist:"Studios",
      mp3:"http://flatfull.com/themes/assets/musics/adg3com_coreissues.mp3",
      poster: "images/m0.jpg"
    },
    {
      title:"Cryptic Psyche",
      artist:"ADG3",
      mp3:"http://flatfull.com/themes/assets/musics/adg3com_crypticpsyche.mp3",
      poster: "images/m0.jpg"
    },
    {
      title:"Electro Freak",
      artist:"Studios",
      mp3:"http://flatfull.com/themes/assets/musics/adg3com_electrofreak.mp3",
      poster: "images/m0.jpg"
    },
    {
      title:"Freeform",
      artist:"ADG",
      mp3:"http://flatfull.com/themes/assets/musics/adg3com_freeform.mp3",
      poster: "images/m0.jpg"
    }
  ], {
    playlistOptions: {
      enableRemoveControls: true,
      autoPlay: false
    },
    swfPath: "js/jPlayer",
    supplied: "webmv, ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });
  
  $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').removeClass('animate');
    $('.jp-play-me').removeClass('active');
    $('.jp-play-me').parent('li').removeClass('active');
  });

  $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').addClass('animate');
  });

  $(document).on('click', '.jp-play-me', function(e){
    e && e.preventDefault();
    var $this = $(e.target);
    if (!$this.is('a')) $this = $this.closest('a');

    $('.jp-play-me').not($this).removeClass('active');
    $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

    $this.toggleClass('active');
    $this.parent('li').toggleClass('active');
    if( !$this.hasClass('active') ){
      myPlaylist.pause();
    }else{
      var i = Math.floor(Math.random() * (1 + 7 - 1));
      myPlaylist.play(i);
    }
    
  });



  // video

  $("#jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Big Buck Bunny",
        m4v: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.m4v",
        ogv: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.ogv",
        webmv: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.webm",
        poster: "images/m41.jpg"
      });
    },
    swfPath: "js",
    supplied: "webmv, ogv, m4v",
    size: {
      width: "100%",
      height: "auto",
      cssClass: "jp-video-360p"
    },
    globalVolume: true,
    smoothPlayBar: true,
    keyEnabled: true
  });

});

$(document).on('click', '[data-toggle^="class"]', function(e){
  e && e.preventDefault();
  var $this = $(e.target), $class , $target, $tmp, $classes, $targets;
  !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
  $class = $this.data()['toggle'];
  $target = $this.data('target') || $this.attr('href');
  $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
  $target && ($targets = $target.split(','));
  $classes && $classes.length && $.each($targets, function( index, value ) {
    if ( $classes[index].indexOf( '*' ) !== -1 ) {
      var patt = new RegExp( '\\s' +
          $classes[index].
          replace( /\*/g, '[A-Za-z0-9-_]+' ).
          split( ' ' ).
          join( '\\s|\\s' ) +
          '\\s', 'g' );
      $($this).each( function ( i, it ) {
        var cn = ' ' + it.className + ' ';
        while ( patt.test( cn ) ) {
          cn = cn.replace( patt, ' ' );
        }
        it.className = $.trim( cn );
      });
    }
    ($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
  });
  $this.toggleClass('active');
});