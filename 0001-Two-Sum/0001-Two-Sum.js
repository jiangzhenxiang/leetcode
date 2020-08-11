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

// 给定一个数组arr，如[1,2,4,6,8,3]和一个值target如5，从数组中找出2个值，这2个值的和为target。
// 如果存在多个，返回乘积最大的。
function fn1(arr, target) {
    let max = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                if (arr[i] * arr[j] >= max) {
                    max = arr[i] * arr[j]
                    result = {
                        num1: arr[i],
                        num2: arr[j],
                        calc: arr[i] * arr[j]
                    }
                }
            }
        }
    }

    return result;
}

// console.log('----', fn1([1, 2, 4, 6, 8, 3], 5))

function fn2(arr, target) {
    let temp = {};
    let diff;
    let result;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        // i = 0. arr[0] = 1.  diff = 4;
        diff = target - arr[i];
        if (temp[arr[i]] !== undefined) {
            if(arr[i] * arr[temp[arr[i]]] >= max) {
                max = arr[i] * arr[temp[arr[i]]];
                result = [temp[arr[i]], i]
            }
        } else {
            temp[diff] = i;
        }
    }
    return result
}

console.log('----', fn2([1, 2, 4, 6, 8, 3], 5))
