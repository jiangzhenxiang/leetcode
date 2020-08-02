/**
 * @param {string} s
 * @return {string}
 *
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 */
// var reverseWords = function(s) {
//     var item = s.split(' ').filter(item => item);
//     item.reverse();
//     return item.join(' ')
// };
//
// console.log('',reverseWords("  hello world!  "))
var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};

console.log('',reverseWords("  hello world!  "))
