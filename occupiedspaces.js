function occupiedSpaces(numberspaces, yesterday, today) {
  let numbercount = 0;
  let yesterdayarray = yesterday.split("");
  let todayarray = today.split("");
  if (numberspaces < 0 || numberspaces % 1 != 0) {
    return "incorrect input";
  } else {
    for (i = 0; i < n; i++) {
      if ((yesterdayarray[i] === "C") & (todayarray[i] === "C")) {
        numbercount++;
      }
    }
    return "the number of spaces is ", numbercount;
  }
}
let n = 7;
let yesterdayinput = "CCCCCCC";
let todayinput = "C.C.C.C";
console.log(occupiedSpaces(n, yesterdayinput, todayinput));
