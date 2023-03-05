import { describe, it, expect } from "vitest";

describe("asincronismo", () => {
  it("Promesas", () => {
    /**
     * Cree una promesa que se cumpla pasados 3seg
     */

    const promise = new Promise();

    promise.then((res) => expect(res).toBe("success"));
  });
  it("Async Await", async () => {
    /**
     * Consuma la misma promesa del test anterior pero utilizando async await y almacene el resultado en 'res'
     */

    const promise = new Promise();

    let res;

    expect(res).toBe("success");
  });
  it("Consumo de API", async () => {
    /**
     * Use fetch() para consumir la api de "https://www.thecocktaildb.com/" y consulte la informacion del trago "Gin and Tonic"
     * NOTA: para buscar el trago por nombre utilice el siguienre parametro de busqueda: "Gin%20And%20Tonic"
     */

    const URL = "https://www.thecocktaildb.com/api/json/v1/1/";

    // response
    let res;
    // cuerpo de la response. res.json()
    let data;

    expect(data.idDrink).toBe("11403");
    expect(data.strDrink).toBe("Gin And Tonic");
  });
  it("Manejo de expeciones", async () => {
    /**
     * En caso que la promesa fracase guarde ":(" en la variable res. En caso de exito guarde ":)". Idem en caso de exito. Use Async Await.
     */

    const promise = new Promise((resolve, reject) => {
      Math.random() > 0.5 ? resolve("Buena suerte") : reject("Mala suerte");
    });

    const res = "";

    expect(res == ":)" || res == ":(").toBe(true);
  });
});
