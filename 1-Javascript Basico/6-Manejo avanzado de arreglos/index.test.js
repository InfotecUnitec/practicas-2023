import { describe, it, expect } from "vitest";

describe("Manejo avanzado de arreglos", () => {
  it("forEach", () => {
    /**
     * Agregar todos los elementos del arreglo 'arr' al arreglo 'arr2' usando el forEach
     */
    const arr1 = [1, 2, 2];
    const arr2 = [];

    expect(arr2).toBe([1, 2, 3]);
  });
  it("map", () => {
    /**
     * Usar el metodo map para mutar los valores del arreglo 'arr1' y almacenar el resultado en 'arr2'
     */

    const arr1 = [1, 2, 3];
    const arr2 = [];

    expect(arr2).toBe([2, 3, 4]);
  });
  it("filter", () => {
    /**
     * Utilizar el metodo filter para filtrar el arregloy dejar solo los numeros primos
     */
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [];

    expect(arr2).toBe([1, 3, 5, 7]);
  });
});
