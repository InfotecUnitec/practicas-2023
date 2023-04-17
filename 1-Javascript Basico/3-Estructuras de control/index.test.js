import { describe, it, expect } from "vitest";

describe("Estructuras de control", () => {
  //Utilizar un IF para que "y" tome el valor 10 solo si x es verdadera
  it("IF", () => {
    let x;
    let y;

    expect(y).toBe(10);
  });

  //Utilizar un IF para que "y" tome el valor 10 o 20 dependiendo de si "x" es verdadera o falsa
  it("IF ELSE", () => {
    let x;
    let y;

    expect(z).toBe(10);
  });

  //Utilizar un WHILE para que aumente el valor de "y" y disminuya el valor de "x", mientras "x" no sea 0
  it("WHILE", () => {
    let x;
    let y;

    expect(y).toBe(10);
  });

  //Utilizar un FOR para que aumente el valor de "y" una cantidad de veces igual a "x"
  it("FOR", () => {
    let x;
    let y;

    expect(y).toBe(10);
  });

  // Utilizar un Switch para que dependiendo del valor que tenga "x"(del 1 al 7), se setee a la variable "y" como un dia de la semana (Lunes,Martes,etc)
  it("SWITCH", () => {
    let x;
    let y;

    expect(y).toBe("Lunes");
  });
});
