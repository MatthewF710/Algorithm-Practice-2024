```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    //iteration
    if (i % 3 == 0) {
      //selection
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      //selection
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }
  ...
```

rockPaperScissors() is the alogorithm. It utilizes both iteration in the for loop (for (let i = 0; i <= random; i++)), as well as selection (if (i % 3 == 0)). The sequencing is going through a step by step process which is sequencing. This algorithm functions by creating a random number in order to select the opponent choice, and going through finding out if its divisable by 3, 2, or else in order to select an option. This will go through got as long as i is less than or equal to random.
