// @ts-check
/**
 * Science Module - Chemistry, Biology, and health formulas
 * 과학 모듈 - 화학, 생물학 및 건강 관련 공식
 */

/**
 * Body Mass Index (BMI)
 * 체질량 지수(BMI)를 계산합니다.
 * @param {number} weight (kg)
 * @param {number} height (m)
 * @returns {number}
 */
export const bmi = (weight, height) => weight / (height * height);

/**
 * Ideal Gas Law: P = (nRT) / V
 * 이상 기체 상태 방정식: 압력을 계산합니다.
 * @param {number} n (moles)
 * @param {number} T (Kelvin)
 * @param {number} V (Volume)
 * @param {number} R (Gas Constant, default: 8.314)
 * @returns {number}
 */
export const idealGasP = (n, T, V, R = 8.314) => (n * R * T) / V;

/**
 * Molarity: M = moles / Liters
 * 몰 농도를 계산합니다.
 * @param {number} moles 
 * @param {number} liters 
 * @returns {number}
 */
export const molarity = (moles, liters) => moles / liters;

/**
 * Reynolds Number: Re = (rho * v * L) / mu
 * 레이놀즈 수를 계산합니다. (유체 역학)
 * @param {number} density (rho)
 * @param {number} velocity (v)
 * @param {number} length (L)
 * @param {number} viscosity (mu)
 * @returns {number}
 */
export const reynoldsNumber = (density, velocity, length, viscosity) =>
    (density * velocity * length) / viscosity;
