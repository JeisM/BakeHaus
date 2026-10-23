import { Croissant } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPHP, products, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const showProductImage = products.find((candidate) => candidate.image === product.image)?.id === product.id;
  return <Link className="product-card-link" href={`/menu/${product.id}`} aria-label={`View details and comments for ${product.name}`}><article className="product-card"><div className={`product-art product-art--${product.tone}`} aria-hidden="true">{showProductImage && product.image ? <Image src={product.image} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" /> : <span>{product.name.split(" ")[0]}</span>}</div><div className="product-body"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p><div className="product-meta"><strong>{formatPHP(product.pricePHP)}</strong><span aria-label={`Rating ${product.rating} out of 5`} title={`Rating ${product.rating} out of 5`}><Croissant size={17} aria-hidden="true" /> {product.rating}</span></div></div></article></Link>;
}
