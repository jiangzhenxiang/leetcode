/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * */

/**
 * @param {string} s
 * @return {number}
 * 时间复杂度：O(n2)， 其中 arr.indexOf() 时间复杂度为 O(n) ，arr.splice(0, index+1) 的时间复杂度也为 O(n)
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动数组
    let arr = [];
    // [a, b,c,b]
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s.charAt(i));
        // arr存在当前字符
        if (index > -1) {
            // 删除从这个字符之前的
            arr.splice(0, index + 1)
        }
        arr.push(s.charAt(i));
        max = Math.max(max, arr.length);
    }
    return max;
};

/**
 * 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
 * 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，
 * 此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * */
var lengthOfLongestSubstring2 = function (s) {
    let map = new Map(), max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

console.log('1', lengthOfLongestSubstring2("pwwkew"));
console.log('1', lengthOfLongestSubstring2("abcdaassd"));


var str = 'pwwkew';
var lengthOfLongestSubstring3 = function (s) {
    var arr = s.split('');
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        map[i] = [];
        map[i].push(arr[i]);
        for (var j = i + 1; j < arr.length; j++) {
            if (map[i].indexOf(arr[j]) !== -1) {
                break;
            } else {
                map[i].push(arr[j]);
            }
        }
    }
    console.log('map', map)
    var len = 0;
    for (var prop in map) {
        if (map[prop].length > len) {
            len = map[prop].length;
        }
    }
    return len;

};
var res = lengthOfLongestSubstring3(str);
console.log('3', res);
