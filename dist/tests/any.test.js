"use strict";
describe("Tipe data Any", () => {
    it("should support in typescript", () => {
        const person = {
            name: "Shidqi",
            age: 20,
        };
        person.age = 21;
        console.log(person);
    });
});
