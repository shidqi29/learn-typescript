"use strict";
describe("Union Type", () => {
    it("should return union", () => {
        let sample = "Shidqi";
        console.log(sample);
        sample = 20;
        console.log(sample);
    });
    it("should support typeof operatoe", () => {
        const process = (value) => {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        };
        expect(process("Shidqi")).toBe("SHIDQI");
        expect(process(20)).toBe(22);
        expect(process(true)).toBe(false);
    });
});
