describe("Type Alias", () => {
    it("should support type alias", () => {
        const category = {
            id: "1",
            name: "Pen",
        };
        const product = {
            id: 1,
            name: "Joyko Pen",
            price: 3000,
            category,
        };
        console.log(category);
        console.log(product);
    });
});
export {};
