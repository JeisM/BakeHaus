import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata = { title: "About" };
export default function AboutPage() {
return <section className="section container about"><div className="about-hero"><div className="about-copy"><p className="eyebrow">A bakery with feeling</p><h1>Baked with heart.</h1><p className="lede">The best bakery moments are uncomplicated: something warm in your hands, a little pause, and a reason to smile.</p><p className="lede">BAKEHAUS is built around that feeling—bright flavors, considered details, and everyday enjoyment.</p><Link className="button" href="/menu">Explore our menu <ArrowRight size={18} /></Link></div><div className="about-image"><Image src="/images/hero/bakehaus-hero-pastries.webp" alt="A spread of fresh pastries, cake, and coffee to share" fill sizes="(max-width: 900px) 100vw, 50vw" /></div></div><div className="values"><article><b>01</b><h2>Freshness</h2><p>We keep the good stuff close to the moment it&apos;s made.</p></article><article><b>02</b><h2>Care</h2><p>Thoughtful details make a simple treat feel special.</p></article><article><b>03</b><h2>Everyday joy</h2><p>There&apos;s always room for a little deliciousness.</p></article></div></section>;
}
