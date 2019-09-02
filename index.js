var buttonToSoundMap = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass"
};

// Detecting Button Press
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var key = this.innerHTML;
    new Audio("sounds/" + buttonToSoundMap[key] + ".mp3").play();
    this.classList.add("pressed");
    setTimeout(() => {
    // document.querySelector("."+key).classList.remove("pressed");
    this.classList.remove("pressed");
    }, 100);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  new Audio("sounds/" + buttonToSoundMap[event.key] + ".mp3").play();
  document.querySelector("."+event.key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+event.key).classList.remove("pressed");
  }, 100);
});
