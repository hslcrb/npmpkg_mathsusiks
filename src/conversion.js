// @ts-check
/**
 * Conversion Module - Unit conversions
 * 변환 모듈 - 단위 변환
 */

// Length / 길이
export const kmToMiles = (km) => km * 0.621371;
export const milesToKm = (miles) => miles * 1.60934;
export const cmToInch = (cm) => cm * 0.393701;
export const inchToCm = (inch) => inch * 2.54;

// Weight / 무게
export const kgToLbs = (kg) => kg * 2.20462;
export const lbsToKg = (lbs) => lbs * 0.453592;

// Temperature / 온도
export const celsiusToFahrenheit = (c) => (c * 9 / 5) + 32;
export const fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;
export const celsiusToKelvin = (c) => c + 273.15;
export const kelvinToCelsius = (k) => k - 273.15;

// Data Storage / 데이터
export const gbToMb = (gb) => gb * 1024;
export const mbToGb = (mb) => mb / 1024;
export const tbToGb = (tb) => tb * 1024;
