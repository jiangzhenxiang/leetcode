var twoSum1 = function (nums, targets) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targets) {
                return [i, j];
            }
        }
    }
};


// console.log('twoSum1', twoSum1([2,7,11,15], 9));


var twoSum2 = function (nums, target) {
    let temp = {};
    for (let i = 0; i < nums.length; i++) {
        // 第一轮循环 diff = 7 = 9 - 2
        let diff = target - nums[i];
        // temp[7] 为undefined
        if (temp[diff] !== undefined) {
            return [temp[diff], i];
        } else {
            // temp 2 = 0
            temp[nums[i]] = i;
        }
    }
};
// console.log('twoSum2', twoSum2([2, 7, 11, 15], 9));



var twoSum3 = function (nums, target) {
    let temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        // 第一轮循环 diff = 7 = 9 - 2
        let diff = target - nums[i];
        // temp[7] 为undefined
        if (temp.has(diff)) {
            return [temp.get(diff), i];
        } else {
            // temp 2 = 0
            temp.set(nums[i], i);
        }
    }
};
// console.log('twoSum3', twoSum3([2, 7, 11, 15], 9));
