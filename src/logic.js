// @ts-check
/**
 * Logic Module - Boolean Algebra & Logic Gates
 * 논리 모듈 - 불 대수 및 논리 게이트
 */

/**
 * AND Gate
 * AND 게이트
 * @param {boolean|number} a 
 * @param {boolean|number} b 
 * @returns {number} (0 or 1)
 */
export const and = (a, b) => (a && b) ? 1 : 0;

/**
 * OR Gate
 * OR 게이트
 * @param {boolean|number} a 
 * @param {boolean|number} b 
 * @returns {number} (0 or 1)
 */
export const or = (a, b) => (a || b) ? 1 : 0;

/**
 * XOR Gate
 * XOR 게이트
 * @param {boolean|number} a 
 * @param {boolean|number} b 
 * @returns {number} (0 or 1)
 */
export const xor = (a, b) => (!!a !== !!b) ? 1 : 0;

/**
 * NOT Gate
 * NOT 게이트
 * @param {boolean|number} a 
 * @returns {number} (0 or 1)
 */
export const not = (a) => (!a) ? 1 : 0;

/**
 * NAND Gate
 * NAND 게이트
 * @param {boolean|number} a 
 * @param {boolean|number} b 
 * @returns {number} (0 or 1)
 */
export const nand = (a, b) => (!(a && b)) ? 1 : 0;

/**
 * NOR Gate
 * NOR 게이트
 * @param {boolean|number} a 
 * @param {boolean|number} b 
 * @returns {number} (0 or 1)
 */
export const nor = (a, b) => (!(a || b)) ? 1 : 0;
