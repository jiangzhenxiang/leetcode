/**
 * 415. 字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 注意：
 num1 和num2 的长度都小于 5100.
 num1 和num2 都只包含数字 0-9.
 num1 和num2 都不包含任何前导零。
 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 从 num1 ，num2 的尾部开始计算，模拟人工加法，保存到 tmp 中；

 计算 tmp 的个位数，并添加到 result 的头部，这里的 result 是 string 类型，不是 number 类型；

 计算进位，改成 tmp，进行下次循环

 索引溢出处理：循环结束，根据 tmp 判断是否有进位，并在 result 头部添加进位 1

 返回 result
 */
var addStrings = function (num1, num2) {
    let a = num1.length, b = num2.length, result = '', temp = 0;
    while (a || b) {
        a ? temp += +num1[--a] : '';
        b ? temp += +num2[--b] : '';
        // 取余数。
        result = temp % 10 + result;
        if(temp > 9) {
            temp = 1;
        } else {
            temp = 0;
        }
    }
    if(temp) result = result + temp;
    return result;
};

console.log(addStrings('9333852702227987', '85731737104263'))
