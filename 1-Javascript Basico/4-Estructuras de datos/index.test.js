import { describe, it, expect } from "vitest";

describe("Arreglos", () => {
  it("Declaracion de arreglos", () => {
    let arr = [1, 2, 3, 4];
    let x, y, z;

    expect(4).toBe(arr[x]);
    expect(1).toBe(arr[y]);
    expect(3).toBe(arr[z]);
  });
  it("Agregar elementos", () => {
    let arr = [];

    // agregar x
    let x = 1;

    expect(arr).toStrictEqual([1]);

    // agregar y
    let y = 2;

    expect(arr).toStrictEqual([1, 2]);

    // agregar z
    let z = 3;

    expect(arr).toStrictEqual([1, 2, 3]);
  });
  it("Eliminar elementos", () => {
    let arr = [1, 2, 3];

    // eliminar el ultimo elemento

    expect(arr).toStrictEqual([1, 2]);

    let arr2 = [1, 2, 3];

    // eliminar el 2

    expect(arr2).toStrictEqual([1, 3]);
  });
  it("Largo de un arreglo", () => {
    let arr = [];

    // agregar los elementos necsarios para que funcione

    expect(arr.length).toBe(3);
  });
});
describe("Objetos", () => {
  it("Declaracion de objetos", () => {
    let persona = {
      nombre: "juan",
      edad: 20,
    };

    expect(persona.nombre).toBe("juan");

    // cambiar el nombre

    expect(persona.nombre).toBe("roberto");
  });
  it("Agregar propiedades", () => {
    let persona = {
      nombre: "juan",
      edad: 20,
    };

    expect(persona.apellido).toBe("Perez");
  });
});
describe("Desestructuracion", () => {
  it("Desestructuracion de arreglos", () => {
    const arr = [];
    const [x, y] = [...arr];

    expect(x).toBe(10);
    expect(y).toBe(5);
  });
  it("Desestructuracion de objetos", () => {
    const persona = {};
    const { nombre, edad } = { persona };

    expect(nombre).toBe("juan");
  });
});
