"use strict";
describe("Array", () => {
    it("should return array", () => {
        const names = ["Shidqi", "Amirul", "Haq"];
        const numbers = [1, 2, 3];
        console.log(names);
        console.log(numbers);
    });
    it("should support readonly arrat", () => {
        const hobbies = ["Sports", "Cooking"];
        console.log(hobbies);
        // hobbies[3] = "Coding";
    });
    it("should support tuple", () => {
        const person = ["Shidqi", 20];
        console.log(person);
        console.log(person[0]);
        // person[0] = "Amirul";
    });
});
