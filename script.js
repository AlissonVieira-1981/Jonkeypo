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

const shootConfetti = () => {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
};

const PlayHuman = (humanChoice) => {
    PlayTheGame(humanChoice, PlayMachine());
}

const PlayMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return choices[randomNumber];
}

const resetGame = () => {
    CounterMyPoints = 0;
    CounterMachinePoints = 0;
    RoundCounter = 1;
    MyPoints.innerHTML = CounterMyPoints;
    MachinePoints.innerHTML = CounterMachinePoints;
    setPlayer1.innerHTML = '';
    setComp1.innerHTML = '';
    setPlayer2.innerHTML = '';
    setComp2.innerHTML = '';
    setPlayer3.innerHTML = '';
    setComp3.innerHTML = '';
    Result.innerHTML = '';
};

const resetRound = () => {
    CounterMyPoints = 0;
    CounterMachinePoints = 0;
    MyPoints.innerHTML = CounterMyPoints;
    MachinePoints.innerHTML = CounterMachinePoints;
};

const PlayTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine);

    if (human === machine) {
        Result.innerHTML = "Empatou";
    } else if (human === 'rock' && machine === 'scissors' || human === 'paper' && machine === 'rock' || human === 'scissors' && machine === 'paper') {
        Result.innerHTML = "Você Venceu";
        CounterMyPoints++;
        MyPoints.innerHTML = CounterMyPoints;
    } else {
        Result.innerHTML = "Você Perdeu";
        CounterMachinePoints++;
        MachinePoints.innerHTML = CounterMachinePoints;
    }

    if (CounterMyPoints >= 2) {
        document.querySelector(`.small-box${RoundCounter}`).innerHTML = '🏆';
        document.querySelector(`.small-box-comp${RoundCounter}`).innerHTML = '😠';
        RoundCounter++;
        resetRound();
    }

    if (CounterMachinePoints >= 2) {
        document.querySelector(`.small-box-comp${RoundCounter}`).innerHTML = '🏆';
        document.querySelector(`.small-box${RoundCounter}`).innerHTML = '😠';
        RoundCounter++;
        resetRound();
    }

    if (RoundCounter > 3) {
        Result.innerHTML = "Fim do jogo!";
        shootConfetti();
        setTimeout(resetGame, 4000); // Reseta o jogo após 4 segundos
    }
};






































































