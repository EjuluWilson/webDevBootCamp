
function randomDicee(){
    let randDice = Math.floor((Math.random()*6)+1);
    return randDice;
}

for (let i = 1; i < 20; i++){
    console.log(`The random number is :  ${randomDicee()} \n`);
}

// get DOM elements
player1Dice = document.querySelector(".img1");
player2Dice = document.querySelector(".img2");
h1 = document.querySelector("h1");

// roll  dice
play1Roll = randomDicee();
play2Roll = randomDicee();

//update dice
player1Dice.setAttribute("src",`./images/dice${play1Roll}.png`);
player2Dice.setAttribute("src",`./images/dice${play2Roll}.png`);


if (play1Roll === play2Roll){
    h1.innerHTML = "Draw !!!";
}else if(play1Roll > play2Roll){
    h1.innerHTML = "⛳️ Player 1️⃣ WINS!!";
}else{
    h1.innerHTML = "  Player 2️⃣ WINS!! ⛳️";
}


