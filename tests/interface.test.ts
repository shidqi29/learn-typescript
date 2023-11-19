import { Seller } from "../src/Seller";
import { Employee, Manager } from "../src/employee";

describe("Interface", () => {
  it("should support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "TOKO WANGI JAYA",
      nib: "123456789",
      npwp: "987654321",
    };

    seller.name = "TOKO HARUM JAYA";
    // seller.nib = "987654321";

    console.log(seller);
  });

  it("should support funtion interface", () => {
    interface AddFunction {
      (x: number, y: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Shidqi", "Amirul", "Haq"];
    console.log(names[0]);
  });

  it("should support indexable interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Shidqi",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Shidqi");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Shidqi",
      division: "IT",
    };

    console.log(employee);

    const manager: Manager = {
      id: "2",
      name: "Amirul",
      division: "IT Manager",
      numberOfEmployees: 10,
    };

    console.log(manager);
  });

  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Shidqi",
      sayHello: function(name: string): string {
        return `Hello ${name}! my name is ${this.name}`;
      },
    };

    console.log(person.sayHello("Amirul"));
  });
});
