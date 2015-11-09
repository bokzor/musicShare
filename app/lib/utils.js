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

export default utils



