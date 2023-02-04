import { describe, it, expect } from "vitest";

describe("Operaciones Algebraicas", () => {
  // asignar los valores necesarios para que las operaciones den el resultado esperado
  it("Suma", () => {
    let x;
    let y;
    let z;

    expect(x + y).toBe(5);
    expect(x + y + z).toBe(10);
  });
  it("Resta", () => {
    let x;
    let y;
    let z;

    expect(x - y).toBe(5);
    expect(x - y - z).toBe(10);
  });
  it("Multiplicacion", () => {
    let x;
    let y;
    let z;

    expect(x * y).toBe(10);
    expect(x * y * z).toBe(100);
  });
  it("Division", () => {
    let x;
    let y;
    let z;

    expect(x / y).toBe(10);
    expect(x / y / z).toBe(5);
  });
  it("Resto", () => {
    let x;
    let y;

    expect(x % y).toBe(2);
  });
  it("Operadores Unarios", () => {
    let x = 0;

    // Utilizar un operador unario para cambiar el valor de x
    expect(x).toBe(1);
  });
});

describe("Operaciones Logicas", () => {});
