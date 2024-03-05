let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");
let mainGame = document.querySelector(".g1");

let turn0 = true;

let pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  mainGame.style.display = "";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

let enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

let showWinner = (winner) => {
  msg.innerText = `Congrulation ${winner} Wins!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  mainGame.style.display = "none";
};

let checkWinner = () => {
  for (let pat of pattern) {
    let pos1Val = boxes[pat[0]].innerText;
    let pos2Val = boxes[pat[1]].innerText;
    let pos3Val = boxes[pat[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
