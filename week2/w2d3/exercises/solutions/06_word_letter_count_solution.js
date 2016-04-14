/*

  Write a function takes in a word and returns the counts of each letter in that word.
  Return the counts in an object with a property for each letter and a value for the count.

*/

function letterCounts(word) {

  var letterCount = {};

  for(var i = 0; i < word.length; i++) {
    if(letterCount[word[i]]) {
      letterCount[word[i]]++;
    } else {
      letterCount[word[i]] = 1;
    }
  }
  
  return letterCount;
}




//TESTS - do not change these

console.log('######### Test for letterCounts("hello"): ' + (JSON.stringify(letterCounts("hello")) === JSON.stringify({"h":1,"e":1,"l":2,"o":1})));
console.log('######### Test for letterCounts("hi"): ' + (JSON.stringify(letterCounts("hi")) === JSON.stringify({"h":1,"i":1})));
