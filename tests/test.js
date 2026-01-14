/**
 * Test Suite for MathSusiks
 * MathSusiks 테스트 스위트
 */

import math, { add, circleArea, derivative, PI } from '../src/index.js';

console.log("--- MathSusiks Test / MathSusiks 테스트 ---");

// Test Basic Arithmetic / 기본 사칙연산 테스트
console.log(`Add(5, 3): ${add(5, 3)} (Expected: 8)`);
console.log(`Multiply(10, 2): ${math.multiply(10, 2)} (Expected: 20)`);

// Test Engineering / 공학 수식 테스트
console.log(`Circle Area(r=5): ${circleArea(5)} (Expected: ~78.53)`);
console.log(`PI Constant: ${PI}`);

// Test Statistics / 통계 테스트
const data = [10, 20, 30, 40, 50];
console.log(`Mean: ${math.mean(data)} (Expected: 30)`);
console.log(`StdDev: ${math.stdDev(data)} (Expected: ~14.14)`);

// Test Calculus / 미적분 테스트
const f = (x) => x * x;
console.log(`Derivative of x^2 at x=2: ${derivative(f, 2)} (Expected: ~4)`);
console.log(`Integral of x^2 from 0 to 3: ${math.integrate(f, 0, 3)} (Expected: ~9)`);

console.log("\nAll basic tests completed! / 모든 기본 테스트 완료!");
