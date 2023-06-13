// 1 - Juegos con arreglos - Espiral de numeros
const numberSpiral = (n) => {
  let spiral = [];
  let spiralSize = 1;

  while (n > spiralSize * spiralSize) spiralSize += 2;

  for (let i = 0; i < spiralSize; i++) {
    let row = [];
    for (let j = 0; j < spiralSize; j++) {
      row.push(-1);
    }
    spiral.push(row);
  }

  const nextDirection = {
    rigth: "up",
    up: "left",
    left: "down",
    down: "rigth",
    center: "rigth",
  };

  let DIRECTION_CHANGES_UNTIL_INCREASE = 2;

  let currentDirectionChanges = 0;
  let itemsPerDirection = 1;
  let currentItems = 0;
  let currentDirection = "center";

  let pos = {
    y: Math.floor(spiralSize / 2),
    x: Math.floor(spiralSize / 2),
  };

  for (let i = 1; i <= n; i++) {
    spiral[pos.y][pos.x] = i;

    currentItems++;

    if (currentItems == itemsPerDirection) {
      currentDirection = nextDirection[currentDirection];

      if (currentDirectionChanges === DIRECTION_CHANGES_UNTIL_INCREASE) {
        currentDirectionChanges = 0;
        itemsPerDirection++;
      }
      currentItems = 0;
      currentDirectionChanges++;
    }

    pos.x = currentDirection === "left" ? pos.x - 1 : currentDirection === "rigth" ? pos.x + 1 : pos.x;
    pos.y = currentDirection === "up" ? pos.y - 1 : currentDirection === "down" ? pos.y + 1 : pos.y;
  }
  return spiral;
};
// 1 - Juegos con arreglos - Espiral de numeros con condiciones
const numberSpiralConditional = (n, fn) => numberSpiral(n).map((row) => row.map((cell) => (fn(cell) ? cell : -1)));
// 1 - Juegos con arreglos - Espiral de numeros con condiciones
const primeNumber = (n) => {
  if (n == 1 || n == 2) return true;

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
};
// 1 - Juegos con arreglos - Espiral de numeros con condiciones
const fibonacciNumber = (n) => {
  if (n == 1) return true;

  const fibonacciNumbers = [1, 1];

  while (fibonacciNumbers[0] + fibonacciNumbers[1] <= n) {
    const [n1, n2] = fibonacciNumbers;

    if (n1 + n2 === n) return true;

    fibonacciNumbers[0] = n2;
    fibonacciNumbers[1] = n1 + n2;
  }
  return false;
};

export { numberSpiral, numberSpiralConditional, primeNumber, fibonacciNumber };
