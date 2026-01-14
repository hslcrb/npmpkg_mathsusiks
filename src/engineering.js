// @ts-check
/**
 * Engineering Module - Advanced mathematical and engineering formulas
 * 공학 모듈 - 고급 수학 및 공학 공식
 */

import { PI } from './constants.js';

/**
 * --- GEOMETRY / 기하학 ---
 */

/**
 * Calculates the area of a circle
 * 원의 넓이를 계산합니다.
 * @param {number} radius 
 * @returns {number}
 */
export const circleArea = (radius) => PI * radius * radius;

/**
 * Calculates the circumference of a circle
 * 원의 둘레를 계산합니다.
 * @param {number} radius 
 * @returns {number}
 */
export const circumference = (radius) => 2 * PI * radius;

/**
 * Pythagorean theorem: Calculates the hypotenuse
 * 피타고라스 정리: 빗변의 길이를 계산합니다.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const hypotenuse = (a, b) => Math.sqrt(a * a + b * b);

/**
 * --- STATISTICS / 통계 ---
 */

/**
 * Calculates the mean of an array of numbers
 * 숫자 배열의 평균을 계산합니다.
 * @param {number[]} numbers 
 * @returns {number}
 */
export const mean = (numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

/**
 * Calculates the variance
 * 분산을 계산합니다.
 * @param {number[]} numbers 
 * @returns {number}
 */
export const variance = (numbers) => {
    const avg = mean(numbers);
    return mean(numbers.map(x => Math.pow(x - avg, 2)));
};

/**
 * Calculates the standard deviation
 * 표준 편차를 계산합니다.
 * @param {number[]} numbers 
 * @returns {number}
 */
export const stdDev = (numbers) => Math.sqrt(variance(numbers));

/**
 * --- ELECTRICAL ENGINEERING / 전기공학 ---
 */

/**
 * Ohm's Law: Calculates Voltage (V = I * R)
 * 옴의 법칙: 전압을 계산합니다.
 * @param {number} current (I)
 * @param {number} resistance (R)
 * @returns {number}
 */
export const ohmsLawV = (current, resistance) => current * resistance;

/**
 * Ohm's Law: Calculates Current (I = V / R)
 * 옴의 법칙: 전류를 계산합니다.
 * @param {number} voltage (V)
 * @param {number} resistance (R)
 * @returns {number}
 */
export const ohmsLawI = (voltage, resistance) => voltage / resistance;

/**
 * --- CALCULUS / 미적분 ---
 */

/**
 * Numerical derivative of a function at point x
 * 특정 점 x에서의 함수의 수치 미분값을 계산합니다.
 * @param {(x: number) => number} f 
 * @param {number} x 
 * @param {number} [h=1e-7] - Precision (default: 1e-7)
 * @returns {number}
 */
export const derivative = (f, x, h = 1e-7) => (f(x + h) - f(x - h)) / (2 * h);

/**
 * Numerical integration using Trapezoidal rule
 * 사다리꼴 공식을 이용한 수치 적분을 수행합니다.
 * @param {(x: number) => number} f 
 * @param {number} a - Start point
 * @param {number} b - End point
 * @param {number} [n=1000] - Number of steps (default: 1000)
 * @returns {number}
 */
export const integrate = (f, a, b, n = 1000) => {
    const h = (b - a) / n;
    let sum = (f(a) + f(b)) / 2;
    for (let i = 1; i < n; i++) {
        sum += f(a + i * h);
    }
    return sum * h;
};
