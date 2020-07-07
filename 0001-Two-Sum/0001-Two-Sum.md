# leetcode 第1题：两数之和

> 原题： https://leetcode-cn.com/problems/two-sum/

### 题目描述
给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


**示例**
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```


### 解法一

暴力法：2次循环

时间复杂度：O(n^2)
 
```js
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length;i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j]===target) {
                return [i,j]
            }
        }
    }
};
```

### 解法二
边存边比较，减少查询时间。

每遍历到一个元素就计算该元素与 target 之间的差值 dif，然后以 dif 为下标到数组temp中寻找。 如果 temp[dif] 有值，则返回两个元素在数组 nums 的下标。否则将当前元素存入temp中。

时间复杂度：O(n)。

```js
var twoSum = function(nums, target) {
    let temp = {};
    for(let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
        if(temp[diff] !== undefined) {
            return [temp[diff], i];
        } else {
            temp[nums[i]] = i;
        }           
    }
}
```
