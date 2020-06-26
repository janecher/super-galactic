export class Person {
  constructor(age, sport, food, smoking, alcohol) {
    this.age = age;
    this.sport = sport;
    this.food = food;
    this.smoking = smoking;
    this.alcohol = alcohol;
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
    const saturn = 29;
    return Math.floor(this.age / saturn * 100) / 100;
  }

  uranusAge() {
    const uranus = 85;
    return Math.floor(this.age / uranus * 100) / 100;
  }

  neptuneAge() {
    const neptune = 162;
    return Math.floor(this.age / neptune * 100) / 100;
  }

  plutoAge() {
    const pluto = 250;
    return Math.floor(this.age / pluto * 1000) / 1000;
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