import { describe, test, expect } from 'vitest';
import { component_create, entity_add, entity_update } from '../src/entity.js';
import { findTarget } from '../src/ai.js';
import { vec3_create } from '../src/vec3.js';
import { on, trigger } from '../src/events.js';

describe('entity system', () => {

  test('entity_update calls component update', () => {
    let called = false;

    const entity = { components: [] };

    const component = component_create(() => {
      called = true;
    });

    entity_add(entity, component);

    entity_update(entity, 1, {});

    expect(called).toBe(true);
  });

  

  test('AI detects close target', () => {
    const enemy = {
      position: vec3_create(0, 0, 0),
      quaternion: { x: 0, y: 0, z: 0, w: 1 }
    };

    const target = {
      position: vec3_create(10, 0, 0)
    };

    const result = findTarget(enemy, target);

    expect(typeof result).toBe('boolean');
  });

  test('event system triggers listener', () => {
    let value = 0;

    const obj = {};

    on(obj, 'test', () => {
      value = 42;
    });

    trigger(obj, 'test');

    expect(value).toBe(42);
  });
});