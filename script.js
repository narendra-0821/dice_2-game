'use strict';
var score0 = document.querySelector('#score--0');
var score1 = document.querySelector('#score--1');
var dice0 = document.querySelector('.dice');

var currentscr0 = document.getElementById('current--0');
var currentscr1 = document.getElementById('current--1');

var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;
dice0.classList.add('hidden');
var btnnew = document.querySelector('.btn--new');
var btnroll = document.querySelector('.btn--roll');
var btnhold = document.querySelector('.btn--hold');

var currentscore, scores, activeplayer, playing;
var init = function () {
  currentscore = 0;
  scores = [0, 0];
  activeplayer = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  currentscr0.textContent = 0;
  currentscr1.textContent = 0;

  playing = true;

  dice0.classList.add('hidden');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
var switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
init();
//rolling a dice
btnroll.addEventListener('click', function () {
  if (playing) {
    // generate random dice
    var randomvalue1 = Math.trunc(Math.random() * 6) + 1;

    dice0.classList.remove('hidden');
    dice0.src = `dice-${randomvalue1}.png`;

    if (randomvalue1 !== 1) {
      currentscore += randomvalue1;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});
btnnew.addEventListener('click', init);
