"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Croissant, Send } from "lucide-react";
import { formatPHP, products, type Product, type ProductComment } from "@/data/products";

export function ProductDetail({ product }: { product: Product }) {
  const [newComments, setNewComments] = useState<ProductComment[]>([]);
  const [status, setStatus] = useState("");
  const comments = [...product.comments, ...newComments];
  const showProductImage = products.find((candidate) => candidate.image === product.image)?.id === product.id;

  function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const comment = String(data.get("comment") ?? "").trim();
    if (!name || !comment) {
      setStatus("Add your name and a comment before posting.");
      return;
    }
    setNewComments((current) => [...current, { name, message: comment }]);
    setStatus("Your comment was added. It will reset when the page refreshes.");
    form.reset();
  }

  return <section className="section container product-detail-page">
    <Link href="/menu" className="text-link back-link"><ArrowLeft size={17} aria-hidden="true" /> Back to menu</Link>
    <div className="product-detail-layout">
      <div className={`product-detail-art product-art--${product.tone}`}>{showProductImage && product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 50vw" /> : <span>{product.name}</span>}</div>
      <div className="detail-panel">
        <p className="eyebrow">PRODUCT DETAILS</p>
        <p className="product-category">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-description">{product.description} This item is priced at {formatPHP(product.pricePHP)}.</p>
        <div className="detail-meta"><strong>{formatPHP(product.pricePHP)}</strong><span aria-label={`Rating ${product.rating} out of 5`}><Croissant size={18} aria-hidden="true" /> {product.rating}</span></div>
        <h2>Comments</h2>
        <ul className="comment-list">{comments.map((comment, index) => <li key={`${comment.name}-${comment.message}-${index}`}><strong>{comment.name}</strong><span>{comment.message}</span></li>)}</ul>
        <form className="comment-form" onSubmit={submitComment}>
          <label>Your name<input name="name" /></label>
          <label>Leave a comment<textarea name="comment" rows={3} /></label>
          <button className="send-comment" type="submit" aria-label="Send comment" title="Send comment"><Send size={18} aria-hidden="true" /></button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
    </div>
  </section>;
}
