describe("Object Type", () => {
  it("should support object type", () => {
    const person: { name: string; age: number, hobbies?: string[] } = {
      name: "Shidqi",
      age: 20,
    };

    console.log(person);

    person.age = 21;
    console.log(person);
  });
});
