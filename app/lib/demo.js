$(document).ready(function(){

 /* var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
    {
      title:"Back Home",
      artist:"3studios",
      mp3:"https://www.dropbox.com/s/zdxnk7xbm07itn9/03%20Back%20Home.mp3?dl=1",
      poster: "images/m0.jpg"
    },
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

  });*/

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