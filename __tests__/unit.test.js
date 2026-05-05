// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('Checks 123-456-7890 to be correct', () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('Checks (123)456-7890 to be correct', () => {
    expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test('Checks 56-7890 to be incorrect', () => {
    expect(isPhoneNumber("56-7890")).toBe(false);
});

test('Checks (123)456-789011 to be incorrect', () => {
    expect(isPhoneNumber("(123)456-789011")).toBe(false);
});

// isEmail
test('is aifuller@ucsd.edu a valid email', () => {
  expect(isEmail("aifuller@ucsd.edu")).toBe(true);
});

//isDate

test(' a valid email', () => {
  expect(isEmail("aifuller@ucsd.edu")).toBe(true);
});
