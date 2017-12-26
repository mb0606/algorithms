// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Input:  "1123"
// Output: [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
var keypad = [
    ["0"],
    ["1"],
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L'],
    ['M', 'N', 'O'],
    ['P', 'Q', 'R', 'S'],
    ['T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z']
];


function telephoneWords(digitString) {
  
    var letters = [];
    var digitArr = digitString.split("");
    console.log(digitArr);
    for (i = 0; i < digitArr.length; i++) {
        letters.push(keypad[digitArr[i]]);
    }
  console.log(letters);

    var count = 0;
    currentWord = '';
    limit = digitArr.length;
    foundWords = [];
  
    recu(letters, count, currentWord);
    console.log(foundWords);
    return foundWords;
}

function recu(letters, count, currentWord) {


    if (count === limit) {
        foundWords.push(currentWord);
    } else {

        for (var i = 0; i < letters[count].length; i++) {
            var nextWord = currentWord + letters[count][i];

            recu(letters, count + 1, nextWord);
        }
    }

}

