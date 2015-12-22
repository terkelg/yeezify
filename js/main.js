// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

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
