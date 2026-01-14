// @ts-check
/**
 * Finance Module - Financial and economic formulas
 * 금융 모듈 - 재무 및 경제 관련 공식
 */

/**
 * Simple Interest: A = P(1 + rt)
 * 단리: 단순 이자를 계산합니다.
 * @param {number} principal (원금)
 * @param {number} rate (이율, decimal)
 * @param {number} time (기간)
 * @returns {number}
 */
export const simpleInterest = (principal, rate, time) => principal * (1 + rate * time);

/**
 * Compound Interest: A = P(1 + r/n)^(nt)
 * 복리: 복리 이자를 계산합니다.
 * @param {number} principal 
 * @param {number} rate 
 * @param {number} timesPerYear (n)
 * @param {number} years (t)
 * @returns {number}
 */
export const compoundInterest = (principal, rate, timesPerYear, years) =>
    principal * Math.pow((1 + rate / timesPerYear), (timesPerYear * years));

/**
 * Future Value of Annuity: FV = PMT * [((1 + r)^n - 1) / r]
 * 연금의 미래 가치: 일정 기간 납입 후의 가치를 계산합니다.
 * @param {number} pmt (정기 납입금)
 * @param {number} rate (이율 per period)
 * @param {number} periods (n)
 * @returns {number}
 */
export const futureValueAnnuity = (pmt, rate, periods) =>
    pmt * (Math.pow(1 + rate, periods) - 1) / rate;

/**
 * Compound Annual Growth Rate (CAGR)
 * 연평균 성장률(CAGR)을 계산합니다.
 * @param {number} beginningValue 
 * @param {number} endingValue 
 * @param {number} years 
 * @returns {number}
 */
export const cagr = (beginningValue, endingValue, years) =>
    Math.pow(endingValue / beginningValue, 1 / years) - 1;

/**
 * Return on Investment (ROI)
 * 투자 수익률(ROI)을 계산합니다.
 * @param {number} gain 
 * @param {number} cost 
 * @returns {number}
 */
export const roi = (gain, cost) => (gain - cost) / cost;
