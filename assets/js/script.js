const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveTarget() {
    const gameArea = document.getElementById('gameArea');
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Điểm: ${score}`;
    moveTarget();
});

// Đặt target ở vị trí ngẫu nhiên khi trang được tải
moveTarget();
