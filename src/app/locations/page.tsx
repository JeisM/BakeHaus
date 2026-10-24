import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BakeryArt } from "@/components/BrandArt";
export const metadata = { title: "Locations" };
export default function LocationsPage() {
return <section className="section container locations-page"><div className="page-intro"><p className="eyebrow">Come say hello</p><h1>Find your neighborhood BakeHaus.</h1><p className="lede">Good company. Great pastries. A little pause in your day.</p></div><div className="location-card"><div className="storefront-art" aria-hidden="true"><BakeryArt /><span>BAKEHAUS</span></div><div className="location-copy"><p className="eyebrow">Your next happy place</p><h2>Your neighborhood bake stop.</h2><p>Contact us for location details.</p><Link className="text-link" href="/contact">Say hello <ArrowRight size={17} /></Link></div></div></section>;
}
