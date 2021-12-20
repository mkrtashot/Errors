function reverseString(s) {
  try {
    s = s.split("");
    s = s.reverse();
    s = s.join("");
    return s;
  } catch (err) {
    console.log(err);
    return s;
  }
}

console.log(reverseString(1234));
