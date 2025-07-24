
let isGameOver = false;
let boxCount = 0;

let isTurn1 = true;
let isTurn2 = false;

let boxButton = document.querySelectorAll(".box");
boxButton.forEach( (btn) => {

    btn.addEventListener("click", ()=> {
        if (boxCount < 9) {

            if (btn.textContent === "X" || btn.textContent === "O") return;

            boxCount++;

            if (isTurn1) {

                btn.textContent = "X";

                console.log(isTurn1);
                isTurn2 = true;
                isTurn1 = false;
                console.log(isTurn1);
            }
            else if (isTurn2) {
                btn.textContent = "O";

                isTurn2 = false;
                isTurn1 = true;
            }
        }
        else {
            console.log("Game Over!");
        }
    })
})

// while (boxCount < 9) {
//     boxCount++;
//     if (isTurn1) {
//         let boxButton = document.querySelectorAll(".box");
//         boxButton.forEach( (btn) => {
//             btn.addEventListener("click", ()=> {
//                 btn.textContent = "O";
//             })
//         });

//         isTurn2 = true;
//         isTurn1 = false;
//     }

//     if (isTurn2) {
//         boxCount++;
//         let boxButton = document.querySelectorAll(".box");
//         boxButton.forEach( (btn) => {
//             btn.addEventListener("click", ()=> {
//                 btn.textContent = "X";
//             })
//         });

//         isTurn1 = true;
//         isTurn2 = false;
//     }
// };