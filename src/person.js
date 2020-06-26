export class Person {
  constructor(age, sport, food, smoking, alcohol) {
    this.age = age;
    this.sport = sport;
    this.food = food;
    this.smoking = smoking;
    this.alcohol = alcohol;
  }

  mercury(age) {
    const mercury = 0.24;
    return Math.floor(age / mercury);
  }

  mercuryAge() {
    return this.mercury(this.age);
  }

  venus(age) {
    const venus = 0.62;
    return Math.floor(age / venus);
  }

  venusAge() {
    return this.venus(this.age);
  }

  mars(age) {
    const mars = 1.88;
    return Math.floor(age / mars);
  }

  marsAge() {
    return this.mars(this.age);
  }

  jupiter(age) {
    const jupiter = 11.86;
    return Math.floor(age / jupiter * 10) / 10;
  }

  jupiterAge() {
    return this.jupiter(this.age);
  }

  saturn(age) {
    const saturn = 29;
    return Math.floor(age / saturn * 100) / 100;
  }

  saturnAge() {
    return this.saturn(this.age);
  }

  uranus(age) {
    const uranus = 85;
    return Math.floor(age / uranus * 100) / 100;
  }

  uranusAge() {
    return this.uranus(this.age);
  }

  neptune(age) {
    const neptune = 162;
    return Math.floor(age / neptune * 100) / 100;
  }

  neptuneAge() {
    return this.neptune(this.age);
  }

  pluto(age) {
    const pluto = 250;
    return Math.floor(age / pluto * 1000) / 1000;
  }

  plutoAge() {
    return this.pluto(this.age);
  }

  timeLeft() {
    let average = 70;
    if(this.sport === 0) {
      average -= 5;
    } else if (this.sport <= 3) {
      average += 5;
    } else if (this.sport > 3) {
      average += 10;
    }
    if(this.food === "healthy") {
      average += 10;
    } else if (this.food === "unhealthy") {
      average -= 10;
    }
    if (this.smoking === true) {
      average -= 7;
    }
    if (this.alcohol === true) {
      average -= 7;
    }
    return average - this.age;
  }

}