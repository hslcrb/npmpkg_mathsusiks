// @ts-check
/**
 * Conversion Module - Unit conversions
 * 변환 모듈 - 단위 변환
 */

// Length / 길이
/**
 * Converts Kilometers to Miles
 * @param {number} km 
 * @returns {number}
 */
export const kmToMiles = (km) => km * 0.621371;

/**
 * Converts Miles to Kilometers
 * @param {number} miles 
 * @returns {number}
 */
export const milesToKm = (miles) => miles * 1.60934;

/**
 * Converts Centimeters to Inches
 * @param {number} cm 
 * @returns {number}
 */
export const cmToInch = (cm) => cm * 0.393701;

/**
 * Converts Inches to Centimeters
 * @param {number} inch 
 * @returns {number}
 */
export const inchToCm = (inch) => inch * 2.54;

// Weight / 무게
/**
 * Converts Kilograms to Pounds
 * @param {number} kg 
 * @returns {number}
 */
export const kgToLbs = (kg) => kg * 2.20462;

/**
 * Converts Pounds to Kilograms
 * @param {number} lbs 
 * @returns {number}
 */
export const lbsToKg = (lbs) => lbs * 0.453592;

// Temperature / 온도
/**
 * Converts Celsius to Fahrenheit
 * @param {number} c 
 * @returns {number}
 */
export const celsiusToFahrenheit = (c) => (c * 9 / 5) + 32;

/**
 * Converts Fahrenheit to Celsius
 * @param {number} f 
 * @returns {number}
 */
export const fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;

/**
 * Converts Celsius to Kelvin
 * @param {number} c 
 * @returns {number}
 */
export const celsiusToKelvin = (c) => c + 273.15;

/**
 * Converts Kelvin to Celsius
 * @param {number} k 
 * @returns {number}
 */
export const kelvinToCelsius = (k) => k - 273.15;

// Data Storage / 데이터
/**
 * Converts Gigabytes to Megabytes
 * @param {number} gb 
 * @returns {number}
 */
export const gbToMb = (gb) => gb * 1024;

/**
 * Converts Megabytes to Gigabytes
 * @param {number} mb 
 * @returns {number}
 */
export const mbToGb = (mb) => mb / 1024;

/**
 * Converts Terabytes to Gigabytes
 * @param {number} tb 
 * @returns {number}
 */
export const tbToGb = (tb) => tb * 1024;
