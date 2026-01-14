// @ts-check
/**
 * Trigonometry Module - Trigonometric calculations
 * 삼각함수 모듈 - 삼각함수 및 관련 계산
 */

import { PI } from './constants.js';

/**
 * Degrees to Radians
 * 도(degree)를 라디안으로 변환합니다.
 * @param {number} deg 
 * @returns {number}
 */
export const degToRad = (deg) => deg * (PI / 180);

/**
 * Radians to Degrees
 * 라디안을 도(degree)로 변환합니다.
 * @param {number} rad 
 * @returns {number}
 */
export const radToDeg = (rad) => rad * (180 / PI);

/**
 * Sine of an angle (in degrees)
 * 각도(도)의 사인값을 계산합니다.
 * @param {number} deg 
 * @returns {number}
 */
export const sin = (deg) => Math.sin(degToRad(deg));

/**
 * Cosine of an angle (in degrees)
 * 각도(도)의 코사인값을 계산합니다.
 * @param {number} deg 
 * @returns {number}
 */
export const cos = (deg) => Math.cos(degToRad(deg));

/**
 * Tangent of an angle (in degrees)
 * 각도(도)의 탄젠트값을 계산합니다.
 * @param {number} deg 
 * @returns {number}
 */
export const tan = (deg) => Math.tan(degToRad(deg));
