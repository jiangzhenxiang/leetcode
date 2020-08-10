const map = new Map();
function climbStair(n) {
    // 递归有很多值被重复计算
    if (n === 1) return 1
    if (n === 2) return 2;
    if(map.has(n)) {
        return map.get(n);
    } else {
        let result = climbStair(n - 1) + climbStair(n - 2);
        map.set(n, result);
        return result;
    }
}

console.log('', climbStair(4))
