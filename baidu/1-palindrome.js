/**
 * 实现一个函数，判断输入是不是回文字符串
 * 回文：英文palindrome，指一个顺着读和反过来读都一样的字符串，比如madam、我爱我
 * */

/**
 * 解法一
 * 同时从字符串头尾开始向中间扫描字串，如果所有字符都一样，那么这个字串就是一个回文。
 * 采用这种方法的话，我们只需要维护头部和尾部两个扫描指针即可。
 * */
function isPalindrome(string) {
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string[i] !== string[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
}

function isPalindrome2(string)  {
    let reverse = string.split('').reverse().join('');
    return reverse === string;
}

console.log('1', isPalindrome2('abc'))
console.log('2', isPalindrome2('aba'))
console.log('3', isPalindrome2('abba'))
