var countPrimes = function (n) {
    let Primes  = [];
    let signs = new Array(n+1);
    for (let i = 2; i <= n; i++) {
        if (!signs[i - 1]) {
            Primes.push(i)
            //每计算一个数，都要把它的倍数去掉。到了n，数一下留下了几个数。
            for (let j = i * i; j <= n; j = j + i) {
                signs[j - 1] = true;
            }
        }
    }
    return Primes;
};
console.log('countPrimes',countPrimes(10))

