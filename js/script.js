const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


const scoreElement = document.getElementById("score_value");
const resetButton = document.getElementById("reset");


let snake, food, direction, score, play;


function init() {
  snake = [
    {
      x: (Math.floor(Math.random() * columns)) * scale,
      y: (Math.floor(Math.random() * rows)) * scale
    }
  ];
  
  
  do {
    food = {
      x: (Math.floor(Math.random() * columns)) * scale,
      y: (Math.floor(Math.random() * rows)) * scale
    };
  } while (food.x === snake[0].x && food.y === snake[0].y);
  
  direction = "right";
  score = 0;
  updateScore();
  
  clearInterval(play);
  play = setInterval(draw, 100);
}


function updateScore() {
  scoreElement.innerText = score;
}


document.onkeydown = (event) => {
  const key = event.keyCode;
  if (key == 37 && direction != "right") direction = "left";
  else if (key == 38 && direction != "down") direction = "up";
  else if (key == 39 && direction != "left") direction = "right";
  else if (key == 40 && direction != "up") direction = "down";
};


resetButton.onclick = init;


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  snake.forEach((segment) => {
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "red";
    ctx.fillRect(segment.x, segment.y, scale, scale);
    ctx.strokeRect(segment.x, segment.y, scale, scale);
  });

  
  ctx.fillStyle = "red";
  ctx.strokeStyle = "red";
  ctx.fillRect(food.x, food.y, scale, scale);
  ctx.strokeRect(food.x, food.y, scale, scale);

  
  let snakex = snake[0].x;
  let snakey = snake[0].y;

  if (direction == "left") snakex -= scale;
  if (direction == "up") snakey -= scale;
  if (direction == "right") snakex += scale;
  if (direction == "down") snakey += scale;

  
  if (snakex >= canvas.width) snakex = 0;
  if (snakey >= canvas.height) snakey = 0;
  if (snakex < 0) snakex = canvas.width - scale;
  if (snakey < 0) snakey = canvas.height - scale;

  
  if (snakex === food.x && snakey === food.y) {
    score++;
    updateScore();
    food = {
      x: (Math.floor(Math.random() * columns)) * scale,
      y: (Math.floor(Math.random() * rows)) * scale
    };
  } else {
    snake.pop();
  }

  
  const newHead = { x: snakex, y: snakey };

  
  if (eatSelf(newHead, snake)) {
    clearInterval(play);
    alert(`Game Over! Your score: ${score}`);
  }

  snake.unshift(newHead);
}


function eatSelf(head, array) {
  return array.some(segment => head.x === segment.x && head.y === segment.y);
}


init();
