var numberOfButtonDrums = document.querySelectorAll(".drum").length;

  for (var i = 0; i < numberOfButtonDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnnimation(buttonInnerHTML);

    document.addEventListener("keypress",function(event){
      makeSound(event.key);
      buttonAnnimation(event.key);

    });
    function makeSound(key){
      switch (key) {

        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

        case "l":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
          break;

        default: console.log(buttonInnerHTML);

      }
    }
    function buttonAnnimation(currentKey){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);

    }
  });

}






// this.style.color="white";





// document.querySelectorAll(".drum")[0].addEventListener("click", function() {
//   var audio=new Audio("sounds/crash.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[1].addEventListener("click", function() {
//   var audio=new Audio("sounds/kick-bass.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[2].addEventListener("click", function() {
//   var audio=new Audio("sounds/snare.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[3].addEventListener("click", function() {
//   var audio=new Audio("sounds/tom-1.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[4].addEventListener("click", function() {
//   var audio=new Audio("sounds/tom-2.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[5].addEventListener("click", function() {
//   var audio=new Audio("sounds/tom-3.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[6].addEventListener("click", function() {
//   var audio=new Audio("sounds/tom-4.mp3");
//   audio.play();
// });
