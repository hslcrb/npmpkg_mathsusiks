// @ts-check
/**
 * Random & Probability Module
 * 확률 및 랜덤 모듈
 */

/**
 * Generates a random integer between min and max (inclusive)
 * min과 max 사이의 정수 난수를 생성합니다 (포함).
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Generates a random float between min and max
 * min과 max 사이의 실수 난수를 생성합니다.
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const randFloat = (min, max) => Math.random() * (max - min) + min;

/**
 * Picks a random element from an array
 * 배열에서 무작위 요소를 선택합니다.
 * @template T
 * @param {T[]} arr 
 * @returns {T}
 */
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Rolls a dice with a given number of sides (default 6)
 * n면체 주사위를 굴립니다 (기본 6).
 * @param {number} sides 
 * @returns {number}
 */
export const dice = (sides = 6) => randInt(1, sides);

/**
 * Flips a coin
 * 동전을 던집니다 ('Heads' 또는 'Tails' 반환).
 * @returns {string}
 */
export const coinFlip = () => Math.random() < 0.5 ? "Heads" : "Tails";
