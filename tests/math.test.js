const { sum } = require("../math");
//describe - grouping the events
describe("Sum Feature", () => {
  test("should calculate the sum of two numbers", () => {
    const results = sum(2, 2);
    expect(results).toBe(4);
    expect(results).toBeGreaterThan(3);
    expect(results).toBeGreaterThanOrEqual(3);
    expect(results).toEqual(4);
    expect(results).toBeLessThan(5);
  });
  test("should calculate the sum of floating number", () => {
    const results = sum(0.3, 0.4);
    expect(results).toBeCloseTo(0.7);
  });
});
