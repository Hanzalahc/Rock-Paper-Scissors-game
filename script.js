let userwins = 0;
let compwins = 0;

let userwinsp = document.getElementById("userScore");
let compwinsp = document.getElementById("compScore");

let choices = document.querySelectorAll(".choice");

const msg = document.getElementById("msg");
const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randid = Math.floor(Math.random() * 3);
  return options[randid];
};
const draw = () => {
  console.log("Match is draw");
  msg.innerText = "It was a Draw! 😒";
  msg.style.backgroundColor = "#010400";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You nwin");
    msg.innerText = `${userChoice} beats ${compChoice}! 😊`;
    userwins++;
    userwinsp.innerText = userwins;
    msg.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    msg.innerText = `${userChoice} was beaten by ${compChoice}!😒`;
    compwins++;
    compwinsp.innerText = compwins;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice", userChoice);
  const compChoice = getCompChoice();
  console.log("Computer choice", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "rock") {
        userWin = true;
      } else {
        userWin = false;
      }
    } else if (userChoice === "scissors") {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
