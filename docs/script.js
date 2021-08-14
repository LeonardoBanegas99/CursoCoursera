(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var n in names) {
    var firstLetter = names[n].charAt(0);
    if (firstLetter == "j" || firstLetter == "J"){
      window.byeSpeaker.speak(names[n]);
    }else{
      window.helloSpeaker.speak(names[n]);
    }


}})();

