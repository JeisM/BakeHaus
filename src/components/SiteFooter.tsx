import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
export function SiteFooter() {
return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><BrandLogo /><p>Good things are baking.</p></div><nav aria-label="Footer navigation"><p className="footer-heading">Explore</p><Link href="/menu">Our menu</Link><Link href="/about">Our story</Link><Link href="/contact">Say hello</Link></nav><p className="demo-note">This is a static concept site. Product pricing, ratings, and comments are illustrative demo content.<span>Contact messages are not delivered. New comments reset on refresh.</span></p></div></footer>;
}
