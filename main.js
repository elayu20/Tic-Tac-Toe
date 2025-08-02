// Iniatilize variables
let isGameOver = false;
let boxCount = 0;
let isTurn1 = true;
let isTurn2 = false;

let firstBox = document.getElementById("box-1");
let secondBox = document.getElementById("box-2");
let thirdBox = document.getElementById("box-3");
let fourthBox = document.getElementById("box-4");
let fifthBox = document.getElementById("box-5");
let sixthBox = document.getElementById("box-6");
let seventhBox = document.getElementById("box-7");
let eighthBox = document.getElementById("box-8");
let ninthBox = document.getElementById("box-9");

// Turn based logic
let boxButton = document.querySelectorAll(".box");
boxButton.forEach( (btn) => {

    btn.addEventListener("click", ()=> {

        if (boxCount < 9 && !isGameOver) { // All our boxes aren't filled out and game not over

            // Doesn't proceed on a non empty box
            // Prevent overriding box that's already filled
            // Prevents boxCount to go up
            if (btn.textContent != "") return;

            boxCount++;

            if (isTurn1) {

                btn.textContent = "X";

                isTurn2 = true;
                isTurn1 = false;
            }
            else {
                btn.textContent = "O";

                isTurn2 = false;
                isTurn1 = true;
            }

            if (isPlayerWinner("X")) {
                isGameOver = true;
                console.log("Game over! X wins");
                document.getElementById("game-over-display").style.display = "block";
                document.getElementById("game-over-condition").textContent = "X Wins!";
                document.querySelector(".main-container").style.opacity = "20%";
            }
            else if (isPlayerWinner("O")) {
                isGameOver = true;
                console.log("Game over! O wins");
                document.getElementById("game-over-display").style.display = "block";
                document.getElementById("game-over-condition").textContent = "O Wins!";
                document.querySelector(".main-container").style.opacity = "20%";
            }

        }
        if (boxCount === 9 && !isGameOver) {
            isGameOver = true;
            console.log("Draw!");
            document.getElementById("game-over-display").style.display = "block";
                document.getElementById("game-over-condition").textContent = "Draw!";
                document.querySelector(".main-container").style.opacity = "20%";
        }
    });
});

// Reset button functionality
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", ()=> {
    console.clear();
    document.getElementById("game-over-display").style.display = "none";
    document.getElementById("game-over-condition").textContent = "";
    document.querySelector(".main-container").style.opacity = "100%";

    // Re-initialize variables
    isGameOver = false;
    boxCount = 0;
    isTurn1 = true;
    isTurn2 = false;

    // Reset boxes
    boxButton.forEach( (btn) => {
        btn.textContent = "";
    })
})

// Logic for scenarios where certain symbol can win
const isPlayerWinner = (symbol) => {
    
    // Top row
    if (firstBox.textContent === symbol && secondBox.textContent === symbol && thirdBox.textContent === symbol) {
        return true;            }

    // Left column
    else if (firstBox.textContent === symbol && fourthBox.textContent === symbol && seventhBox.textContent === symbol) {
        return true;
    }

    // Bottom row
    else if (ninthBox.textContent === symbol && eighthBox.textContent === symbol && seventhBox.textContent === symbol){
        return true;
    }

    // Right column
    else if (ninthBox.textContent === symbol && sixthBox.textContent === symbol && thirdBox.textContent === symbol) {
        return true;
    }

    // Top-left to bottom-right diagonal
    else if (fifthBox.textContent=== symbol && firstBox.textContent === symbol && ninthBox.textContent === symbol) {
        return true;
    }

    // Top-right to bottom-left diagonal
    else if (fifthBox.textContent === symbol && thirdBox.textContent === symbol && seventhBox.textContent === symbol) {
        return true;
    }

    // Middle column
    else if (fifthBox.textContent === symbol && secondBox.textContent === symbol && eighthBox.textContent === symbol) {
        return true;
    }

    // Middle row
    else if (fifthBox.textContent === symbol && fourthBox.textContent === symbol && sixthBox.textContent === symbol) {
        return true;
    }

    return false;
};