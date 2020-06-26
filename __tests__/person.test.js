import { Person } from './../src/person.js';

describe('create Person object', () => {
  test('should return object with age property', () => {
    const person = new Person(34);
    expect(person.age).toBe(34);
  });
});

describe('calculate person age on different planets', () => {
  test('should calculate Mercury age', () => {
    const person = new Person(34);
    expect(person.mercuryAge()).toEqual(141);
  });
});