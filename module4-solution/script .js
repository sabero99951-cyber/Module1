(function () {

  // تأكد من أن المصفوفة names موجودة
  if (typeof names === 'undefined' || !Array.isArray(names)) {
    console.error('Error: names array not found or is not an array!');
    return;
  }

  // تأكد من أن helloSpeaker و byeSpeaker موجودان ولديهما دالة speak
  if (typeof helloSpeaker === 'undefined' || typeof helloSpeaker.speak !== 'function') {
    console.error('Error: helloSpeaker not found or speak function is missing!');
    return;
  }

  if (typeof byeSpeaker === 'undefined' || typeof byeSpeaker.speak !== 'function') {
    console.error('Error: byeSpeaker not found or speak function is missing!');
    return;
  }

  // التكرار على الأسماء
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

