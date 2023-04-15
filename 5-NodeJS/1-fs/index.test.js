import { describe, it, expect } from "vitest";
import * as fs from "fs";
import { promisify } from "util";

describe("Operaciones con archivos", () => {
  it("lectura de un archivo de forma sincronica", () => {
    // leer el archivo "user.JSON" que se encuentra en la carpeta 'files'
    // Nota: para convertir un String en JSON prude usar el metodo JSON.parse(str)
    // Nota: para obtener el path del archivo puede usar la variale __dirname

    // almacene el contenido del archivo en la variable user y conviertalo a JSON
    const user = {};

    expect(user).toStrictEqual({ name: "juan" });
  });

  it("lectura de un archivo de forma asincronica", async () => {
    // leer el archivo "user.JSON" que se encuentra en la carpeta 'files' de forma asincronica
    // para esto convierta la funcion "readFile" del modulo fs en una promesa con el modulo 'promisify'

    const read = promisify(fs.readFile);

    // alamcene el contenido del archivo en data
    const data = {};
    const user = JSON.parse(data.toString());

    expect(user).toStrictEqual({ name: "juan" });
  });

  it("creacion de archivos de forma sincronica", () => {
    // crear un archivo llamado 'created.JSON' en la carpeta files
    // Nota: para convertir un Objeto en Sitrng puede usar el metodo JSON.stringify()

    // cree el archivo

    // use la funcion de lectura sincronica utilizada en los test anteriores
    const user = {};

    expect(user).toStrictEqual({ name: "juancito" });
  });

  it("creacion de archivos de forma asincronica", async () => {
    // crear un archivo llamado 'created_async.JSON' en la carpeta files de forma asincronica
    // para esto converta la funcion "writeFile" del modulo fs en una promesa con el modulo 'promisify'

    const write = promisify(fs.writeFile);
    const read = promisify(fs.readFile);

    // cree el archivo de forma asincronica

    // lea el archivo de forma asincronica
    const data = {};
    const user = JSON.parse(data.toString());

    expect(user).toStrictEqual({ name: "juan" });
  });

  it("eliminacion de archivos de forma sincronica", () => {
    // elimine el archivo llamado 'created.JSON

    let existe = true;
    try {
      fs.readFileSync(__dirname + "/files/created.JSON");
    } catch (err) {
      existe = false;
    }

    expect(existe).toBe(false);
  });

  it("eliminacion de archivos de forma asincronica", async () => {
    // elimine el archivo llamado "created_async.JSON" de forma asincronica
    // para esto convierta la funcion "unlink" del modulo fs en una promesa con el modulo 'promisify'

    const unlink = promisify(fs.unlink);

    let existe = true;
    try {
      fs.readFileSync(__dirname + "/files/created_async.JSON");
    } catch (err) {
      existe = false;
    }

    expect(existe).toBe(false);
  });
});
