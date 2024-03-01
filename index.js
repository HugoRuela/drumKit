//Detecting the keyboard was pressed

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});


// Detecting a button was pressed

for ( i=0; document.querySelectorAll(".drum").length; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML ;

    makeSound (buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}


makeSound(buttonInnerHTML);

function makeSound(key){

  switch (key) {

    case "w":

      var crash = new Audio ("sounds/crash.mp3");
        crash.play();
      break;

      case "a":

        var kickBass = new Audio ("sounds/kick-bass.mp3");
          kickBass.play();
        break;

      case "s":

        var snare = new Audio ("sounds/snare.mp3");
          snare.play();
        break;

      case "d":

        var audioTom1 = new Audio ("sounds/tom-1.mp3");
          audioTom1.play();
        break;

      case "j":

        var audioTom2 = new Audio ("sounds/tom-2.mp3");
          audioTom2.play();
        break;

      case "k":

        var audioTom3 = new Audio ("sounds/tom-3.mp3");
          audioTom3.play();
        break;

      case "l":

        var audioTom4 = new Audio ("sounds/tom-4.mp3");
          audioTom4.play();
        break;

    default:
      console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
