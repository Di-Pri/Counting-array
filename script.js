"use strict";

window.addEventListener("DOMContentLoaded", start);

const array = [];
let counter = 0;

function start() {
  counter++;
  array.unshift(counter);
  if (array.length >= 9) {
    array.length = 9;
  }

  setTimeout(start, 1000);

  console.log(array);
}
