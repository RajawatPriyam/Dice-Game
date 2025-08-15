document.querySelector('#Refresh').addEventListener('click', rollDice);
function rollDice() {
  var n1 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector('.img1')
    .setAttribute('src', 'images/dice' + n1 + '.png');

  var n2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector('.img2')
    .setAttribute('src', 'images/dice' + n2 + '.png');

  if (n1 > n2) {
    document.querySelector('h1').innerHTML = ' 🎉Player 1 Wins!';
    fireConfetti();
  } else if (n1 < n2) {
    document.querySelector('h1').innerHTML = ' Player 2 Wins!🎉';
    fireConfetti();
  } else {
    document.querySelector('h1').innerHTML = '🎉Draw!🎉';
  }
}

function fireConfetti() {
  confetti({
    particleCount: 500,
    spread: 300,
    origin: { y: 0.5 },
  });
}
