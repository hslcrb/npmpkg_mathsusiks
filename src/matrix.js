// @ts-check
/**
 * Matrix Module - Linear Algebra
 * 행렬 모듈 - 선형 대수
 */

/**
 * Adds two matrices
 * 두 행렬을 더합니다.
 * @param {number[][]} A 
 * @param {number[][]} B 
 * @returns {number[][]}
 */
export const matAdd = (A, B) => {
    return A.map((row, i) => row.map((val, j) => val + B[i][j]));
};

/**
 * Subtracts matrix B from A
 * 행렬 A에서 B를 뺍니다.
 * @param {number[][]} A 
 * @param {number[][]} B 
 * @returns {number[][]}
 */
export const matSub = (A, B) => {
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
};

/**
 * Transposes a matrix
 * 행렬을 전치합니다 (행과 열을 바꿈).
 * @param {number[][]} m 
 * @returns {number[][]}
 */
export const transpose = (m) => {
    return m[0].map((_, i) => m.map(row => row[i]));
};

/**
 * Multiplies two matrices
 * 두 행렬을 곱합니다.
 * @param {number[][]} A 
 * @param {number[][]} B 
 * @returns {number[][]}
 */
export const matMult = (A, B) => {
    const result = new Array(A.length).fill(0).map(() => new Array(B[0].length).fill(0));
    return result.map((row, i) => {
        return row.map((val, j) => {
            return A[i].reduce((sum, elm, k) => sum + (elm * B[k][j]), 0);
        });
    });
};

/**
 * Calculates the determinant of a 2x2 matrix
 * 2x2 행렬의 행렬식을 계산합니다.
 * @param {number[][]} m 
 * @returns {number}
 */
export const det2x2 = (m) => (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
