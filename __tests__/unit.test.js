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

// isPhoneNumber (false)
test('Checks 556a-7890 to be incorrect', () => {
    expect(isPhoneNumber("556a-7890")).toBe(false);
});

// isEmail (true)
test('is aifuller@ucsd.edu a valid email', () => {
  expect(isEmail("aifuller@ucsd.edu")).toBe(true);
});

// isEmail (true)
test('is a@a.aa a valid email', () => {
  expect(isEmail("a@a.aa")).toBe(true);
});

//isEmail (false)
test('is ai.fuller@ucsd.edu a valid email', () => {
  expect(isEmail("ai.fuller@ucsd.edu")).toBe(false);
});

//isEmail (false)
test('is a@aa a valid email', () => {
  expect(isEmail("a@aa")).toBe(false);
});

// isStrongPassword (true)
test('is iL0v3Pr0gr4mming a strong password', () => {
  expect(isStrongPassword("iL0v3C0ding")).toBe(true);
});

// isStrongPassword (true)
test('is aaaa a strong password', () => {
  expect(isStrongPassword("aaaa")).toBe(true);
});

// isStrongPassword (false)
test('is 1lovecoding a strong password', () => {
  expect(isStrongPassword("1lovecoding")).toBe(false);
});

// isStrongPassword (false)
test('is aaaaaaaaaaaaaaaaaaaaaaaaaa a strong password', () => {
  expect(isStrongPassword("aaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
});

// isDate (true)
test('is 05/04/2026 a valid date', () => {
  expect(isDate("05/04/2026")).toBe(true);
});

// isDate (true)
test('is 5/4/2026 a valid date', () => {
  expect(isDate("5/4/2026")).toBe(true);
});

// isDate (false)
test('is 007/04/2006 a valid date', () => {
  expect(isDate("007/04/2006")).toBe(false);
});

// isDate (false)
test('is 007/04/206 a valid date', () => {
  expect(isDate("007/04/206")).toBe(false);
});

// isHexColor (true)
test('is 00ff55 a HexColor', () => {
  expect(isHexColor("00ff55")).toBe(true);
});

// isHexColor (true)
test('is 00f a HexColor', () => {
  expect(isHexColor("00f")).toBe(true);
});

// isHexColor (false)
test('is 00hf55 a HexColor', () => {
  expect(isHexColor("00hf55")).toBe(false);
});

// isHexColor (false)
test('is 00ff5 a HexColor', () => {
  expect(isHexColor("00ff5")).toBe(false);
});