import { LocationExplorer } from "@/components/LocationExplorer";
export const metadata = { title: "Locations" };
export default function LocationsPage() {
return <section className="section container locations-page"><div className="page-intro"><p className="eyebrow">Come say hello</p><h1>Three happy places in Marikina.</h1><p className="lede">Choose a neighborhood bake stop, see the store, and get directions.</p></div><LocationExplorer /></section>;
}
