const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');


const playerHand = document.querySelector('#player-hand');
const machineHand = document.querySelector('#machine-hand');

let humanScoreNumber = 0;
let machineScoreNumber = 0;


const icons = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();


    playerHand.innerHTML = '✊';
    machineHand.innerHTML = '✊';
    result.innerHTML = 'Pedra, papel, tesoura...';


    playerHand.classList.add('shake');
    machineHand.classList.add('shake');


    setTimeout(() => {

        playerHand.classList.remove('shake');
        machineHand.classList.remove('shake');


        playerHand.innerHTML = icons[humanChoice];
        machineHand.innerHTML = icons[machineChoice];


        playTheGame(humanChoice, machineChoice);
    }, 1000);
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Deu Empate!';
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou! 🎉';
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu! 😢';
    }
};       