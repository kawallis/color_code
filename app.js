'use strict';
var header = document.getElementById('maincolor');
var colorone = document.getElementById('colorone');
var colortwo = document.getElementById('colortwo');
var colorthree = document.getElementById('colorthree');
var colorfour = document.getElementById('colorfour');
var colorfive = document.getElementById('colorfive');
var colorsix = document.getElementById('colorsix');
var colorblocks_arr = [colorone, colortwo, colorthree,
  colorfour, colorfive, colorsix];
var colors_rgb = [];
var start = document.getElementById('start');
var winner = '';

start.addEventListener('click', getRandomColor);
function getRandomColor () {
  for (var b = 0; b < 6; b++) {
    var min = 1;
    var max = 250;
    var color_arr = [];
    for (var i = 0; i < 3; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      var number = Math.floor(Math.random() * (max - min)) + min;
      color_arr.push(number);
    }
    colors_rgb.push(color_arr);
  }
  makeColors();
}
// header.textContent = 'RGB(' + color_arr.toString() + ')';
function makeColors () {
  var win_color = colors_rgb[Math.floor(Math.random() * colors_rgb.length)];
  header.textContent = 'rgb(' + win_color + ')';
  for (var i = 0; i < colorblocks_arr.length; i++) {
    colorblocks_arr[i].style.backgroundColor = 'rgb(' + colors_rgb[i] + ')';
  }
}

for (var i = 0; i < colorblocks_arr.length; i++) {
  colorblocks_arr[i].addEventListener('click', check);

  function check () {
    var winner = header.textContent;
    var maybs_winner = event.target.style.backgroundColor.split(' ').join('');
    console.log(winner);
    console.log(maybs_winner);
    if (maybs_winner == winner) {
        alert('Wow you won!!');
    }else {
        alert('keep playing guess again');
    }
  }
}
