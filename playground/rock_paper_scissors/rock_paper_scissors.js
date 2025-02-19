let scoreMap = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
};

function playRockPaperScissors(playGame) {
    if (!playGame) {
        alert("Maybe another time");
        return;
    }

    let playerChoice = prompt("Choose ROCK or PAPER or SCISSORS :");

    if (!playerChoice) {
        alert("Lets play later");
        return;
    }
    playerChoice = playerChoice.trim().toUpperCase();
    let playerScore = scoreMap[playerChoice];
    if (playerScore !== undefined) {
        let choices = ["ROCK", "PAPER", "SCISSORS"];
        let computerScore = Math.ceil(Math.random() * 2);
        let computerChoice = choices[computerScore];
        let result;
        if (playerScore === computerScore) {
            result = "It's a tie.";
        } else if ((computerScore + 1) % 3 === playerScore) {
            result = `Player Choice : ${playerChoice}\nComputer Choice : ${computerChoice}\nYou win by beating a computer huh!`;
        } else {
            result = `Player Choice : ${playerChoice}\nComputer Choice : ${computerChoice}\nIt's a shame, you are beaten by a computer!!!`;
        }
        alert(result);

        // ask the player if he/she/they/them wants to play again
        let playAgain = confirm("Do you want to get beaten again?");

        playAgain
            ? playRockPaperScissors(playAgain)
            : alert("So it's been enough and you finally gave up?");
    } else {
        alert("Recheck your choice  and please choose a valid option");
        // console.log("Alert dismissed. Calling playRockPaperScissors...");
        playRockPaperScissors(playGame);
    }
}

let playGame = confirm("Do you wanna play rock, paper, scissors?");

playRockPaperScissors(playGame);
