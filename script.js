let score = 0;
let doubleClicks = 0;
let autoClicks = 0;
let doubleClickCost = 10;
let autoClickCost = 20;
let gameInProgress = true;

const scoreElement = document.getElementById('score-value');
const clickButton = document.getElementById('click-button');
const buyDoubleClickButton = document.getElementById('buy-double-click');
const buyAutoClickButton = document.getElementById('buy-auto-click');

function updateScore() {
  scoreElement.textContent = score;

  if (score >= 1000 && gameInProgress) {
    endGame();
  }
}

clickButton.addEventListener('click', () => {
  if (gameInProgress) {
    score += 1 + doubleClicks;
    updateScore();
  }
});

buyDoubleClickButton.addEventListener('click', () => {
  if (score >= doubleClickCost) {
    score -= doubleClickCost;
    doubleClicks++;
    doubleClickCost *= 2;
    updateScore();
    updateShop();
  } else {
    alert('Not enough score to buy Double Click!');
  }
});

buyAutoClickButton.addEventListener('click', () => {
  if (score >= autoClickCost) {
    score -= autoClickCost;
    autoClicks++;
    autoClickCost *= 2;
    setInterval(() => {
      score += autoClicks;
      updateScore();
    }, 1000);
    updateScore();
    updateShop();
  } else {
    alert('Not enough score to buy Auto Click!');
  }
});

function updateShop() {
  buyDoubleClickButton.textContent = `Buy Double Click (Cost: ${doubleClickCost})`;
  buyAutoClickButton.textContent = `Buy Auto Click (Cost: ${autoClickCost})`;
}

//Yeniden başlatma
function restartGame() {
  location.reload();
}

function endGame() {
  gameInProgress = false;

  //Yeni boş sayfa
  const body = document.body;
  body.innerHTML = '';

  // Sayfa içeriği
  const congratulationsPage = document.createElement('div');
  congratulationsPage.id = 'congratulations-page';
  congratulationsPage.innerHTML = `
    <img src="congratulations-image.jpg" <button onclick="restartGame()">
  `;
  body.appendChild(congratulationsPage);
}
