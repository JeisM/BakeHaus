import type { Metadata } from "next";
import "./globals.css";
import "./extra.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = { title: { default: "BAKEHAUS | Good things are baking", template: "%s | BAKEHAUS" }, description: "A playful-premium bakery with a little joy in every bite." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
