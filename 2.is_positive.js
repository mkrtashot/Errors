"use strict";

function isPositive(a) {
  try {
    if (a > 0) {
      return "Yes";
    } else if (a === 0) {
      throw new Error("Zero Error");
    } else if (a < 0) {
      throw new Error("Negative Error");
    }
  } catch (err) {
    return err;
  }
}

console.log(isPositive(-212));
