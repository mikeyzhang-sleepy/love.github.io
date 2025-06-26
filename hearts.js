function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';

  // 随机初始位置、颜色、大小
  const size = Math.random() * 10 + 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '-20px';
  heart.style.backgroundColor = getRandomColor();
  heart.style.opacity = Math.random() * 0.6 + 0.3;

  // 随机动画时长
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';

  document.body.appendChild(heart);

  // 清理 DOM
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

function getRandomColor() {
  const colors = ['#FF69B4', '#FF1493', '#DC143C', '#FF4500', '#FF8C00', '#FF00FF', '#FFB6C1', '#FFD700'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 每 150ms 生成一个爱心
setInterval(createHeart, 150);
