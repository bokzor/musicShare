var utils = utils || {};

utils.getIdYoutube = function (url) {
  var regexYoutube = /(youtu(?:\.be|be\.com)\/(?:.*v(?:\/|=)|(?:.*\/)?)([\w'-]+))/i;
  var idVideo = url.match(regexYoutube)[2];

  return idVideo
};


utils.getPosition = function(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return { x: xPosition, y: yPosition };
};


utils.getClickPosition = function (e){
  var parentPosition = utils.getPosition(e.currentTarget);
  var xPosition = e.clientX - parentPosition.x;
  var yPosition = e.clientY - parentPosition.y;

  return {x: xPosition, y: yPosition}
};

utils.formatTime = function(time) {
  time = Math.round(time);

  var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ":" + seconds;
};


utils.onlyInFirst = function (equal, a, b) {
  return a.filter(current => {
    return b.filter(equal(current)).length == 0;
  });
};
utils.onlyInFirstMyObject = utils.onlyInFirst.bind(0, a => {
  return function (b) {
    return a.username == b.username;
  };
});

export default utils



