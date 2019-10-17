var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = i;
    }
    if (hashMap[complement] !== undefined && hashMap[complement] !== i) {
      return [hashMap[complement], i]
    }
  }
};
