let n = 5;
let yesterdayinput = "CC..C";
let todayinput = ".CC..";
function occupiedSpaces(numberspaces, yesterday, today) {
  let numbercount = 0;
  let yesterdayarray = yesterday.split();
  let todayarray = today.split();
  if (numberspaces < 0 || numberspaces % 1 != 0) {
    return "incorrect input";
  } else {
    for (i = 0; i < n; i++) {
      if (yesterdayarray[0] == todayarray[0]) {
        numbercount += numbercount;
      }
    }
    return numbercount;
  }
}
console.log(occupiedSpaces(n, yesterdayinput, todayinput));
