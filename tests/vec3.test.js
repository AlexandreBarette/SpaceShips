import { describe, test, expect } from 'vitest';
import { vec3_create, vec3_add, vec3_sub, vec3_multiplyScalar, vec3_length } from '../src/vec3.js';

describe('vec3', () => {

  test('create vector', () => {
    expect(vec3_create(1, 2, 3)).toEqual({ x: 1, y: 2, z: 3 });
  });

  test('vec3_add adds two vectors', () => {
    const a = vec3_create(1, 2, 3);
    const b = vec3_create(4, 5, 6);
    vec3_add(a, b);
    expect(a).toEqual({ x: 5, y: 7, z: 9 });
  });

  test('vec3_sub subtracts vectors', () => {
    const a = vec3_create(5, 5, 5);
    const b = vec3_create(2, 3, 4);
    vec3_sub(a, b);
    expect(a).toEqual({ x: 3, y: 2, z: 1 });
  });

  test('vec3_multiplyScalar multiplies vector by number', () => {
    const v = vec3_create(1, 2, 3);
    vec3_multiplyScalar(v, 2);
    expect(v).toEqual({ x: 2, y: 4, z: 6 });
  });

  test('vec3_length computes vector length', () => {
    const v = vec3_create(3, 4, 0);
    expect(vec3_length(v)).toBe(5);
  });
});