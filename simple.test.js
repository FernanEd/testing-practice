let myModule = require('./index');

let capitalize = myModule.capitalize;
let reverseString = myModule.reverseString;
const calculator = myModule.calculator;
let caesar = myModule.caesar;
let arrayAnalisis = myModule.arrayAnalisis;

test('capitalize test 1', () => {
  expect(capitalize('john')).toBe('John');
});

test('capitalize test 2', () => {
  expect(capitalize('john johnson')).toBe('John johnson');
});

test('capitalize test 3', () => {
  expect(capitalize('.Jooohn')).toBe('.Jooohn');
});

test('reverseString test 1', () => {
  expect(reverseString('john')).toBe('nhoj');
});

test('reverseString test 2', () => {
  expect(reverseString('john johnson')).toBe('nosnhoj nhoj');
});

test('reverseString test 3', () => {
  expect(reverseString('.Jooohn')).toBe('nhoooJ.');
});

test('calculator add test 1', () => {
  expect(calculator.add(1, 4)).toBe(5);
});

test('calculator add test 2', () => {
  expect(calculator.add(-2, 0.52)).toBe(-1.48);
});

test('calculator subtract test 1', () => {
  expect(calculator.subtract(1, 4)).toBe(-3);
});

test('calculator subtract test 2', () => {
  expect(calculator.subtract(2, -0.52)).toBe(2.52);
});

test('calculator multiply test 1', () => {
  expect(calculator.multiply(1, 4)).toBe(4);
});

test('calculator multiply test 2', () => {
  expect(calculator.multiply(-2, -0.52)).toBe(1.04);
});

test('calculator divide test 1', () => {
  expect(calculator.divide(1, 4)).toBe(0.25);
});

test('calculator divide test 2', () => {
  expect(calculator.divide(-8, -2)).toBe(4);
});

test('caesar test 1', () => {
  expect(caesar('the quick brown fox jumps over the lazy dog', 5)).toBe(
    'ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl'
  );
});

test('caesar test 2', () => {
  expect(caesar('the quick brown fox! jumps, over the lazy dog.', 2)).toBe(
    'vjg swkem dtqyp hqz! lworu, qxgt vjg ncba fqi.'
  );
});

test('caesar test 3', () => {
  expect(caesar('The quick brown fox jumps, over the LAZY! dog.', 7)).toBe(
    'Aol xbpjr iyvdu mve qbtwz, vcly aol SHGF! kvn.'
  );
});

test('arrayAnalisis average test 1', () => {
  expect(arrayAnalisis([1, 8, 3, 4, 2, 6])['average']).toBeCloseTo(4);
});

test('arrayAnalisis min test 1', () => {
  expect(arrayAnalisis([1, 8, 3, 4, 2, 6])['min']).toBeCloseTo(1);
});

test('arrayAnalisis max test 1', () => {
  expect(arrayAnalisis([1, 8, 3, 4, 2, 6])['max']).toBeCloseTo(8);
});

test('arrayAnalisis length test 1', () => {
  expect(arrayAnalisis([1, 8, 3, 4, 2, 6])['length']).toBeCloseTo(6);
});

test('arrayAnalisis average test 2', () => {
  expect(
    arrayAnalisis([1, 2.4, -99, 100, 3, 4, 2, 6, -2, 0.5])['average']
  ).toBeCloseTo(1.79);
});

test('arrayAnalisis min test 2', () => {
  expect(
    arrayAnalisis([1, 2.4, -99, 100, 3, 4, 2, 6, -2, 0.5])['min']
  ).toBeCloseTo(-99);
});

test('arrayAnalisis max test 2', () => {
  expect(
    arrayAnalisis([1, 2.4, -99, 100, 3, 4, 2, 6, -2, 0.5])['max']
  ).toBeCloseTo(100);
});

test('arrayAnalisis length test 2', () => {
  expect(
    arrayAnalisis([1, 2.4, -99, 100, 3, 4, 2, 6, -2, 0.5])['length']
  ).toBeCloseTo(10);
});
