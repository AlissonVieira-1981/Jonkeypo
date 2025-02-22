const Result = document.querySelector(".result");
const MyPoints = document.querySelector("#human-score");
const MachinePoints = document.querySelector("#machine-score");
const SetPlayer = document.querySelector('.sets');
const SetComp = document.querySelector('.sets-computer');

const setPlayer1 = document.querySelector('.small-box1');
const setComp1 = document.querySelector('.small-box-comp1');
const setPlayer2 = document.querySelector(".small-box2");
const setComp2 = document.querySelector(".small-box-comp2");
const setComp3 = document.querySelector(".small-box-comp3");
const setPlayer3 = document.querySelector(".small-box3");

let CounterMyPoints = 0;
let CounterMachinePoints = 0;
let RoundCounter = 1;
let PlayerSets = 0;
let ComputerSets = 0;
let gamePaused = false;

const shootConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

const blinkName = (element) => {
    let count = 0;
    const interval = setInterval(() => {
        element.style.visibility = (element.style.visibility === 'hidden' ? '' : 'hidden');
        count++;
        if (count >= 6) {
            clearInterval(interval);
            element.style.visibility = ''; // Certifica-se de que o elemento fique visível no final
        }
    }, 300);
};

const PlayHuman = (humanChoice) => {
    if (!gamePaused) {
        PlayTheGame(humanChoice, PlayMachine());
    }
};

const PlayMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const resetGame = () => {
    CounterMyPoints = 0;
    CounterMachinePoints = 0;
    RoundCounter = 1;
    PlayerSets = 0;
    ComputerSets = 0;
    gamePaused = false;
    MyPoints.innerHTML = CounterMyPoints;
    MachinePoints.innerHTML = CounterMachinePoints;
    setPlayer1.innerHTML = '';
    setComp1.innerHTML = '';
    setPlayer2.innerHTML = '';
    setComp2.innerHTML = '';
    setPlayer3.innerHTML = '';
    setComp3.innerHTML = '';
    Result.innerHTML = '';
    document.querySelector('#Felipe').style.visibility = ''; // Certifica-se de que o elemento fique visível no reinício
    document.querySelector('#Computer').style.visibility = ''; // Certifica-se de que o elemento fique visível no reinício
};

const resetRound = () => {
    CounterMyPoints = 0;
    CounterMachinePoints = 0;
    MyPoints.innerHTML = CounterMyPoints;
    MachinePoints.innerHTML = CounterMachinePoints;
    gamePaused = false;
};

const checkWinner = () => {
    if (PlayerSets === 2) {
        Result.innerHTML = "Você venceu o jogo!";
        shootConfetti();
        setTimeout(() => {
            resetGame();
        }, 3000);
    } else if (ComputerSets === 2) {
        Result.innerHTML = "Você perdeu o jogo!";
        shootConfetti();
        setTimeout(() => {
            resetGame();
        }, 3000);
    }
};

const PlayTheGame = (human, machine) => {
    if (human === machine) {
        Result.innerHTML = "Empatou";
    } else if (human === 'rock' && machine === 'scissors' || human == 'paper' && machine == 'rock' || human == 'scissors' && machine == 'paper') {
        Result.innerHTML = "Você Venceu";
        blinkName(document.querySelector('#Felipe'));
        CounterMyPoints++;
        MyPoints.innerHTML = CounterMyPoints;
    } else {
        Result.innerHTML = "Você Perdeu";
        blinkName(document.querySelector('#Computer'));
        CounterMachinePoints++;
        MachinePoints.innerHTML = CounterMachinePoints;
    }

    if (CounterMyPoints === 3) {
        document.querySelector(`.small-box${RoundCounter}`).innerHTML = '🏆';
        document.querySelector(`.small-box-comp${RoundCounter}`).innerHTML = '😠';
        PlayerSets++;
        gamePaused = true;
        if (RoundCounter === 3) {
            shootConfetti();
        }
        RoundCounter++;
        setTimeout(() => {
            if (RoundCounter > 3) {
                checkWinner();
            } else {
                resetRound();
            }
        }, 2000);
        return;
    }

    if (CounterMachinePoints === 3) {
        document.querySelector(`.small-box-comp${RoundCounter}`).innerHTML = '🏆';
        document.querySelector(`.small-box${RoundCounter}`).innerHTML = '😠';
        ComputerSets++;
        gamePaused = true;
        if (RoundCounter === 3) {
            shootConfetti();
        }
        RoundCounter++;
        setTimeout(() => {
            if (RoundCounter > 3) {
                checkWinner();
            } else {
                resetRound();
            }
        }, 2000);
        return;
    }

    if (RoundCounter > 3) {
        Result.innerHTML = "Fim do jogo!";
        shootConfetti();
        setTimeout(() => {
            resetGame();
        }, 3000);
    }
};














































































