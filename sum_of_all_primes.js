/* Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = true;
    for (let j = 2; j < sqrtnum + 1; j++){
        if (num % j == 0) {
            prime = false;
            break;
        }
    }
  
    return prime;
}

function sumPrimes(num) {
    var primesArray = [];
    for (let i = 2; i <= num; i++){
        if (isPrime(i) === true) primesArray.push(i);
    }
    return primesArray.reduce((sum,prime) => sum+prime)
}

console.log(sumPrimes(977));
//73156