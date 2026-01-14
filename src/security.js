// @ts-check
/**
 * Security Module - Cryptography and Hashing
 * 보안 모듈 - 암호화 및 해싱
 */

import { createHash } from 'crypto';

/**
 * Generates a SHA-256 hash of the input
 * 입력값의 SHA-256 해시를 생성합니다.
 * @param {string} content 
 * @returns {string} (Hexadecimal)
 */
export const sha256 = (content) => {
    return createHash('sha256').update(String(content)).digest('hex');
};
