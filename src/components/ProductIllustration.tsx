import { CakeSlice, Coffee, Croissant, PackageOpen, Sandwich } from "lucide-react";
import type { Product } from "@/data/products";

const icons = { Pastries: Croissant, Cakes: CakeSlice, Breads: Sandwich, Drinks: Coffee, Specials: PackageOpen };

export function ProductIllustration({ product }: { product: Product }) {
  const Icon = icons[product.category];
  return <span className={`product-illustration illustration-${product.category.toLowerCase()}`} role="img" aria-label={`Illustration of ${product.name}`}><span className="illustration-orbit" aria-hidden="true" /><Icon aria-hidden="true" /><span className="illustration-spark" aria-hidden="true">✦</span></span>;
}
