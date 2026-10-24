import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = { title: { default: "BAKEHAUS | Good things are baking", template: "%s | BAKEHAUS" }, description: "A playful-premium bakery with a little joy in every bite." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try{var saved=localStorage.getItem('bakehaus-theme');document.documentElement.dataset.theme=saved==='dark'||saved==='light'?saved:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}" }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>; }
