import { describe, it, expect } from "vitest";
// import { sum, pot, isMultiple, fibonacci, removeSpaces, mayusMinus, oldDate } from "../answer";

describe("Funciones", () => {
  it("Matematicas", () => {
    /**
     * Programar una funcion que reciba 2 numeros enteros y devuelva la suma de los mismos
     */
    const sum = (a, b) => a + b;
    const pot = (a, b) => a ** b;
    const isMultiple = (n, arr) => {
      let multiple = true;
      arr.forEach((e) => {
        multiple = multiple && n % e == 0;
      });
      return multiple;
    };
    // f(n) = f(n-1) + f(n-2)
    const fibonacci = (n) => {
      // console.log(n);
      // if (n <= 1) return [1];

      // return [...(fibonacci(n - 1) + fibonacci(n - 2))];
      const arr = [1, 1];
      while (arr.at(-1) < n) {
        arr.push(arr.at(-1) + arr.at(-2));
      }

      return arr;
    };

    expect(sum(2, 2)).toBe(4);

    /**
     * Programar una funcion que reciba un numero entero n y un numero entero x.
     * Esta funcion debe retornar la x potencia del numero n, es decir n^x
     */
    expect(pot(2, 4)).toBe(16);

    /**
     * Programar una funcion que reciba un numero entero n y un arreglo de numeros enteros arr
     * Esta funcion debe devolver true si si n es multiplo de todos los numeros en arr
     */

    expect(isMultiple(8, [2, 4])).toBe(true);
    expect(isMultiple(8, [2, 3])).toBe(false);

    /**
     * Programar una funcion que reciba un numero entero n
     * Esta funcion deve devolver un arreglo con todos los numeros de fibonacci hasta n inclusive
     */

    expect(fibonacci(21)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("Strings", () => {
    /**
     * Programar una funcion que reciba un String str
     * Esta funcion debe retortar el mismo string pero sin espacios
     */
    expect(removeSpaces("Hola soy una cadena de caracteres")).toBe("Holasoyunacadenadecaracteres");

    const mayusMinus = (str) => {
      return str
        .split(" ")
        .map((word, i) => {
          if (i % 2 == 0) return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
          return word.charAt(0).toLowerCase() + word.slice(1, word.length).toUpperCase();
        })
        .join(" ");
    };

    /**
     * Programar una funcion que reciba un String str
     * Esta funcion debe hacer que todas las palabras pares comiencen con mayuscula y tengan el resto en minuscula
     * y las palabras inpares deben comenzar con minuscula y tener el resto en mayuscula
     */
    expect(mayusMinus("Hola soy una cadena de caracteres")).toBe("hOLA Soy uNA Cadena dE Caracteres");
  });
  it("Fechas", () => {
    /**
     * Programar una funcion que reciba 2 fechas en formato string, date1 y date2
     * Esta funcion debe retornar true si date1 es mas vieja que date2
     * Ademas debe retornar error si el formato de la fecha es erroneo
     *  Nota: debe usar la clase Date() de JS
     */
    expect(oldDate("2022-01-01", "2020-01-01")).toBe(true);
    expect(oldDate("2022-01-01", "2023-01-01")).toBe(false);
  });
});
