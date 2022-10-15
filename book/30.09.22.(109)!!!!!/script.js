"use strict";

let month = 1;

if (month == 12 || (month == 1 && month == 2)) {
  console.log("the winter");
} else if (month > 3 && month < 6) {
  console.log("the spring");
} else if (month > 5 || month < 9) {
  console.log("the summer");
} else {
  console.log("autumn");
}
