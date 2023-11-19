import { sayHello } from "../src/say-hello";

describe("Say Hello", () => {
  it("should say hello", () => {
    expect(sayHello("Shidqi")).toBe("Hello Shidqi!");
  });
});
