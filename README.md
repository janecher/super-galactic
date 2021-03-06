# Super Galactic Age Calculator

#### App for calculating user age on different planets, 06/26/2020

#### By _**Evgeniya Chernaya**_

## Description

Web app for calculating user's solar system age, depends on the planet. Calculate the user’s life expectancy, depends on user lifestyle.

<img src="planets.png"/><br>

### Specification

| Behavior | Input | Output|
|----------|-------|-------|
| Create Person class object with property age | let person = new Person(age);  | person {this.age = age} |
| Calculate person age in Mercury years | age = 34 | mercuryAge = 141 |
| Calculate person age in Venus years | age = 34 | venusAge = 54 |
| Calculate person age in Mars years | age = 34 | marsAge = 18 |
| Calculate person age in Jupiter years | age = 34 | jupiterAge = 2.8 |
| Calculate person age in Saturn years | age = 34 | saturnAge = 1.17 |
| Calculate person age in Uranus years | age = 34 | uranusAge = 0.4 |
| Calculate person age in Neptune years | age = 34 | neptuneAge = 0.2 | 
| Calculate person age in Pluto years | age = 34 | plutoAge = 0.136 | 
| Create Person class object with lifestyles properties | let person = new Person(age, sport, food, smoking, alcohol);  | person {34, 3, "middle", false, false} |
| Calculate time left for person on Earth based on person lifestyle | let person = new Person(34, 3, "middle", false, false);  | 41 |
| Calculate age of person on each planet in one function | let person = new Person(34);  | mercuryAge = 141, venusAge = 54, marsAge = 18, jupiterAge = 2.8, saturnAge = 1.17, uranusAge = 0.4, neptuneAge = 0.2, plutoAge = 0.136 |
| Calculate time left for person on each Planet based on person lifestyle | let person = new Person(34, 3, "middle", false, false);  | timeLeftMercury = 170, timeLeftVenus = 66, timeLeftMars = 21, this.timeLeftJupiter = 3.4, timeLeftSaturn = 1.41, timeLeftUranus = 0.48, timeLeftNeptune = 0.25, timeLeftPluto = 0.164; |
| Check if a user has already surpassed the average life expectancy | -5 | true |

<img src="form.png"/><br>

## Setup/Installation Requirements

* Clone the repository to your desired directory (git clone )
* Do "npm install", then "npm run build" in the terminal
* Do "npm run start" in the terminal to see the result in browser

## Known Bugs

_No known bags_

## Support and contact details

Contact me at _evgenya.chernaya@gmail.com_

## Technologies Used

  * HTML
  * CSS
  * JavaScript
  * JQuery
  * Bootstrap
  * Webpack
  * Jest

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**