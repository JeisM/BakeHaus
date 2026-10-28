import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
export function SiteFooter() {
return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><BrandLogo /><p>Good things are baking.</p><p>Developed by <a href="https://www.linkedin.com/in/john-rosales-8266b230a" target="_blank" rel="noopener noreferrer" className="footer-credit">John Rosales</a></p></div><nav aria-label="Footer navigation"><p className="footer-heading">Explore</p><Link href="/menu">Our menu</Link><Link href="/about">Our story</Link><Link href="/contact">Say hello</Link></nav></div></footer>;
}
