var scores, roundScore, activePlayer;

scores= [0,0];
roundScore= 0;
activePlayer=0;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('present-0').textContent='0';
document.getElementById('present-1').textContent='0';

document.querySelector('.roll').addEventListener('click', function(){
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
});

document.querySelector('.hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.querySelector('#name-' + activePlayer).textContent= 'Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer).classList.add('winner');
        document.querySelector('.player-' + activePlayer).classList.remove('active');
        document.querySelector('#score-').te
    } else{
        nextPlayer();
    }

})

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




































































































































