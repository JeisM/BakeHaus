import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
export function SiteFooter() {
return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><BrandLogo /><p>Good things are baking.</p></div><nav aria-label="Footer navigation"><p className="footer-heading">Explore</p><Link href="/menu">Our menu</Link><Link href="/about">Our story</Link><Link href="/contact">Say hello</Link></nav></div></footer>;
}
