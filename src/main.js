import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Person } from './person.js';

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
    let timeLeft = person.timeLeft();
    if(person.isLifeExpectancyPassed(timeLeft)) {
      $(".earth-time-left").html(`<span>Hm... You should already left this Planet ${Math.abs(timeLeft)} years ago</span>`);
    } else {
      $("#earth-time-left").text(timeLeft);
    }
    $("#age").val("");
    $("#sport").val();
    $(".user-input").hide();
    $(".answer").show();
    console.log(person);
  });
});