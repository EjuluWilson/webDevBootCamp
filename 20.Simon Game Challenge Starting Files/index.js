let numClick = 0; // numeber of clicks
let gameLevel = 0; // game level

let generatedPattern = []; //computer generated pattern
let playerPattern = []; //player generated pattern

const redClick = 0;
const greenClick = 1;
const blueClick = 2;
const yellowClick = 3;

//generate a random number btn (0-3)
function randomClick() {
  return Math.floor(Math.random() * 4);
}

//animate keyDown
function animateKeyDown(keyDown) {
  keyDown.addClass("pressed");
  setTimeout(() => {
    keyDown.removeClass("pressed");
  }, 100);
}
//animate added key
function animateAddedKey(color) {
  let addedColor = $(`.btn.${color}`);
  addedColor.addClass("pressed");
  setTimeout(() => {
    addedColor.removeClass("pressed");
  }, 100);
}

//update gameLevel
function updateLevelTitle(level) {
  $("#level-title").text(`Level ${level}`);
}

//next Level
function nextLevel() {
  //change game level
  gameLevel += 1;
  updateLevelTitle(gameLevel);
  //accumulate generated pattern
  let keyNum = randomClick();
  generatedPattern.push(keyNum);
  //Animate added key
  switch (keyNum) {
    case greenClick:
      animateAddedKey("green");
      break;
    case redClick:
      animateAddedKey("red");
      break;
    case yellowClick:
      animateAddedKey("yellow");
      break;
    case blueClick:
      animateAddedKey("blue");
      break;
    default:
      break;
  }
}

//listen to any click
$(document).on("keydown", function () {
  numClick = 0;
  gameLevel = 0;
  nextLevel();
});

//listen to a click event
$(".btn").click(function () {
  let keyDown = $(this); //get button element
  animateKeyDown(keyDown);

  numClick += 1; // number of clicks

  if (numClick >= 1) {
    //accumulate player pattern
    switch (keyDown.attr("id")) {
      case "green":
        playerPattern.push(greenClick);
        break;
      case "red":
        playerPattern.push(redClick);
        break;
      case "yellow":
        playerPattern.push(yellowClick);
        break;
      case "blue":
        playerPattern.push(blueClick);
        break;
      default:
        break;
    }

    //compare patterns when the length is the same
    if (generatedPattern.length === playerPattern.length) {
      //comapare user pattern
      if (generatedPattern === playerPattern) {
        //add random to
        nextLevel();
      } else {
        //reset on fail
        numClick = 0;
        gameLevel = 0;
        generatedPattern = [];
        playerPattern = [];
      }
    }
  }
  console.log(generatedPattern);
  console.log(playerPattern);
  console.log(randomClick());
});
