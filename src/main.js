import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Person } from './person.js';

function showInfo(person) {
  let timeLeft = person.timeLeft();
  let mercuryInfo = `<h4>Mercury</h4><p>Age: ${person.mercury(person.age)}</p>`;
  let venusInfo = `<h4>Venus</h4><p>Age: ${person.venus(person.age)}</p>`;
  let marsInfo = `<h4>Mars</h4><p>Age: ${person.mars(person.age)}</p>`;
  let jupiterInfo = `<h4>Jupiter</h4><p>Age: ${person.jupiter(person.age)}</p>`;
  let saturnInfo = `<h4>Saturn</h4><p>Age: ${person.saturn(person.age)}</p>`;
  let uranusInfo = `<h4>Uranus</h4><p>Age: ${person.uranus(person.age)}</p>`;
  let neptuneInfo = `<h4>Neptune</h4><p>Age: ${person.neptune(person.age)}</p>`;
  let plutoInfo = `<h4>Pluto</h4><p>Age: ${person.pluto(person.age)}</p>`;
  if(isNaN(person.sport)) {
    $(".earth-time-left").hide();
  } else {
    if(person.isLifeExpectancyPassed(timeLeft)) {
      $(".earth-time-left").html(`<span>Hm... You should already left Planet Earth <span id="earth-time-left">${Math.abs(timeLeft)}</span> years ago</span>`);
      $(".earth-time-left").show();
    } else {
      $(".earth-time-left").html(`<span>Your lifestyle will allow you to stay on Earth for <span id="earth-time-left">${timeLeft}</span> years</span>`);
      mercuryInfo += `<p>Time left: ${person.mercury(timeLeft)}</p>`;
      venusInfo += `<p>Time left: ${person.venus(timeLeft)}</p>`;
      marsInfo += `<p>Time left: ${person.mars(timeLeft)}</p>`;
      jupiterInfo += `<p>Time left: ${person.jupiter(timeLeft)}</p>`;
      saturnInfo += `<p>Time left: ${person.saturn(timeLeft)}</p>`;
      uranusInfo += `<p>Time left: ${person.uranus(timeLeft)}</p>`;
      neptuneInfo += `<p>Time left: ${person.neptune(timeLeft)}</p>`;
      plutoInfo += `<p>Time left: ${person.pluto(timeLeft)}</p>`;
      $(".earth-time-left").show();
    }
  }
  $(".mercury").html(mercuryInfo);
  $(".venus").html(venusInfo);
  $(".mars").html(marsInfo);
  $(".jupiter").html(jupiterInfo);
  $(".saturn").html(saturnInfo);
  $(".uranus").html(uranusInfo);
  $(".neptune").html(neptuneInfo);
  $(".pluto").html(plutoInfo);
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let age = parseInt($("#age").val());
    let sport = parseInt($("#sport").val());
    let food = $("#food").val();
    let smoking;
    let alcohol;
    if($("input:radio[name=smoking]:checked").val() === "no") {
      smoking = false;
    } else {
      smoking = true;
    }
    if($("input:radio[name=alcohol]:checked").val() === "no") {
      alcohol = false;
    } else {
      alcohol = true;
    }
    let person = new Person(age, sport, food, smoking, alcohol);
    $("#earth-age").text(person.age);
    showInfo(person);
    $("#age").val("");
    $("#sport").val("");
    $(".user-input").hide();
    $(".answer").show();
  });
  $("#back").click(function(){
    $(".user-input").show();
    $(".answer").hide();
  });
});