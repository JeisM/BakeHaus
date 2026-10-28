"use client";

import { useEffect, useRef } from "react";
import { BrandMark } from "@/components/BrandLogo";

const STORAGE_KEY = "bakehaus-demo-notice-seen";

export function DemoNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "true") return;
    } catch {
      // Show the notice when browser storage is unavailable.
    }

    dialog.showModal();
  }, []);

  function rememberDismissal() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The dialog still closes when browser storage is unavailable.
    }
  }

  return (
    <dialog ref={dialogRef} className="demo-notice" aria-labelledby="demo-notice-title" onClose={rememberDismissal}>
      <div className="demo-notice-brand" aria-label="BAKEHAUS">
        <BrandMark className="demo-notice-mark" />
        <span>BAKE<span className="demo-notice-brand-accent">HAUS</span></span>
      </div>
      <h2 id="demo-notice-title">A quick note before you browse</h2>
      <p>This is a demo site. Product prices, ratings, and comments are examples. Contact messages aren’t delivered, and new comments reset when you leave.</p>
      <button className="button demo-notice-dismiss" type="button" onClick={() => dialogRef.current?.close()}>
        Continue to BakeHaus
      </button>
    </dialog>
  );
}
