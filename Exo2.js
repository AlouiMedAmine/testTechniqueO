/* Test 2: Any language (3/20)
Solve the game "Guess a number", find a secret integer between 1 and 1000000
in less than 50 guesses. Write a function that solves the game without user input and returns the
solution by using the function verify() which is defined with the following
specification:
function verify(guess: integer) -> integer
Argument:
guess (integer) the number to verify
Returns:
0 if the guess is the solution, your program won
-1 if the solution is smaller than the guess parameter
1 if the solution is bigger than the guess parameter

Warning: You are not allowed to call verify() more that 50 times or you loose. */

//
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trouvnumber() {
  let guess = 500000;
  let random = randomInt(1, 1000000);
  let highest = guess;
  let lowest = guess;

  console.log(random);

  for (i = 0; i <= 50; i++) {
    let guess = i;
    let verify = verify(guess);
    if (verify === 0) {
      console.log(
        "You won ! The number was " + guess + " in " + i + 1 + "Guesses !"
      );
      break;
    } else if (verify === -1) {
      if (lowest > guess) guess = guess - guess / 2;
    } else {
      guess = guess + guess / 2;
    }
  }
}
