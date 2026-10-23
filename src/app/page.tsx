import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return <>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">FRESHLY BAKED, EVERY DAY</p><h1>Good things are <em>baking.</em></h1><p className="lede">A little something delicious for every kind of day.</p><div className="hero-actions"><Link className="button" href="/menu">Explore our menu <ArrowRight size={18} /></Link><Link className="text-link" href="/about">Our story</Link></div></div><div className="hero-image"><Image src="/images/hero/bakehaus-hero-pastries.webp" alt="An editorial arrangement of croissants, strawberry cake, donut, and iced latte" fill priority sizes="(max-width: 768px) 100vw, 54vw" /></div></div></section>
    <section className="section container"><p className="eyebrow">THE CROWD FAVES</p><div className="section-heading"><h2>Made to make your day.</h2><Link href="/menu" className="text-link">View all treats <ArrowRight size={17} /></Link></div><div className="product-grid featured">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="story-section"><div className="container story-grid"><div className="story-art"><span>BAKE<br />HAPPY</span></div><div><p className="eyebrow">OUR LITTLE PHILOSOPHY</p><h2>A little joy in every bite.</h2><p>We believe the everyday deserves an excellent pastry: warm, colorful, a little bit playful, and always made with care.</p><Link href="/about" className="button button-dark">Get to know us <ArrowRight size={18} /></Link></div></div></section>
    <section className="section container final-cta"><p className="eyebrow">YOUR NEXT FAVORITE</p><h2>Find your kind of delicious.</h2><Link className="button" href="/menu">Browse the menu <ArrowRight size={18} /></Link></section>
  </>;
}
