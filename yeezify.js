function Kanye(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

var getKanye = {
  init: function(myKanye){
    this.myKanye = myKanye;
  },

  horizontal: function(){
    return this.myKanye.filter(function(myKanye){
      return myKanye.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myKanye.filter(function(myKanye){
      return myKanye.ratio === "vertical";
    });
  },

  square: function (){
    return this.myKanye.filter(function(myKanye){
      return myKanye.ratio === "square";
    });
  }
};

function Randomize(images){
  return Math.floor(Math.random() * images.length);
}

var myKanye = [
  new Kanye("horizontal", "http://yeezify.com/plugin/img/h1.jpg"),
  new Kanye("horizontal", "http://yeezify.com/plugin/img/h2.jpg"),
  new Kanye("horizontal", "http://yeezify.com/plugin/img/h3.jpg"),
  new Kanye("horizontal", "http://yeezify.com/plugin/img/h4.gif"),
  new Kanye("horizontal", "http://yeezify.com/plugin/img/h5.gif"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v1.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v2.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v3.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v4.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v5.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v6.jpg"),
  new Kanye("vertical", "http://yeezify.com/plugin/img/v7.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s1.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s2.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s3.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s4.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s5.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s6.jpg"),
  new Kanye("square", "http://yeezify.com/plugin/img/s7.gif"),
];

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}

(function (document) {

  getKanye.init(myKanye);
  var images = document.getElementsByTagName('img'), length = images.length;

  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getKanye[ratio]());
    var img = getKanye[ratio]()[number];
    images[i].src = img.imageurl;
  }

  var sound = new Audio("http://yeezify.com/plugin/sound/kanye_1.ogg");
  sound.play();

})(document);
