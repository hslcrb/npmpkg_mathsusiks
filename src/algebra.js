// @ts-check
/**
 * Algebra Module - Advanced algebraic formulas
 * 대수학 모듈 - 고급 대수학 공식
 */

/**
 * Factorial of a number
 * 팩토리얼(계승)을 계산합니다.
 * @param {number} n 
 * @returns {number}
 */
export const factorial = (n) => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
};

/**
 * Permutations: nPr = n! / (n - r)!
 * 순열: 서로 다른 n개에서 r개를 택하여 일렬로 나열하는 경우의 수
 * @param {number} n 
 * @param {number} r 
 * @returns {number}
 */
export const permutation = (n, r) => factorial(n) / factorial(n - r);

/**
 * Combinations: nCr = n! / (r! * (n - r)!)
 * 조합: 서로 다른 n개에서 r개를 택하는 경우의 수
 * @param {number} n 
 * @param {number} r 
 * @returns {number}
 */
export const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * Quadratic Formula: Returns both roots [x1, x2]
 * 이차 방정식의 근의 공식: [x1, x2] 두 근을 반환합니다.
 * ax^2 + bx + c = 0
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number[]}
 */
export const quadratic = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return [];
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
};
