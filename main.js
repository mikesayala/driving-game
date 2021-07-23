var $car = document.querySelector('.car');

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
  $car.style.left = '0px';
  setInterval(moveRight, 16);
  function moveRight() {
    if (event.key !== ' ') {
      return;
    }
    if (event.key === ' ') {
      $car.style.left = parseInt($car.style.left) + 15 + 'px';
    }
  }
}
