import { describe, it, expect } from "vitest";

describe("Declaracion de variables", () => {
  it("Declaracion de una variable", () => {
    // asignar un valor a x que pase el test
    let x;

    expect(x).toBe(5);
  });

  it("Declaracion de una variable", () => {
    // usar x para asignar un valor a "y" que pase el test
    let x;
    let y;

    expect(y).toBe(5);
  });
});
