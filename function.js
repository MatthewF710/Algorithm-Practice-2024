function factorial(x) {
  if (x < 0 || x % 1 != 0) {
    return "incorrect input";
  } else {
    let product = 1;
    for (i = 1; i <= x; i++) {
      product *= i;
    }
    return product;
  }
}
console.log(factorial(7));
