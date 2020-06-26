export class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    const mercury = 0.24;
    return Math.floor(this.age / mercury);
  }

  venusAge() {
    const venus = 0.62;
    return Math.floor(this.age / venus);
  }

  marsAge() {
    const mars = 1.88;
    return Math.floor(this.age / mars);
  }

  jupiterAge() {
    const jupiter = 11.86;
    return Math.floor(this.age / jupiter * 10) / 10;
  }

  saturnAge() {
    const saturn = 29.5;
    return Math.floor(this.age / saturn * 100) / 100;
  }
}