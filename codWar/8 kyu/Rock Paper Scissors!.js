// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  const wordsArr = ["scissors", "paper", "rock"];

  let win1 = "Player 1 won!";
  let win2 = "Player 2 won!";

  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "scissors" && p2 === "paper") {
    return win1;
  }
  if (p1 === "paper" && p2 === "rock") {
    return win1;
  }
  if (p1 === "rock" && p2 === "scissors") {
    return win1;
  }

  if (p2 === "scissors" && p1 === "paper") {
    return win2;
  }
  if (p2 === "paper" && p1 === "rock") {
    return win2;
  }
  if (p2 === "rock" && p1 === "scissors") {
    return win2;
  }
};

it("player 1 win", function () {
  Test.assertEquals(rps("rock", "scissors"), getMsg(1));
  Test.assertEquals(rps("scissors", "paper"), getMsg(1));
  Test.assertEquals(rps("paper", "rock"), getMsg(1));
});

it("player 2 win", function () {
  Test.assertEquals(rps("scissors", "rock"), getMsg(2));
  Test.assertEquals(rps("paper", "scissors"), getMsg(2));
  Test.assertEquals(rps("rock", "paper"), getMsg(2));
});

it("draw", function () {
  Test.assertEquals(rps("rock", "rock"), "Draw!");
  Test.assertEquals(rps("scissors", "scissors"), "Draw!");
  Test.assertEquals(rps("paper", "paper"), "Draw!");
});
