var $car = document.querySelector('.car');
var gas = false;
var carStop = null;
var left = 0;
var up = 0;
document.addEventListener('keydown', handleKey);
function handleKey(event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'car rotate-down';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car rotate-left';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'car rotate-up';
  } else {
    $car.className = 'car rotate-right';
  }
  if (event.key === ' ') {
    if (!gas) {
      gas = true;
      carStop = setInterval(move, 16);
    } else {
      gas = false;
      clearInterval(carStop);
    }
  }
}
function move() {
  if ($car.className === 'car rotate-left') {
    $car.style.left = (left -= 16) + 'px';
  } else if ($car.className === 'car rotate-right') {
    $car.style.left = (left += 16) + 'px';
  } else if ($car.className === 'car rotate-up') {
    $car.style.top = (up -= 16) + 'px';
  } else if ($car.className === 'car rotate-down') {
    $car.style.top = (up += 16) + 'px';
  }
}
