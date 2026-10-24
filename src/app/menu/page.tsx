import { MenuExplorer } from "@/components/MenuExplorer";
import { Suspense } from "react";
import { Sprinkles } from "@/components/BrandArt";
export const metadata = { title: "Menu" };
export default function MenuPage() { return <section className="section container menu-page"><div className="page-intro"><p className="eyebrow">Fresh from the oven</p><h1>Find your next favorite.<Sprinkles /></h1><p className="lede">A little something delicious for every kind of day.</p></div><Suspense fallback={<p className="result-count" role="status">Finding your favorites…</p>}><MenuExplorer /></Suspense></section>; }
