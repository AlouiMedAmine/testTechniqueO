/* Test 3: Any language (3/20)
Write a function that takes a list of strings and returns the sum of the list items that represents an integer (skipping the other items) */
let testarray = ["6", "lol", "4", "six", "jesus", "9"];
let sum = 0;

function sumList(array) {
  array.map(function(x) {
    if (isFinite(x)) {
      sum += parseInt(x, 10);
    }
  });
  console.log(sum);
}

sumList(testarray);

//temps passé : 25 min
