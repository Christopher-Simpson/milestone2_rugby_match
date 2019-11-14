class GameSounds {
    constructor() {
        this.bgSound = new Audio('assets/audio/game-sounds/background-crowd.mp3');
        this.flipSound = new Audio('assets/audio/game-sounds/flip.mp3');
        this.victorySound = new Audio('assets/audio/game-sounds/victory.mp3');
        this.gameOverSound = new Audio('assets/audio/game-sounds/game-over.mp3');
        this.gameStartSound = new Audio('assets/audio/game-sounds/game-start.mp3'); 
        this.bgSound.volume = 0.5;
        this.bgSound.loop = true;
        this.matchSound = new randomWin();
        this.matchFail = new randomFail();
    }
    startbgSound() {
        this.bgSound.play();
    }
}

function randomWin() {
    var winSounds = ['assets/audio/matches/win01.mp3',
                     'assets/audio/matches/win02.mp3',
                     'assets/audio/matches/win03.mp3',
                     'assets/audio/matches/win04.mp3',
                     'assets/audio/matches/win05.mp3',
                     'assets/audio/matches/win06.mp3'];

    var playWinSoundFile = winSounds[Math.floor(Math.random()*winSounds.length)];

    return playWinSoundFile;
                     
                    
}

function randomFail() {
    var failSounds = ['assets/audio/fails/fail01.mp3',
                     'assets/audio/fails/fail02.mp3',
                     'assets/audio/fails/fail03.mp3',
                     'assets/audio/fails/fail04.mp3',
                     'assets/audio/fails/fail05.mp3',
                     'assets/audio/fails/fail06.mp3',
                     'assets/audio/fails/fail07.mp3',
                     'assets/audio/fails/fail08.mp3',
                     'assets/audio/fails/fail09.mp3'];

    var playFailSoundFile = failSounds[Math.floor(Math.random()*failSounds.length)];

    return playFailSoundFile;
                     
                    
}

function loaded() {
    let instructions = Array.from(document.getElementsByClassName('click-screen'));
    let cards = Array.from(document.getElementsByClassName('play-card'));

    instructions.forEach(instruction => {
        instruction.addEventListener('click', () => {
            instruction.classList.remove('visible');
            // game.startGame();
            let gameSounds = new GameSounds();
        })
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loaded());
} else {
    loaded();
}

