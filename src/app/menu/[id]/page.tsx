import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProductById, products } from "@/data/products";

export function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
