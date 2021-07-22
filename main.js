var $car = document.querySelector('.car');

document.addEventListener('keydown', handleKey);
document.addEventListener('keydown', handleStart);
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
}

// function handleStart(event) {
//   var posLeft = 0;
//   setInterval(frame, 5);

//   function frame() {
//     if (event.key === ' ') {
//       posLeft++;
//     }
//     if (posLeft === 1300) {
//       while (posLeft > 0) {
//         posLeft--;
//       }
//     }
//     $car.style.left = posLeft + 'px';
//   }
// }

function handleStart(event) {
  $car.style.left = '0px';
  setInterval(moveRight, 16);
  function moveRight() {
    if (event.key === ' ') {
      $car.style.left = parseInt($car.style.left) + 15 + 'px';
    }
    if ($car.style.left === '1300px') {
      while ($car.style.left > 0) {
        $car.style.left--;
      }
    }
  }
}
