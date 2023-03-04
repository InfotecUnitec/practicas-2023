import { describe, it, expect } from "vitest";

describe("Estructuras de control", () => {
  it("IF", () => {
    let x = false;
    let y;

    if (x) {
      y = 10;
    }

    expect(y).toBe(10);
  });
  it("IF ELSE", () => {
    let x = true;
    let y;
    let z;

    if (x) {
      y = 10;
    } else {
      z = 10;
    }

    expect(z).toBe(10);
  });

  it("WHILE", () => {
    let x;
    let y = 0;

    while (x > 0) {
      y++;
      x--;
    }

    expect(y).toBe(10);
  });
  it("FOR", () => {
    let x;
    let y = 0;

    for (let i = 0; i < x; i++) {
      y++;
    }

    expect(y).toBe(10);
  });
});
