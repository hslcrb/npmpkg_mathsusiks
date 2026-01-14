// @ts-check
/**
 * Arithmetic Module - Basic mathematical operations
 * 사칙연산 모듈 - 기본적인 수학 연산
 */

/**
 * Adds two numbers
 * 두 수를 더합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const add = (a, b) => a + b;

/**
 * Subtracts two numbers
 * 두 수를 뺍니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers
 * 두 수를 곱합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const multiply = (a, b) => a * b;

/**
 * Divides two numbers
 * 두 수를 나눕니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero / 0으로 나눌 수 없습니다.");
    return a / b;
};

/**
 * Calculates the remainder of division
 * 나눗셈의 나머지를 계산합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const modulo = (a, b) => a % b;

/**
 * Calculates the power of a number
 * 거듭제곱을 계산합니다.
 * @param {number} base 
 * @param {number} exponent 
 * @returns {number}
 */
export const power = (base, exponent) => Math.pow(base, exponent);

/**
 * Calculates the square root of a number
 * 제곱근을 계산합니다.
 * @param {number} n 
 * @returns {number}
 */
export const sqrt = (n) => {
    if (n < 0) throw new Error("Negative square root / 음수의 제곱근은 계산할 수 없습니다.");
    return Math.sqrt(n);
};
