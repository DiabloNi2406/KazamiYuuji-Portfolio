// Basic Snake Game Code
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const box = 32;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };
let d;
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
};
let score = 0;

document.addEventListener('keydown', direction);
document.getElementById('startGame').addEventListener('click', startGame);

function direction(event) {
  if (event.keyCode == 37 && d != 'RIGHT') d = 'LEFT';
  else if (event.keyCode == 38 && d != 'DOWN') d = 'UP';
  else if (event.keyCode == 39 && d != 'LEFT') d = 'RIGHT';
  else if (event.keyCode == 40 && d != 'UP') d = 'DOWN';
}

function draw() {
  ctx.clearRect(0, 0, 16 * box, 16 * box);
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'white';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d === 'LEFT') snakeX -= box;
  if (d === 'RIGHT') snakeX += box;
  if (d === 'UP') snakeY -= box;
  if (d === 'DOWN') snakeY += box;

  if (snakeX === food.x && snakeY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box
    };
  } else {
    snake.pop();
  }

  const newHead = {
    x: snakeX,
    y: snakeY
  };

  snake.unshift(newHead);

  if (snakeX < 0 || snakeX >= 16 * box || snakeY < 0 || snakeY >= 16 * box ||
      collision(newHead, snake)) {
    clearInterval(game);
  }

  ctx.fillStyle = 'black';
  ctx.font = '45px Changa one';
  ctx.fillText(score, 2 * box, 1.6 * box);
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) return true;
  }
  return false;
}

function startGame() {
  d = '';
  snake = [];
  snake[0] = { x: 9 * box, y: 10 * box };
  food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
  };
  score = 0;
  game = setInterval(draw, 100);
}
