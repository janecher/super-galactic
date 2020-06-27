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
    expect(person.mercury(person.age)).toEqual(141);
  });

  test('should calculate Venus age', () => {
    const person = new Person(34);
    expect(person.venus(person.age)).toEqual(54);
  });

  test('should calculate Mars age', () => {
    const person = new Person(34);
    expect(person.mars(person.age)).toEqual(18);
  });

  test('should calculate Jupiter age', () => {
    const person = new Person(34);
    expect(person.jupiter(person.age)).toEqual(2.8);
  });

  test('should calculate Saturn age', () => {
    const person = new Person(34);
    expect(person.saturn(person.age)).toEqual(1.17);
  });

  test('should calculate Uranus age', () => {
    const person = new Person(34);
    expect(person.uranus(person.age)).toEqual(0.4);
  });

  test('should calculate Neptune age', () => {
    const person = new Person(34);
    expect(person.neptune(person.age)).toEqual(0.2);
  });

  test('should calculate Pluto age', () => {
    const person = new Person(34);
    expect(person.pluto(person.age)).toEqual(0.136);
  });
});

describe('calculate time left', () => {

  test('should return number of years person left based on person lifestyle', () => {
    const person1 = new Person(34, 3, "middle", false, false);
    const person2 = new Person(25, 5, "healthy", false, false);
    const person3 = new Person(40, 0, "unhealthy", true, true);
    expect(person1.timeLeft()).toEqual(41);
    expect(person2.timeLeft()).toEqual(65);
    expect(person3.timeLeft()).toEqual(1);
  });

  test('should return number of years person left based on person lifestyle on different Planets', () => {
    const person = new Person(34, 3, "middle", false, false);
    expect(person.mercury(person.timeLeft())).toEqual(170);
    expect(person.venus(person.timeLeft())).toEqual(66);
    expect(person.mars(person.timeLeft())).toEqual(21);
    expect(person.jupiter(person.timeLeft())).toEqual(3.4);
    expect(person.saturn(person.timeLeft())).toEqual(1.41);
    expect(person.uranus(person.timeLeft())).toEqual(0.48);
    expect(person.neptune(person.timeLeft())).toEqual(0.25);
    expect(person.pluto(person.timeLeft())).toEqual(0.164);
  });

  test('should return true if user has already surpassed the average life expectancy', () => {
    const person1 = new Person(34, 3, "middle", false, false);
    const person2 = new Person(100, 3, "middle", true, false);
    const first= person1.isLifeExpectancyPassed(person1.timeLeft());
    const second = person2.isLifeExpectancyPassed(person2.timeLeft());
    expect(first).toEqual(false);
    expect(second).toEqual(true);
  });
});
