function solve(x, y) {
  if(outOfBounds(x) || outOfBounds(y)) {
    return 0;
  }

  if(typeof x == "string" || typeof y == "string") {
    return null;
  }

  if(outerCircle(x) || outerCircle(y)) {
    return 1;
  }

  if(middleCircle(x) || middleCircle(y)) {
    return 5;
  }
}

function outOfBounds(num) {
  return num > 10.0;
}

function outerCircle(num) {
  return num >= 6.0 && num <= 10.0;
}

function middleCircle(num) {
  return num >= 2 && num <= 5;
}

function innerCircle(num) {
  return num >= 0 && num <= 1;
}

export { solve }
