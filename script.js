var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.roll').addEventListener('click', function(){
    if(gamePlaying){
        //random number
        var dice= Math.floor(Math.random()*6)+1;

        //display result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src= 'dice-' + dice + '.png';

        if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#present-' + activePlayer).textContent= roundScore;
        } else{
        //next player
        nextPlayer();
        }
    }
});

document.querySelector('.hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];
        if(scores[activePlayer]>=100){
        document.querySelector('#name-' + activePlayer).textContent= 'Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer).classList.add('winner');
        document.querySelector('.player-' + activePlayer).classList.remove('active');
        gamePlaying= false;
        } else{
        nextPlayer();
        }
    }
});

function nextPlayer(){
    //next player
    activePlayer === 0? activePlayer=1: activePlayer=0;
    roundScore=0;
    document.getElementById('present-0').textContent='0';
    document.getElementById('present-1').textContent='0';
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.new').addEventListener('click', init)

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('present-0').textContent='0';
    document.getElementById('present-1').textContent='0';
    document.querySelector('#name-0').textContent= 'Player 1';
    document.querySelector('#name-1').textContent= 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
}




































































































































