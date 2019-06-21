const { getBalance } = require("../BankAccount.js");
describe("Banking Account", () => {
  it("should get the balance from User", () => {
    expect(100).toBe(getBalance("Phani"));
  });
  it("should return 0 balance to other users", () => {
    expect(0).toBe(getBalance("kanna"));
  });
});
