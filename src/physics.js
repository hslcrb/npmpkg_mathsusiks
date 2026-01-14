// @ts-check
/**
 * Physics Module - Classical and Modern Physics formulas
 * 물리학 모듈 - 고전 및 현대 물리학 공식
 */

import { G, g, C } from './constants.js';

/**
 * Newton's Second Law: F = m * a
 * 뉴턴의 제2법칙: 힘을 계산합니다.
 * @param {number} mass 
 * @param {number} acceleration 
 * @returns {number}
 */
export const force = (mass, acceleration) => mass * acceleration;

/**
 * Kinetic Energy: Ek = 0.5 * m * v^2
 * 운동 에너지: 운동 에너지를 계산합니다.
 * @param {number} mass 
 * @param {number} velocity 
 * @returns {number}
 */
export const kineticEnergy = (mass, velocity) => 0.5 * mass * velocity * velocity;

/**
 * Potential Energy (Earth): Ep = m * g * h
 * 위치 에너지 (지구): 중력 위치 에너지를 계산합니다.
 * @param {number} mass 
 * @param {number} height 
 * @returns {number}
 */
export const potentialEnergy = (mass, height) => mass * g * height;

/**
 * Einstein's Mass-Energy Equivalence: E = m * c^2
 * 질량-에너지 등가성: 아인슈타인의 공식을 계산합니다.
 * @param {number} mass 
 * @returns {number}
 */
export const massEnergy = (mass) => mass * C * C;

/**
 * Universal Gravitation: F = G * (m1 * m2) / r^2
 * 만유인력의 법칙: 두 물체 사이의 중력을 계산합니다.
 * @param {number} m1 
 * @param {number} m2 
 * @param {number} distance (r)
 * @returns {number}
 */
export const gravitation = (m1, m2, distance) => G * (m1 * m2) / (distance * distance);

/**
 * Pressure: P = F / A
 * 압력: 면적당 힘을 계산합니다.
 * @param {number} force 
 * @param {number} area 
 * @returns {number}
 */
export const pressure = (force, area) => force / area;

/**
 * Work: W = F * d
 * 일: 이동 거리에 따른 일을 계산합니다.
 * @param {number} force 
 * @param {number} distance 
 * @returns {number}
 */
export const work = (force, distance) => force * distance;

/**
 * Power: P = W / t
 * 일률: 단위 시간당 수행된 일을 계산합니다.
 * @param {number} work 
 * @param {number} time 
 * @returns {number}
 */
export const power = (work, time) => work / time;
