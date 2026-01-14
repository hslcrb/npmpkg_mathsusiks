// @ts-check
/**
 * MathSusiks - A versatile mathematical library
 * MathSusiks - 다목적 수학 라이브러리
 * 
 * Created by Rheehose (Rhee Creative)
 * 2008-2026
 */

import * as arithmetic from './arithmetic.js';
import * as engineering from './engineering.js';
import * as constants from './constants.js';
import * as physics from './physics.js';
import * as finance from './finance.js';
import * as quick from './quick.js';
import * as trigonometry from './trigonometry.js';
import * as algebra from './algebra.js';
import * as science from './science.js';
import * as conversion from './conversion.js';
import * as numberTheory from './number_theory.js';
import * as matrix from './matrix.js';
import * as random from './random.js';
import * as dateUtils from './date_utils.js';
import * as security from './security.js';
import * as stringMath from './string_math.js';
import * as logic from './logic.js';

/**
 * Grouped Exports / 그룹화된 내보내기
 */
export {
    arithmetic,
    engineering,
    constants,
    physics,
    finance,
    quick,
    trigonometry,
    algebra,
    science,
    conversion,
    numberTheory,
    matrix,
    random,
    dateUtils,
    security,
    stringMath,
    logic
};

/**
 * Flat Exports for convenience / 편의를 위한 평면 내보내기
 */
export const {
    add, subtract, multiply, divide, modulo, power, sqrt
} = arithmetic;

export const {
    circleArea, circumference, hypotenuse, mean, variance, stdDev,
    ohmsLawV, ohmsLawI, derivative, integrate
} = engineering;

export const {
    PI, E, C, G, g, H
} = constants;

export const {
    force, kineticEnergy, potentialEnergy, massEnergy, gravitation, pressure, work, power: physPower
} = physics;

export const {
    simpleInterest, compoundInterest, futureValueAnnuity, cagr, roi
} = finance;

export const {
    sin, cos, tan, degToRad, radToDeg
} = trigonometry;

export const {
    factorial, permutation, combination, quadratic
} = algebra;

export const {
    bmi, idealGasP, molarity, reynoldsNumber
} = science;

export const {
    kmToMiles, milesToKm, celsiusToFahrenheit, fahrenheitToCelsius, kgToLbs, lbsToKg, gbToMb
} = conversion;

export const {
    isPrime, gcd, lcm, fibonacci
} = numberTheory;

export const {
    matAdd, matSub, matMult, transpose, det2x2
} = matrix;

export const {
    randInt, randFloat, pick, dice, coinFlip
} = random;

export const {
    diffDays, addDays, isLeapYear, now
} = dateUtils;

export const {
    sha256
} = security;

export const {
    levenshtein, hamming
} = stringMath;

export const {
    and, or, xor, not, nand, nor
} = logic;

export const {
    solve, exists, commands, q, 퀵
} = quick;

/**
 * Default export as a namespace / 네임스페이스로 기본 내보내기
 */
export default {
    ...arithmetic,
    ...engineering,
    ...constants,
    ...physics,
    ...finance,
    ...trigonometry,
    ...algebra,
    ...science,
    ...conversion,
    ...numberTheory,
    ...matrix,
    ...random,
    ...dateUtils,
    ...security,
    ...stringMath,
    ...logic,
    ...quick,
    arithmetic,
    engineering,
    constants,
    physics,
    finance,
    trigonometry,
    algebra,
    science,
    conversion,
    numberTheory,
    matrix,
    random,
    dateUtils,
    security,
    stringMath,
    logic,
    quick
};
