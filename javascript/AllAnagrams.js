
// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Examples:

// Input  "abc"
// Output [ "abc", "acb", "bac", "bca", "cab", "cba" ]

function allAnagrams(word) {

    if (word.length < 2) {

        return [word];

    } else {
        // you need an array to hold the output
        var anagrams = [];
        
        var before, indexWord, after;
        var minWord, subAnagrams, newEntry;

        for (var i = 0; i < word.length; i++) {
            before = word.substr(0, i);
            indexWord = word[i];
            after = word.substr(i + 1, word.length + 1);
            minWord = before + after;
            subAnagrams = allAnagrams(minWord);

            for (var j = 0; j < subAnagrams.length; j++){

                newEntry = indexWord + subAnagrams[j];
                if(anagrams.indexOf(newEntry) === -1){
                  anagrams.push(newEntry);
                }
            }
        }
        return anagrams;
    }

}