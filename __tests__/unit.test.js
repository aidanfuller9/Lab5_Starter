// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber (true)
test('Checks 123-456-7890 to be correct', () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
});

// isPhoneNumber (true)
test('Checks (123)456-7890 to be correct', () => {
    expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

// isPhoneNumber (false)
test('Checks 56-7890 to be incorrect', () => {
    expect(isPhoneNumber("56-7890")).toBe(false);
});

// isEmail (true)
test('is aifuller@ucsd.edu a valid email', () => {
  expect(isEmail("aifuller@ucsd.edu")).toBe(true);
});


//isEmail (false)
test('is ai.fuller@ucsd.edu a valid email', () => {
  expect(isEmail("ai.fuller@ucsd.edu")).toBe(false);
});

// isStrongPassword (true)
test('is iL0v3Pr0gr4mming a strong password', () => {
  expect(isStrongPassword("iL0v3C0ding")).toBe(true);
});


// isStrongPassword (false)
test('is 1lovecoding a strong password', () => {
  expect(isStrongPassword("1lovecoding")).toBe(false);
});

// isDate (true)
test('is 05/04/2026 a valid date', () => {
  expect(isDate("05/04/2026")).toBe(true);
});


// isDate (false)
test('is 007/04/2006 a valid date', () => {
  expect(isDate("007/04/2006")).toBe(false);
});