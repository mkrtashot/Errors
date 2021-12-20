"use strict";

function reverseString(s) {
  try {
    return (s = s.split("").reverse().join(""));
  } catch (err) {
    return err;
  }
}

console.log(reverseString(121));
