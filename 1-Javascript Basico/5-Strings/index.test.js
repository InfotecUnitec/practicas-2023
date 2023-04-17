import { describe, it, expect } from "vitest";

describe("Strings", () => {
  // Obtener la letra a de la palabra "Hola" y guardarla en "char"
  it("Caracter", () => {
    let str = "Hola";
    let char;

    expect(char).toBe("a");
  });

  //Comparar dos string, si son iguales sumarlos en una variable, sino la variable esta vacia ""
  it("Comparar strings", () => {
    let str1;
    let str2;
    let suma;

    expect(suma).toBe("perroperro");

    let str3 = "cosa";

    expect(suma).toBe("");
  });

  //Dado un string cualquiera, poner en mayuscula todos sus caracteres
  it("Mayuscula", () => {
    let str;

    expect(str).toBe("GRITANDO ANDO");
  });
  //Poner en mayuscula solo la primera letra del string
  it("CamelCase", () => {
    let str;

    expect(str).toBe("Perro");
  });

  //Verificar si un string comienza con la palabra "Hola" o si termina con la palabra "Adios"
  it("Inico o Fin", () => {
    let str;
    let result;

    expect(result).toBe(true);
  });
  //Verificar que un string contenga la palabra "Mitad"
  it("Inlcuye", () => {
    let str;
    let result;

    expect(result).toBe(true);
  });
  //Reemplazar todas las las ocurrencias de la palabra "cosa" en un string y reemplazarla por "hola"
  it("Reemplazo", () => {
    let str;

    expect(str.includes("hola")).toBe(true);
  });
  //Dado un string, obtener del mismo la subcadena que comienza en el caracter 5 hasta el 10
  it("SubCadena", () => {
    let str;
    let subStr;

    expect(subStr.length).toBe(5);
  });
  //Dado un string, obtener un nuevo array con todas sus palabras(Separadas por espacio)
  it("String en Array", () => {
    let str;
    let arr;
    expect(arr.length).toBeGreaterThan(0);
  });
});
