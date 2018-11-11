function solve(x, y) {
  if(x > 10 || y > 10) {
    return 0;
  }

  if(typeof x == "string" || typeof y == "string") {
    return null;
  }

  if(x == 10 || y == 10) {
    return 1;
  }

}

export { solve }
