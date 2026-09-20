import { describe, expect, it } from "vitest";
import { add, multiply } from "../src/calculator.js";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});
