(function () {

  // تأكد أن المتغير names موجود
  if (!window.names && typeof names === 'undefined') {
    console.error('names array not found!');
    return;
  }

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

})();

