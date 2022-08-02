const { plus, minus } = require("../src/index");

describe("addition", () => {
  test("adds positive numbers", () => {
    expect(plus(1, 3)).toBe(4);
    expect(plus(100, 3, 25)).toBe(128);
    expect(plus(1, 1, 1, 1, 1)).toBe(5);
    expect(plus(2.4, 5, 3.1)).toBe(10.5);
  });

  test("adds negative numbers", () => {
    expect(plus(-3, -5)).toBe(-8);
    expect(plus(-1, -200, -20)).toBe(-221);
    expect(plus(-1, -1, -1, -1)).toBe(-4);
    expect(plus(-2.4, -5, -3.1)).toBe(-10.5);
  });

  test("adds various numbers and zero", () => {
    expect(plus(12, -5)).toBe(7);
    expect(plus(-3, 3)).toBe(0);
    expect(plus(130, -25, 0, -5, -70, 50)).toBe(80);
    expect(plus(2, 0)).toBe(2);
  });
});

describe("subtraction", () => {
  test("subtracts positive numbers", () => {
    expect(minus(5, 3)).toBe(2);
    expect(minus(3, 5)).toBe(-2);
    expect(minus(10, 5, 3)).toBe(2);
    expect(minus(10, 25, 3)).toBe(-18);
    expect(minus(10, 1.5, 3.2)).toBe(5.3);
  });

  test("subtracts negative numbers", () => {
    expect(minus(-5, -3)).toBe(-2);
    expect(minus(-3, -5)).toBe(2);
    expect(minus(-10, -5, -3)).toBe(-2);
    expect(minus(-10, -25, 3)).toBe(12);
    expect(minus(-10, -1.5, -3.2)).toBe(-5.3);
  });

  test("subtracts various numbers and zero", () => {
    expect(minus(12, -5)).toBe(17);
    expect(minus(-3, 3)).toBe(-6);
    expect(minus(130, -25, 0, -5, -70, 50)).toBe(180);
    expect(minus(2, 0)).toBe(2);
  });
});
