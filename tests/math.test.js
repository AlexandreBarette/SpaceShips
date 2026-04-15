import { describe, test, expect } from 'vitest';
import { clamp, lerp, mapLinear, randFloatSpread } from '../src/math.js';

describe('Two Ships Passing In The Night', () => {

  test('randFloatSpread <= 1', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  });

  test('randFloatSpread >= -1', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  });

  test('mapLinear simple case', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBeCloseTo(3);
  });

  test('mapLinear range case', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });

  test('lerp basic', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  test('lerp negative', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
});