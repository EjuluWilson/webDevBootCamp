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
  // Reset player
  playerPattern = [];
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

  console.log(`Next level added: generated: ${generatedPattern}`);
}

//compare two lists
function compareTwoLists(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
}

//listen to any click
$(document).on("keydown", function () {
  numClick = 0;
  gameLevel = 0;
  generatedPattern = [];
  playerPattern = [];
  nextLevel();
});

//listen to a click event
$(".btn").click(function () {
  let keyDown = $(this); //get button element
  animateKeyDown(keyDown);

  numClick += 1; // number of clicks

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

  // Compare lists if player's pattern is complete
  if (playerPattern.length === generatedPattern.length) {
    if (compareTwoLists(generatedPattern, playerPattern)) {
      //add random to
      console.log("win , go to the next level");
      nextLevel();
    } else {
      console.log("Failed game, start over");
      //Fail
      $("#level-title").text("Game Over, Press Any Key to restart");
    }
  }
});
