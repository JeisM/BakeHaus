"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [{ href: "/menu", label: "Menu" }, { href: "/about", label: "About" }, { href: "/locations", label: "Locations" }, { href: "/contact", label: "Contact" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="site-header"><nav className="container nav" aria-label="Main navigation">
    <Link className="logo" href="/" onClick={() => setOpen(false)}>BAKE<span>HAUS</span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-links" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    <div id="main-links" className={open ? "nav-links is-open" : "nav-links"}>{links.map((link) => <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="button button-small" href="/menu" onClick={() => setOpen(false)}>See what&apos;s fresh</Link></div>
  </nav></header>;
}
