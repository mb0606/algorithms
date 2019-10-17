var twoSum = function(nums, target) {
   const obj = {};
    for (let i = 0; i < nums.length; i++) {
        // calculate complement
        const complement = target - nums[i];
        // if it doesn't exist in the obj add it
        if (obj[nums[i]] === undefined) {
          obj[nums[i]] = i;
        }
        // check that the complement exists and that the numbers are not at the same index
        // this is to prevent [3] , 6 index 0 counting as both number and compliment
        if( obj[complement] !== undefined && obj[complement] !== i) {
            return [obj[complement], i]
        }
    }
};
