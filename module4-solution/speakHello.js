(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // expose to global
  window.helloSpeaker = helloSpeaker;

})(window);

