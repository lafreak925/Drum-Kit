var allDrum = document.querySelectorAll(".drum").length; //error
console.log(allDrum);

var i = 0;
while (i < allDrum) {

  // Sound by pressing the buttons on screen

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    keyboardPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
  i++;
}

// Sound by pressing keys on keyboard

document.addEventListener("keydown", function(event) {
  keyboardPress(event.key);
  buttonAnimation(event.key);

});

function keyboardPress(key) {
  switch (key) {
    case "w":

      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    default:
      console.log(innerHTML);

  }
}

function buttonAnimation(currentKey){
   var activeButton= document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){ activeButton.classList.remove("pressed");}, 200);

}
