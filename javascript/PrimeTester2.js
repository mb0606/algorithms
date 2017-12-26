// Prime Tester(extra credit)
//   Extra credit: Write a function that generates a list of all prime numbers in a user-specified range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling saucy, check out the Sieve of Atkin.) 
// Parameters:

// startbegin of range

// endend of range (inlcusive)

// Input : start = 20 end = 22
// Output: []

function primeSieve (start, end) {
  var newArr = [];
  for (var counter = start; counter <= end; counter++) {

      var notAPrime = false;
      for (var i = 2; i <= counter; i++) {
          if (counter%i===0 && i!==counter) {
              notAPrime = true;
          }
      }
      
      
      if (notAPrime === false && counter !== 1) {
                newArr.push(counter);
      }
  }
 return newArr;    
}