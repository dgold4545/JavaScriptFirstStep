"use strict";

let test1 = true;
let test2 = true;

if (test1 && test2) {
  console.log("___++++____");
} else {
  console.log("_________");
}

if (test1 || test2) {
  console.log("__+++++");
} else {
  console.log("dima diam");
}

test1 = true;
test2 = true;

if (test1 && test2) {
  console.log("yes");
} else {
  console.log("nope");
}

if (test1 && !test2) {
  console.log("yes");
} else {
  console.log("nope");
}

if (!test1 && !test2) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 && test2) {
  console.log("+++");
} else {
  console.log("---");
}

let test3 = true;

if (test1 && test2 && test3) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 || (test2 && test3)) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 || (!test2 && !test3)) {
  console.log("+++");
} else {
  console.log("---");
}
