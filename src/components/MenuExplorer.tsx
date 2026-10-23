"use client";

import { useState } from "react";
import { categories, filterProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function MenuExplorer() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const visible = filterProducts(selected);
  return <><div className="filters" role="group" aria-label="Filter products by category">{categories.map((category) => <button key={category} className={selected === category ? "selected" : ""} aria-pressed={selected === category} onClick={() => setSelected(category)}>{category}</button>)}</div>{visible.length ? <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h2>Fresh ideas are on the way.</h2><p>No items are shown for this category yet.</p><button className="button" onClick={() => setSelected("All")}>Show everything</button></div>}</>;
}
