"use strict";
describe("Object Type", () => {
    it("should support object type", () => {
        const person = {
            name: "Shidqi",
            age: 20,
        };
        console.log(person);
        person.age = 21;
        console.log(person);
    });
});
