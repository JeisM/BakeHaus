import { describe, expect, it } from "vitest";
import { categories, filterProducts, formatPHP, products } from "../src/data/products";

describe("BAKEHAUS product data", () => {
  it("formats illustrative prices in Philippine pesos", () => {
    expect(formatPHP(95)).toBe("₱95");
    expect(formatPHP(185)).toBe("₱185");
  });

  it("provides a complete, usable record for every product", () => {
    expect(products).toHaveLength(30);
    expect(new Set(products.map((product) => product.id)).size).toBe(products.length);
    expect(new Set(products.map((product) => product.name)).size).toBe(products.length);
    for (const product of products) {
      expect(product.pricePHP).toBeGreaterThan(0);
      expect(product.rating).toBeGreaterThanOrEqual(4.6);
      expect(product.rating).toBeLessThanOrEqual(5);
      expect(product.image).toMatch(/^\/images\/products\/.*\.webp$/);
      expect(product.comments.length).toBeGreaterThan(0);
    }
  });

  it("provides at least six items for every menu category", () => {
    expect(filterProducts("All")).toHaveLength(products.length);
    for (const category of categories.filter((category) => category !== "All")) {
      expect(filterProducts(category)).toHaveLength(6);
    }
  });
});
