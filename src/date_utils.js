// @ts-check
/**
 * Date & Time Module
 * 날짜 및 시간 모듈
 */

/**
 * Calculates the difference in days between two dates
 * 두 날짜 사이의 일수 차이를 계산합니다.
 * @param {Date | string} d1 
 * @param {Date | string} d2 
 * @returns {number}
 */
export const diffDays = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Adds days to a date
 * 날짜에 일수를 더합니다.
 * @param {Date | string} date 
 * @param {number} days 
 * @returns {string} (YYYY-MM-DD)
 */
export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
};

/**
 * Checks if a year is a leap year
 * 윤년인지 확인합니다.
 * @param {number} year 
 * @returns {boolean}
 */
export const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

/**
 * Gets the current timestamp (Unix)
 * 현재 유닉스 타임스탬프를 반환합니다.
 * @returns {number}
 */
export const now = () => Date.now();
