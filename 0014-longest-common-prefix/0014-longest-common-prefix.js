function f(strs) {
    if (!strs.length) return '';
    let pre = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < pre.length && j < strs[i].length; j++) {
            if(pre.charAt(j) !== strs[i].charAt(j)) {
                break;
            }
        }
        pre = pre.substring(0, j);

        if(pre === '') {
            return '';
        }
    }

    return pre;
}

// console.log(f(["flower", "flow", "flight"]));
console.log(f(["dog","racecar","car"]));
