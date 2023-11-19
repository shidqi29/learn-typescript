import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("should support enum", () => {
    const customer: Customer = {
      id: 1,
      name: "Shidqi",
      type: CustomerType.PLATINUM,
    };

    console.log(customer);
  });
});
