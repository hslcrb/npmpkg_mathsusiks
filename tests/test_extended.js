/**
 * Test Suite for MathSusiks Extended
 * MathSusiks 확장 테스트 스위트
 */

import math, { solve, massEnergy, roi } from '../src/index.js';

console.log("--- MathSusiks Extended Test / MathSusiks 확장 테스트 ---");

// Test Physics / 물리 공식 테스트
console.log(`Mass-Energy (m=1kg): ${massEnergy(1)} (Expected: ~8.98e16)`);

// Test Finance / 금융 공식 테스트
console.log(`ROI (Gain=120, Cost=100): ${roi(120, 100)} (Expected: 0.2)`);

// Test Quick Solver / 퀵 솔버 테스트
console.log("--- Quick Solver / 퀵 솔버 ---");
console.log(`Solve('더하기', 5, 10): ${solve('더하기', 5, 10)} (Expected: 15)`);
console.log(`Solve('force', 10, 9.8): ${solve('force', 10, 9.8)} (Expected: 98)`);
console.log(`Solve('원넓이', 5): ${solve('원넓이', 5)} (Expected: ~78.53)`);
console.log(`Solve('이자', 1000, 0.05, 1): ${solve('이자', 1000, 0.05, 1)} (Expected: 1050)`);

// List all commands / 모든 명령어 목록 출력
console.log("\nAvailable Quick Commands / 사용 가능한 퀵 명령어:");
console.log(math.commands().join(', '));

console.log("\nAll extended tests completed! / 모든 확장 테스트 완료!");
