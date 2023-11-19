describe("Tipe data Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      name: "Shidqi",
      age: 20,
    };
    person.age = 21;

    console.log(person);
  });
});
