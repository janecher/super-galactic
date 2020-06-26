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
    const mars = 11.86;
    return Math.floor(this.age / mars * 10) / 10;
  }
}