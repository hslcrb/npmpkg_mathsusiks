// @ts-check
/**
 * Number Theory Module - Prime numbers, GCD, LCM, etc.
 * 정수론 모듈 - 소수, 최대공약수, 최소공배수 등
 */

/**
 * Checks if a number is prime
 * 소수인지 판별합니다.
 * @param {number} n 
 * @returns {boolean}
 */
export const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
};

/**
 * Greatest Common Divisor (GCD)
 * 최대공약수(GCD)를 계산합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
};

/**
 * Least Common Multiple (LCM)
 * 최소공배수(LCM)를 계산합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const lcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
};

/**
 * Fibonacci sequence at index n
 * n번째 피보나치 수를 반환합니다.
 * @param {number} n 
 * @returns {number}
 */
export const fibonacci = (n) => {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};
