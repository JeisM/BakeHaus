import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CakeSlice, Croissant, Coffee, Sandwich, Star } from "lucide-react";
import { BakeryArt, Sprinkles } from "@/components/BrandArt";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
const shortcuts = [{ name: "Pastries", icon: Croissant }, { name: "Cakes", icon: CakeSlice }, { name: "Breads", icon: Sandwich }, { name: "Drinks", icon: Coffee }, { name: "Specials", icon: Star }];
const featured = ["classic-croissant", "chocolate-croissant", "sprinkle-donut", "cloud-cake"].map((id) => products.find((product) => product.id === id)!);
export default function HomePage() {
return <>
<section className="hero container"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow">Freshly baked, every day</p><h1>Good things are <em>baking.</em><Sprinkles /></h1><p className="lede">A little something delicious for every kind of day.</p><div className="hero-actions"><Link className="button" href="/menu">Explore our menu <ArrowRight size={18} /></Link><Link className="text-link" href="/about">Our story</Link></div></div><div className="hero-visual"><div className="hero-image"><Image src="/images/hero/bakehaus-hero-pastries.webp" alt="Fresh croissants, strawberry cake, a pink glazed donut, and an iced latte" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div><div className="happy-badge" aria-hidden="true">BAKE<br />HAPPY<svg viewBox="0 0 40 18"><path d="M5 3Q20 23 35 3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></div><Sprinkles className="image-sprinkles" /></div></div><nav className="category-shortcuts" aria-label="Browse by category">{shortcuts.map(({ name, icon: Icon }) => <Link key={name} href={`/menu?category=${name}`}><Icon size={22} aria-hidden="true" />{name}</Link>)}</nav></section>
<section className="featured-section container"><p className="eyebrow">Featured treats</p><div className="section-heading"><h2>Made to make your day.</h2><Link href="/menu" className="text-link all-treats">View all treats <ArrowRight size={17} /></Link></div><div className="product-grid featured">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
<section className="story-section"><div className="container story-grid"><BakeryArt /><div className="story-copy"><h2>A little joy in every bite.</h2><p>At BAKEHAUS, we believe great food brings people closer. That&apos;s why we bake fresh, create with care, and always find room for a little more joy.</p><Link className="story-link" href="/about">A little more about us <ArrowRight size={16} /></Link><Sprinkles /></div></div></section>
<section className="container final-cta"><div><h2>Find your kind of delicious.</h2><p>Pastries, cakes, breads, and drinks, made for brighter days.</p></div><Link className="button" href="/menu">Explore our menu <ArrowRight size={18} /></Link></section></>;
}
