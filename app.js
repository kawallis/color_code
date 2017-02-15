'use strict';
var header = document.getElementById('maincolor');

var play_again = document.getElementById('clicker');

play_again.addEventListener('click', getRandomColor);
function getRandomColor () {
  var min = 1;
  var max = 250;
  var color_arr = [];
  for (var i = 0; i < 3; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min)) + min;
    color_arr.push(number);
  }
  header.textContent = 'RGB(' + color_arr.toString() + ')';
}
