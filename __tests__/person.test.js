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

  test('should calculate Venus age', () => {
    const person = new Person(34);
    expect(person.venusAge()).toEqual(54);
  });

  test('should calculate Mars age', () => {
    const person = new Person(34);
    expect(person.marsAge()).toEqual(18);
  });

  test('should calculate Jupiter age', () => {
    const person = new Person(34);
    expect(person.jupiterAge()).toEqual(2.8);
  });
});