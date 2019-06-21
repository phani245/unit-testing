const { greet, isEven, isOdd, getCustomer, getPersons } = require("../util");
describe("Greet Feature", () => {
  it("should be the greet message", () => {
    const results = greet("Jane");
    expect(results).toBe("Hello Jane");
    expect(results).toMatch("Jane");
    expect(results).toMatch(/Jane/);
  });
});
// boolen values
describe("Even", () => {
  it("should return true if number is even", () => {
    const results = isEven(2);
    expect(results).toBeTruthy();
    expect(results).not.toBeFalsy();
  });
  it("should return true if number is not even", () => {
    const results = isEven(3);
    expect(results).not.toBeTruthy();
    expect(results).toBeFalsy();
  });
});

describe("Odd", () => {
  it("should return true if number is odd", () => {
    const results = isOdd(3);
    expect(results).toBeTruthy();
    expect(results).not.toBeFalsy();
  });
  it("should return true if number is not even", () => {
    const results = isOdd(4);
    expect(results).not.toBeTruthy();
    expect(results).toBeFalsy();
  });
});

describe("Customer", () => {
  it("should find the customer by id", () => {
    const results = getCustomer(2);
    expect(results).toBeDefined();
    expect(results).not.toBeUndefined();

    expect(results).toEqual({ id: 2, name: "Jane" });
    expect(results).toEqual(expect.objectContaining({ id: 2, name: "Jane" }));
  });
});

describe("Persons", () => {
  it("should fetch all the persons", () => {
    const results = getPersons();
    expect(results).toHaveLength(3);
    expect(results).toContain("two");
  });
});
