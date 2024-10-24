function dectobinary(dec) {
  let binary = "";
  for (i = 7; i > -1; i--) {
    if (dec >= 2 ** i) {
      dec = dec - 2 ** i;
      binary += "1";
    } else {
      binary += "0";
    }
  }
  return binary;
}
function binarytodec(binary) {
  let decimal = 0;
  for (i = binary.split("").length - 1; i > -1; i--) {
    if (binary[i] == 1) {
      decimal = decimal + 2 ** i;
    }
  }
  return decimal;
}
console.log(binarytodec("11111111"));
console.log(dectobinary("70"));
