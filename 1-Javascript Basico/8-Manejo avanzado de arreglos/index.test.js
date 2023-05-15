import { describe, it, expect } from "vitest";

describe("Manejo avanzado de arreglos", () => {
  it("forEach", () => {
    /**
     * Agregar todos los elementos del arreglo 'arr' al arreglo 'arr2' usando el forEach
     */
    const arr1 = [1, 2, 2];
    const arr2 = [];

    expect(arr2).toStrictEqual([1, 2, 3]);
  });
  it("map", () => {
    /**
     * Usar el metodo map para mutar los valores del arreglo 'arr1' y almacenar el resultado en 'arr2'
     */

    const arr1 = [1, 2, 3];
    const arr2 = [];

    expect(arr2).toStrictEqual([2, 3, 4]);
  });
  it("filter", () => {
    /**
     * Utilizar el metodo filter para filtrar el arregloy dejar solo los numeros primos
     */
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [];

    expect(arr2).toStrictEqual([1, 3, 5, 7]);
  });
  it("Primos", () => {
    /**
     * Dado un array de numeros, obtener el primer numero primo que aparezca y guardarlo en una variable. Si la raiz cuadrada del numero es mayor a 5, ordenar el arreglo, sino invertirlo
     */
    const arr1 = [1, 4, 14, 25, 67, 2, 17, 23];
    let primo;

    expect(arr1).toStrictEqual([1, 2, 4, 14, 17, 23, 25, 67]);

    const arr2 = [32, 5, 27, 1, 8, 156, 20, 14];

    expect(arr2).toStrictEqual([14, 20, 156, 8, 1, 27, 5, 32]);
  });
});
