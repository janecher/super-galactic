export class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    const mercury = 0.24;
    return Math.floor(this.age / mercury);
  }
}