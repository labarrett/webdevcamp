/*

  Write a function that takes in a number and sums all the numbers up to that number.

*/

function sumTo(number) {
  var sum = 0;
  for(var i = 0; i < number; i++){
    sum += i;
  }
  return sum;
}


//Tests - do not change below this line

console.log('######### Test for sumTo(10): ' + (sumTo(10) === 45));
console.log('######### Test for sumTo(0): ' + (sumTo(0) === 0));
console.log('######### Test for sumTo(99): ' + (sumTo(99) === 4851));
