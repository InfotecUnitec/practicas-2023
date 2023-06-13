import { describe, it, expect, beforeAll } from "vitest";

// LEER el archivo README.md dentro de la carpeta app
const api = (path, method = "GET", payload = null, headers = { "Content-Type": "application/json" }) =>
  fetch(
    `http://localhost:8080${path}`,
    payload
      ? {
          method,
          headers,
          body: JSON.stringify(payload),
        }
      : { method, headers }
  );

describe("products", () => {
  beforeAll(async () => {
    try {
      await api("/init");
    } catch (err) {
      console.log(err);
    }
  });

  it("get all", async () => {
    const res = await api("/products");
    const json = await res.json();

    expect(json.data).toStrictEqual([
      {
        id: 1,
        name: "mandarina",
        price: 100,
      },
      {
        id: 2,
        name: "banana",
        price: 200,
      },
      {
        id: 3,
        name: "manzana",
        price: 500,
      },
    ]);
  });

  it("get one", async () => {
    const res = await api("/products/1");
    const json = await res.json();

    expect(json.data).toStrictEqual({ id: 1, name: "mandarina", price: 100 });
  });

  it("create", async () => {
    const res = await api("/products", "POST", { name: "anana", price: 600 });
    const json = await res.json();

    expect(json.data).toStrictEqual({ id: 4, name: "anana", price: 600 });
  });

  it("delete", async () => {
    const res = await api("/products/4", "DELETE");
    const json = await res.json();

    expect(json.status).toBe(204);
  });

  it("update", async () => {
    const res = await api("/products/4", "POST", { name: "anana modificada geneticamente" });
    const json = await res.json();

    expect(json.data).toStrictEqual({ id: 4, name: "anana modificada geneticamente", price: 600 });
  });

  it("methods not allowed", async () => {});
});

describe("cart", () => {
  beforeAll(async () => {});
  it("add products", async () => {});
  it("pay", async () => {});
});
