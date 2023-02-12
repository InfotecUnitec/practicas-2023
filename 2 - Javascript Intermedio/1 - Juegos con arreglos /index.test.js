import { describe, it, expect } from "vitest";
import {
  numberSpiral,
  numberSpiralConditional,
  primeNumber,
  fibonacciNumber,
} from "../answers";

describe("Juegos con arreglos", () => {
  it("Espiral de numeros", () => {
    /**
     * Dada una funcion numberSpiral(n) donde n es un numero entero
     * La funcion debe retornar una matriz que simule una espiral de numeros desde 1 hasta n
     */

    expect(numberSpiral(9)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, 8, 9],
    ]);

    expect(numberSpiral(25)).toStrictEqual([
      [17, 16, 15, 14, 13],
      [18, 5, 4, 3, 12],
      [19, 6, 1, 2, 11],
      [20, 7, 8, 9, 10],
      [21, 22, 23, 24, 25],
    ]);
    expect(numberSpiral(7)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, -1, -1],
    ]);
  });

  it("Espiral de numeros con condiciones", () => {
    /**
     * Editar la funcion del ejercicio anterior para que acepte una funcion que decida que numero agregar
     * Ademas completar las siguientes funciones:
     * primeNumber(n): devuelve true si el numero es primo
     * fibonacciNumber(n): devuelve true si el numero pertenece a la sucesion de Fibonacci
     */

    // ejemplo, una espiral de solo numeros pares
    expect(numberSpiralConditional(9, (n) => n % 2 == 0)).toStrictEqual([
      [-1, 4, -1],
      [6, -1, 2],
      [-1, 8, -1],
    ]);

    // espiral de numeros primos
    expect(numberSpiralConditional(9, primeNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [7, -1, -1],
    ]);

    // espiral de fibonacci
    expect(numberSpiralConditional(9, fibonacciNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [-1, 8, -1],
    ]);
  });
});
