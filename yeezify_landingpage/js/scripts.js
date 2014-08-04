$( document ).ready(function() {
  var string;
  var url;

  if('chrome' in window) {
      $('#btn').text("Download Chrome Extension");
      $("#btn").attr("href", "https://chrome.google.com/webstore/detail/yeezify/bnhjledfkllachkdaphpcdbmdnkaahjj")
  }
  else if('MozAppearance' in document.documentElement.style) {
      $('#btn').text("Download Firefox Add-on");
      $("#btn").attr("href", "https://addons.mozilla.org/en-US/firefox/addon/yeezify/")
  }
  else if('WebkitAppearance' in document.documentElement.style){
      $('#btn').text("Download Safari Extension");
      $("#btn").attr("href", "http://yeezify.com/plugin/yeezify.safariextz")
  }

  $('.content').addClass('animated bounceInLeft');

});
