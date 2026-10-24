import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPHP, getProductImage, type Product } from "@/data/products";
import { ProductIllustration } from "@/components/ProductIllustration";
export function ProductCard({ product }: { product: Product }) {
const image = getProductImage(product);
return <Link className="product-card-link" href={`/menu/${product.id}`} aria-label={`View details and comments for ${product.name}`}><article className="product-card"><div className={`product-art product-art--${product.tone}`} aria-hidden="true">{image ? <Image src={image} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" /> : <ProductIllustration product={product} />}</div><div className="product-body"><p className="product-category">{product.category}</p><h3>{product.name}</h3><div className="product-meta"><span aria-label={`Rating ${product.rating} out of 5`}><Star size={15} aria-hidden="true" /> {product.rating.toFixed(1)}</span><strong>{formatPHP(product.pricePHP)}</strong></div></div></article></Link>;
}
