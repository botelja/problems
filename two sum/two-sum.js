/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const twoSum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        twoSum.push(i);
        twoSum.push(j);
      }
    }
  }

  return twoSum;
};

console.log(twoSum([2, 7, 11, 15], 9));
