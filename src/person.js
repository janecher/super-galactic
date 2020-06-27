export class Person {
  constructor(age, sport, food, smoking, alcohol) {
    this.age = age;
    this.sport = sport;
    this.food = food;
    this.smoking = smoking;
    this.alcohol = alcohol;
  }

  planetAge(coefficientPlanet, coefficientRound, age) {
    return Math.floor(age / coefficientPlanet * coefficientRound) / coefficientRound;
  }

  mercury(age) {
    return this.planetAge(0.24, 1, age);
  }

  venus(age) {
    return this.planetAge(0.62, 1, age);
  }

  mars(age) {
    return this.planetAge(1.88, 1, age);
  }

  jupiter(age) {
    return this.planetAge(11.86, 10, age);
  }

  saturn(age) {
    return this.planetAge(29, 100, age);
  }

  uranus(age) {
    return this.planetAge(85, 100, age);
  }

  neptune(age) {
    return this.planetAge(162, 100, age);
  }

  pluto(age) {
    return this.planetAge(250, 1000, age);
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
}