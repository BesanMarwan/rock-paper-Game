const game = () => {

    let pScore = 0;
    let cScore = 0;

    //start game 
    const startGame = () => {

        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {

            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });

    };
    //play match
    const playMatch = () => {

        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function () {
                this.style.animation = ' ';

            });

        });

        //            computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {

            option.addEventListener('click', function () {

                //                    computer choice
                const optionNumber = Math.floor(Math.random() * 3);
                const computerChoice =computerOptions[optionNumber];

                setTimeout(() => {
                    //here we are call the compare hands
                    compareHands(this.textContent, computerChoice);

                    //                UpdateImage
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                }, 2000);


                playerHand.style.animation = 'shakePlayer   2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';


            });

        });

    };

    //    updte score the game
    const updateScore = () => {

        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };

    //chech whos the winner
    const compareHands = (playerChoice, computerChoice) => {

        //                update the text to the result game
        const winner = document.querySelector('.winner');

        //        check if a tie
        if (playerChoice === computerChoice) {
            
            winner.textContent = 'It is a tie';
            return;
        }

        //        check if a Rock
        if (playerChoice === 'rock') {

            if (computerChoice == 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            }

        }
        //        check if a Paper
        if (playerChoice === 'paper') {

            if (computerChoice == 'rock') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            }

        }
        //        check if a scissors
        if (playerChoice === 'scissors') {

            if (computerChoice == 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;

            }

        }


    };

    startGame();
    playMatch();


};

game();
