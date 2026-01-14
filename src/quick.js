// @ts-check
/**
 * Quick Module - Semantic aliases and smart solver (Expanded Universal V2)
 * 퀵 모듈 - 의미 기반 별칭 및 스마트 해결사 (확장 범용 V2)
 */

import * as arith from './arithmetic.js';
import * as eng from './engineering.js';
import * as phys from './physics.js';
import * as fin from './finance.js';
import * as trig from './trigonometry.js';
import * as alg from './algebra.js';
import * as sci from './science.js';
import * as conv from './conversion.js';
import * as num from './number_theory.js';
import * as mat from './matrix.js';
import * as rand from './random.js';
import * as dt from './date_utils.js';
import * as sec from './security.js';
import * as str from './string_math.js';
import * as logic from './logic.js';

/** @type {Object<string, function(...any): any>} */
const Registry = {
    // Arithmetic / 기초 연산
    'plus': arith.add, '더하기': arith.add, '+': arith.add, 'Add': arith.add,
    'minus': arith.subtract, '빼기': arith.subtract, '-': arith.subtract, 'Sub': arith.subtract,
    'times': arith.multiply, '곱하기': arith.multiply, '*': arith.multiply, 'Mult': arith.multiply,
    'divide': arith.divide, '나누기': arith.divide, '/': arith.divide, 'Div': arith.divide,
    'mod': arith.modulo, '나머지': arith.modulo, '%': arith.modulo,
    'pow': arith.power, '거듭제곱': arith.power, '^': arith.power,
    'sqrt': arith.sqrt, '제곱근': arith.sqrt, '루트': arith.sqrt,

    // Geometry & Engineering / 기하학 및 공학
    'circle': eng.circleArea, '원넓이': eng.circleArea,
    'circum': eng.circumference, '원둘레': eng.circumference,
    'hypot': eng.hypotenuse, '대각선': eng.hypotenuse, '빗변': eng.hypotenuse,
    'avg': eng.mean, 'mean': eng.mean, '평균': eng.mean,
    'var': eng.variance, '분산': eng.variance,
    'std': eng.stdDev, '표준편차': eng.stdDev,
    'ohm_v': eng.ohmsLawV, '전압': eng.ohmsLawV,
    'ohm_i': eng.ohmsLawI, '전류': eng.ohmsLawI,
    'diff': eng.derivative, '미분': eng.derivative,
    'int': eng.integrate, '적분': eng.integrate,

    // Physics / 물리학
    'f': phys.force, 'force': phys.force, '힘': phys.force,
    'ke': phys.kineticEnergy, 'energy': phys.kineticEnergy, '에너지': phys.kineticEnergy,
    'pe': phys.potentialEnergy, '위치에너지': phys.potentialEnergy,
    'emc2': phys.massEnergy, '상대성': phys.massEnergy,
    'g_force': phys.gravitation, '중력': phys.gravitation,
    'press': phys.pressure, '압력': phys.pressure,
    'work': phys.work, '일': phys.work,
    'phys_p': phys.power, '일률': phys.power,

    // Finance / 금융
    'int_s': fin.simpleInterest, '단리': fin.simpleInterest, '이자': fin.simpleInterest,
    'int_c': fin.compoundInterest, '복리': fin.compoundInterest,
    'fv': fin.futureValueAnnuity, '미래가치': fin.futureValueAnnuity,
    'cagr': fin.cagr, '성장률': fin.cagr,
    'roi': fin.roi, '수익률': fin.roi,

    // Trigonometry / 삼각함수
    'sin': trig.sin, '사인': trig.sin,
    'cos': trig.cos, '코사인': trig.cos,
    'tan': trig.tan, '탄젠트': trig.tan,
    'd2r': trig.degToRad, '라디안변환': trig.degToRad,
    'r2d': trig.radToDeg, '각도변환': trig.radToDeg,

    // Algebra / 대수학
    'fact': alg.factorial, '팩토리얼': alg.factorial, '!': alg.factorial,
    'npr': alg.permutation, '순열': alg.permutation,
    'ncr': alg.combination, '조합': alg.combination,
    'quad': alg.quadratic, '근의공식': alg.quadratic,

    // Science & Health / 과학 및 건강
    'bmi': sci.bmi, '비만도': sci.bmi,
    'gas_p': sci.idealGasP, '기체압력': sci.idealGasP,
    'molar': sci.molarity, '몰농도': sci.molarity,
    'reynolds': sci.reynoldsNumber, '레이놀즈': sci.reynoldsNumber,

    // Conversion / 변환
    'km2m': conv.kmToMiles, 'km_mile': conv.kmToMiles,
    'm2km': conv.milesToKm, 'mile_km': conv.milesToKm,
    'c2f': conv.celsiusToFahrenheit, '섭씨화씨': conv.celsiusToFahrenheit,
    'f2c': conv.fahrenheitToCelsius, '화씨섭씨': conv.fahrenheitToCelsius,
    'kg2lb': conv.kgToLbs, 'kg_lb': conv.kgToLbs, '킬로파운드': conv.kgToLbs,
    'lb2kg': conv.lbsToKg, 'lb_kg': conv.lbsToKg, '파운드킬로': conv.lbsToKg,
    'gb2mb': conv.gbToMb, '기가메가': conv.gbToMb,

    // Number Theory / 정수론
    'prime': num.isPrime, '소수': num.isPrime, 'is_prime': num.isPrime,
    'gcd': num.gcd, '최대공약수': num.gcd,
    'lcm': num.lcm, '최소공배수': num.lcm,
    'fibo': num.fibonacci, '피보나치': num.fibonacci,

    // Matrix / 행렬
    'mat_add': mat.matAdd, '행렬합': mat.matAdd,
    'mat_mult': mat.matMult, '행렬곱': mat.matMult,
    'transpose': mat.transpose, '전치행렬': mat.transpose,
    'det': mat.det2x2, '행렬식': mat.det2x2,

    // Random / 랜덤
    'rand': rand.randInt, '랜덤정수': rand.randInt, 'randint': rand.randInt,
    'rand_f': rand.randFloat, '랜덤실수': rand.randFloat,
    'pick': rand.pick, '뽑기': rand.pick, 'choice': rand.pick,
    'dice': rand.dice, '주사위': rand.dice,
    'coin': rand.coinFlip, '동전': rand.coinFlip,

    // Date / 날짜
    'diff_days': dt.diffDays, '날짜차이': dt.diffDays, 'dday': dt.diffDays,
    'add_days': dt.addDays, '날짜더하기': dt.addDays,
    'leap': dt.isLeapYear, '윤년': dt.isLeapYear,
    'now': dt.now, '현재시간': dt.now,

    // Security / 보안
    'sha256': sec.sha256, '해시': sec.sha256, 'hash': sec.sha256,

    // String Math / 문자열 수학
    'leven': str.levenshtein, '편집거리': str.levenshtein, 'levenshtein': str.levenshtein,
    'hamming': str.hamming, '해밍거리': str.hamming,

    // Logic / 논리
    'and': logic.and, '논리곱': logic.and,
    'or': logic.or, '논리합': logic.or,
    'xor': logic.xor, '배타적논리합': logic.xor,
    'not': logic.not, '논리부정': logic.not,
    'nand': logic.nand, '낸드': logic.nand,
    'nor': logic.nor, '노어': logic.nor
};

/**
 * Executes a function by its semantic name
 * 의미 기반 이름으로 함수를 실행합니다.
 * @param {string} command 
 * @param  {...any} args 
 * @returns {any}
 */
export const solve = (command, ...args) => {
    const fn = Registry[command.toLowerCase()];
    if (!fn) throw new Error(`Command '${command}' not found / '${command}' 명령어를 찾을 수 없습니다.`);
    return fn(...args);
};

/**
 * Checks if a command exists
 * 명령어가 존재하는지 확인합니다.
 * @param {string} command 
 * @returns {boolean}
 */
export const exists = (command) => !!Registry[command.toLowerCase()];

/**
 * Returns all available commands
 * 사용 가능한 모든 명령어를 반환합니다.
 * @returns {string[]}
 */
export const commands = () => Object.keys(Registry);

/**
 * Quick access mapping for direct use
 * 직접 사용을 위한 빠른 접근 매핑
 */
export const q = solve;
export const 퀵 = solve;
