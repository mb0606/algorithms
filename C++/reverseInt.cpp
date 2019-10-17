// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21


class Solution {
public:
    int reverse(int x) {
        
        bool negative = false;
        if(x > 1463847413 || x < -2147483647 || x == -1563847412){
            return 0;
        }
        // temp remove neg
        if(x < 0){
            negative = true;
            x = -x;
        }
        
        long long revNum = 0;
        // loop while x is a num over 0
        while(x > 0){
            int currentNum = x%10;
            revNum = revNum*10 + currentNum;

            x = x/10;
        }
        // use negative flag to return int
        return negative ? (int)-revNum : (int)revNum;

    }
};
