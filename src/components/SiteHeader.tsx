"use client";

import Link from "next/link";
import { Heart, House, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { BrandLogo, BrandMark } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [{ href: "/menu", label: "Menu" }, { href: "/about", label: "About" }, { href: "/locations", label: "Locations" }, { href: "/contact", label: "Contact" }];
const mobileLinks = [{ href: "/", label: "Home", icon: House }, { href: "/menu", label: "Menu", icon: null }, { href: "/about", label: "About", icon: Heart }, { href: "/locations", label: "Locations", icon: MapPin }, { href: "/contact", label: "Contact", icon: Mail }];

export function SiteHeader() {
  const pathname = usePathname();
  return <>
    <header className="site-header"><nav className="container nav" aria-label="Main navigation">
      <BrandLogo />
      <div className="nav-links">{links.map((link) => <Link key={link.href} className={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "active" : ""} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined} href={link.href}>{link.label}</Link>)}<ThemeToggle /><Link className="button button-small menu-cta" href="/menu">Explore menu <BrandMark className="menu-mark" /></Link></div>
    </nav></header>
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">{mobileLinks.map(({ href, label, icon: Icon }) => {
      const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
      return <Link key={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined} href={href}><span className="mobile-nav-icon">{Icon ? <Icon size={20} strokeWidth={2} aria-hidden="true" /> : <BrandMark className="menu-mark" />}</span><span>{label}</span></Link>;
    })}<ThemeToggle mobile /></nav>
  </>;
}
