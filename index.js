function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return [...string].map((letter, i) => string[string.length - 1 - i]).join('');
}

const calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  multiply: (n1, n2) => n1 * n2,
  divide: (n1, n2) => n1 / n2,
};

function caesar(string, shift) {
  return [...string]
    .map((letter, index) => {
      let letterCode = string.charCodeAt(index);
      let letterIsUpper = letterCode >= 65 && letterCode <= 90;
      let newLetterCode = letterCode;

      if (letterIsUpper) letterCode += 32;

      //Working with lowercases
      if (letterCode >= 97 && letterCode <= 122) {
        newLetterCode =
          letterCode + shift > 122
            ? letterCode + shift - 26
            : letterCode + shift;
      }

      if (letterIsUpper) return String.fromCharCode(newLetterCode - 32);

      return String.fromCharCode(newLetterCode);
    })
    .join('');
}

function arrayAnalisis(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesar,
  arrayAnalisis,
};
