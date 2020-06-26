import { Person } from './../src/person.js';

describe('create Person object', () => {

  test('should return object with age property', () => {
    const person = new Person(34);
    expect(person.age).toBe(34);
  });

  test('should return object with all Person properties', () => {
    const person = new Person(34, 3, "middle", false, false);
    expect(person).toMatchObject({
      age: 34,
      sport: 3,
      food: "middle",
      smoking: false,
      alcohol: false
    });
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

  test('should calculate Saturn age', () => {
    const person = new Person(34);
    expect(person.saturnAge()).toEqual(1.17);
  });

  test('should calculate Uranus age', () => {
    const person = new Person(34);
    expect(person.uranusAge()).toEqual(0.4);
  });

  test('should calculate Neptune age', () => {
    const person = new Person(34);
    expect(person.neptuneAge()).toEqual(0.2);
  });

  test('should calculate Pluto age', () => {
    const person = new Person(34);
    expect(person.plutoAge()).toEqual(0.136);
  });
});