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
console.log('countPrimes',countPrimes(7))




function getPrime(n) {
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) !== false) {
            result.push(i)
        }
    }

    console.log('--',result)

}

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        debugger
        if (i !== num &&  num % i === 0) {
            return false;
        }
    }
}

console.log('', isPrime(8))
getPrime(10)
