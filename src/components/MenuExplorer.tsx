"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { CakeSlice, ChevronDown, Coffee, Croissant, Gift, LayoutGrid, Search, Wheat, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { categories, filterProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Selection = (typeof categories)[number];
const categoryIcons = { All: LayoutGrid, Pastries: Croissant, Cakes: CakeSlice, Breads: Wheat, Drinks: Coffee, Specials: Gift };

export function MenuExplorer() {
  const searchParams = useSearchParams();
  const selected = categories.find((category) => category === searchParams.get("category")) ?? "All";
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [searchOpen, setSearchOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAbove, setOpenAbove] = useState(false);
  const [panelMaxHeight, setPanelMaxHeight] = useState(360);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => { setQuery(searchParams.get("q") ?? ""); }, [searchParams]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!categoryRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("pointerdown", closeOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  function search(value: string) {
    setQuery(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("q", value); else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }

  function select(category: Selection) {
    const url = new URL(window.location.href);
    if (category === "All") url.searchParams.delete("category"); else url.searchParams.set("category", category);
    window.history.pushState(null, "", url);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function showOptions(focusIndex?: number) {
    const bounds = triggerRef.current?.getBoundingClientRect();
    const bottomClearance = window.innerWidth <= 700 ? 84 : 16;
    if (bounds) {
      const above = bounds.top - 12;
      const below = window.innerHeight - bounds.bottom - bottomClearance - 8;
      const shouldOpenAbove = below < 320 && above > below;
      setOpenAbove(shouldOpenAbove);
      setPanelMaxHeight(Math.max(120, Math.min(360, shouldOpenAbove ? above : below)));
    }
    setOpen(true);
    if (focusIndex !== undefined) requestAnimationFrame(() => optionRefs.current[focusIndex]?.focus());
  }

  function optionKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % categories.length;
    else if (event.key === "ArrowUp") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    optionRefs.current[next]?.focus();
  }

  const visible = filterProducts(selected, query);
  const SelectedIcon = categoryIcons[selected];

  return <>
    <div className="menu-toolbar">
      <div className={`search-control${searchOpen ? " is-open" : ""}${query ? " has-query" : ""}`} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setSearchOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape" && searchOpen) { event.preventDefault(); setSearchOpen(false); requestAnimationFrame(() => searchTriggerRef.current?.focus()); } }}>
        <span className="menu-tool-label">Search</span>
        <button ref={searchTriggerRef} type="button" className="mobile-search-trigger" aria-label="Open search" aria-expanded={searchOpen} aria-controls="menu-search-field" onClick={() => { setSearchOpen(true); requestAnimationFrame(() => searchInputRef.current?.focus()); }}><Search size={21} aria-hidden="true" /></button>
        <div id="menu-search-field" className="menu-search"><Search size={20} aria-hidden="true" /><input ref={searchInputRef} type="search" aria-label="Search menu items" placeholder="Search treats..." value={query} onChange={(event) => search(event.target.value)} />{query && <button type="button" aria-label="Clear search" onClick={() => search("")}><X size={18} aria-hidden="true" /></button>}</div>
      </div>
      <div className="category-filter" ref={categoryRef} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}><span className="category-filter-title">Category</span><div className="category-select"><button ref={triggerRef} type="button" className="category-select-trigger" aria-label={`Category: ${selected}`} aria-expanded={open} aria-haspopup="listbox" aria-controls="category-options" onClick={() => open ? setOpen(false) : showOptions()} onKeyDown={(event) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); showOptions(categories.indexOf(selected)); } }}><span className="category-select-icon"><SelectedIcon size={19} aria-hidden="true" /></span><span>{selected}</span><span className="category-select-chevron"><ChevronDown size={18} aria-hidden="true" /></span></button>{open && <div id="category-options" className={`category-options${openAbove ? " open-above" : ""}`} style={{ maxHeight: panelMaxHeight }} role="listbox" aria-label="Categories">{categories.map((category, index) => { const Icon = categoryIcons[category]; return <button key={category} ref={(element) => { optionRefs.current[index] = element; }} type="button" role="option" aria-label={category} aria-selected={selected === category} className="category-option" onClick={() => select(category)} onKeyDown={(event) => optionKeyDown(event, index)}><span className="category-option-icon"><Icon size={18} aria-hidden="true" /></span><span>{category}</span><span className="category-option-count" aria-hidden="true">{filterProducts(category).length}</span></button>; })}</div>}</div></div>
    </div>
    <p className="result-count" aria-live="polite">{visible.length} {visible.length === 1 ? "treat" : "treats"} to explore</p>
    {visible.length ? <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h2>{query.trim() ? "No treats found." : "Fresh ideas are on the way."}</h2><p>{query.trim() ? "Try a different name or description." : "No items are shown for this category yet."}</p><button className="button" onClick={() => query ? search("") : select("All")}>{query ? "Clear search" : "Show everything"}</button></div>}
  </>;
}
