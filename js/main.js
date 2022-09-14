/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

const dayOfWeek = new Date().toLocaleString(
  'default', {weekday: 'long'}
);


var time = new Date();
var currentTime = time.getHours() % 12+":"+time.getMinutes()+":"+ time.getSeconds();
var am_pm = time.getHours() >= 12 ? "PM" : "AM";


document.getElementById("answer1").innerHTML = "Today is " + dayOfWeek + "<br />" + currentTime + " " + am_pm;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/
const month = new Date().toLocaleString(
    'default', {month: '2-digit'}
  );
const day = new Date().toLocaleString(
    'default', {day: '2-digit'}
  );
const year = new Date().toLocaleString(
    'default', {year: '2-digit'}
  );


document.getElementById("answer2").innerHTML = month + "-" + day + "-" + year + "<br />" + month + "/" + day + "/" + year + "<br />" + day + "/" + month + "/" + year + "<br />";

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

function myFunction() {
    var text = document.documentElement.innerHTML;
    document.getElementById("answer3").innerText = text;
}
    



//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//

$(document).ready(function() {
  'use strict';
  console.log('main.js loaded');

  paper.install(window);
  paper.setup(document.getElementById('main-canvas'));

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';

  var tool = new Tool();

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  };
  
  paper.view.draw();
})


  




// adapt from Learning Javascript Ethan Brown Chapter 1
