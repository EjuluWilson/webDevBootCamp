let drumKeys = document.querySelectorAll(".drum");

// Function to play sound based on the letter key
function playSound(keyLetter) {
  switch (keyLetter) {
    case "w":
      let wSound = new Audio("./sounds/crash.mp3");
      wSound.play();
      break;
    case "a":
      let aSound = new Audio("./sounds/kick-bass.mp3");
      aSound.play();
      break;
    case "s":
      let sSound = new Audio("./sounds/snare.mp3");
      sSound.play();
      break;
    case "d":
      let dSound = new Audio("./sounds/tom-1.mp3");
      dSound.play();
      break;
    case "j":
      let jSound = new Audio("./sounds/tom-2.mp3");
      jSound.play();
      break;
    case "k":
      let kSound = new Audio("./sounds/tom-3.mp3");
      kSound.play();
      break;
    case "l":
      let lSound = new Audio("./sounds/tom-4.mp3");
      lSound.play();
      break;
    default:
      break;
  }
}

//Function to anumate a key press
function animateKeyDown(keyLetter) {
  let keyElement = document.querySelector(`.drum.${keyLetter}`);
  keyElement.classList.add("pressed");
  setTimeout(() => {
    keyElement.classList.remove("pressed");
  }, 100);
}

for (let i = 0; i < drumKeys.length; i++) {
  drumKeys[i].addEventListener("click", function () {
    let keyLetter = drumKeys[i].innerHTML;
    playSound(keyLetter);
    animateKeyDown(keyLetter);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animateKeyDown(event.key);
});
