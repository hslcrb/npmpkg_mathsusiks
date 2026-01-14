// @ts-check
/**
 * String Math Module - Mathematical operations on strings
 * 문자열 수학 모듈 - 문자열에 대한 수학적 연산
 */

/**
 * Calculates the Levenshtein Distance between two strings
 * 두 문자열 사이의 레벤슈타인 거리(편집 거리)를 계산합니다.
 * @param {string} a 
 * @param {string} b 
 * @returns {number}
 */
export const levenshtein = (a, b) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // Increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1  // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

/**
 * Calculates the Hamming Distance (must be equal length)
 * 해밍 거리를 계산합니다 (길이가 같아야 함).
 * @param {string} a 
 * @param {string} b 
 * @returns {number}
 */
export const hamming = (a, b) => {
    if (a.length !== b.length) throw new Error("Strings must be of equal length");
    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) distance++;
    }
    return distance;
};
