const calculator = require("../src/index.js");
describe("addition", () => {
  test("adds positive numbers", () => {
    expect(() => add(1, 3).toBe(4));
    expect(() => add(100, 3, 25).toBe(128));
    expect(() => add(1, 1, 1, 1, 1).toBe(5));
  });
  test("adds negative numbers", () => {
    expect(() => add(-3, -5).toBe(-8));
    expect(() => add(-1, -200, -20).toBe(-221));
    expect(() => add(-1, -1, -1, -1).toBe(-4));
  });
  test("adds various numbers and zero", () => {
    expect(() => add(12, -5).toBe(7));
    expect(() => add(-3, 3).toBe(0));
    expect(() => add(130, -25, 0, -5, -70, 50).toBe(90));
    expect(() => add(2, 0).toBe(2));
  });
});
