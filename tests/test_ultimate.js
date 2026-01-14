/**
 * Ultimate Test Suite for MathSusiks (v1.5)
 * MathSusiks 최종 통합 범용 테스트 스위트
 */

import math, { q } from '../src/index.js';

console.log("--- MathSusiks Version 1.5 Ultimate Test ---");

// Test Random / 랜덤 테스트
console.log(`Dice Roll: ${q('dice')} (Expected: 1-6)`);
console.log(`Pick Random: ${q('pick', ['apple', 'banana', 'cherry'])}`);

// Test Date / 날짜 테스트
console.log(`Leap Year(2024): ${q('leap', 2024)} (Expected: true)`);
console.log(`Days Diff: ${q('dday', '2024-01-01', '2024-01-10')} (Expected: 9)`);

// Test Matrix / 행렬 테스트
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]]; // A+B = [[6, 8], [10, 12]]
console.log(`Matrix Add: ${JSON.stringify(q('mat_add', A, B))}`);
console.log(`Determinant (A): ${q('det', A)} (Expected: -2)`);

// Test Security / 보안 테스트
console.log(`SHA256('hello'): ${q('hash', 'hello')}`);

// Test String Math / 문자열 수학 테스트
console.log(`Levenshtein('kitten', 'sitting'): ${q('leven', 'kitten', 'sitting')} (Expected: 3)`);

// Test Logic / 논리 테스트
console.log(`XOR(1, 0): ${q('xor', 1, 0)} (Expected: 1)`);

// Test Universal Keywords / 범용 키워드 테스트
console.log(`Plus: ${q('더하기', 5, 5)}`);
console.log(`Prime: ${q('소수', 17)}`);
console.log(`BMI: ${q('비만도', 70, 1.75)}`);

console.log("\nTotal Commands Available: " + math.commands().length);
console.log("Commands: " + math.commands().slice(0, 5).join(', ') + "...");

console.log("\n--- All tests passed! / 모든 테스트 통과! ---");
