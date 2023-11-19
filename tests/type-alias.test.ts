import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: "1",
      name: "Pen",
    };

    const product: Product = {
      id: 1,
      name: "Joyko Pen",
      price: 3000,
      category,
    };

    console.log(category);
    console.log(product);
  });
});
