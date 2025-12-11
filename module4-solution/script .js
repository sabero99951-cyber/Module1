// هذا هو المحتوى الصحيح والكامل لملف script.js
// تم دمج مصفوفة الأسماء في هذا الملف وتمت إزالة التغليف الخاطئ (IIFE).

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 

for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0).toLowerCase();

  if (firstLetter === "j") {
    // يستدعي دالة byeSpeaker المتاحة عالمياً
    byeSpeaker.speak(name); 
  } else {
    // يستدعي دالة helloSpeaker المتاحة عالمياً
    helloSpeaker.speak(name);
  }
}
