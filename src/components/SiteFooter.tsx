import Link from "next/link";

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="logo logo-light" href="/">BAKE<span>HAUS</span></Link><p>Good things are baking.</p></div><div><p className="eyebrow">EXPLORE</p><Link href="/menu">Our menu</Link><Link href="/about">Our story</Link><Link href="/contact">Say hello</Link></div><p className="demo-note">This is a static concept site. Product pricing, ratings, and comments are illustrative demo content.</p></div></footer>;
}
