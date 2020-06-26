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

  venus(age) {
    const venus = 0.62;
    return Math.floor(age / venus);
  }

  mars(age) {
    const mars = 1.88;
    return Math.floor(age / mars);
  }

  jupiter(age) {
    const jupiter = 11.86;
    return Math.floor(age / jupiter * 10) / 10;
  }

  saturn(age) {
    const saturn = 29;
    return Math.floor(age / saturn * 100) / 100;
  }

  uranus(age) {
    const uranus = 85;
    return Math.floor(age / uranus * 100) / 100;
  }

  neptune(age) {
    const neptune = 162;
    return Math.floor(age / neptune * 100) / 100;
  }

  pluto(age) {
    const pluto = 250;
    return Math.floor(age / pluto * 1000) / 1000;
  }

  ageOnPlanets() {
    this.mercuryAge = this.mercury(this.age);
    this.venusAge = this.venus(this.age);
    this.marsAge = this.mars(this.age);
    this.jupiterAge = this.jupiter(this.age);
    this.saturnAge = this.saturn(this.age);
    this.uranusAge = this.uranus(this.age);
    this.neptuneAge = this.neptune(this.age);
    this.plutoAge = this.pluto(this.age);
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

  isLifeExpectancyPassed(timeLeft) {
    if(timeLeft < 0) {
      return true;
    } else {
      return false;
    }
  }

  timeLeftOnPlanets() {
    let ageLeft = this.timeLeft();
    this.timeLeftMercury = this.mercury(ageLeft);
    this.timeLeftVenus = this.venus(ageLeft);
    this.timeLeftMars = this.mars(ageLeft);
    this.timeLeftJupiter = this.jupiter(ageLeft);
    this.timeLeftSaturn = this.saturn(ageLeft);
    this.timeLeftUranus = this.uranus(ageLeft);
    this.timeLeftNeptune = this.neptune(ageLeft);
    this.timeLeftPluto = this.pluto(ageLeft);
  }
}