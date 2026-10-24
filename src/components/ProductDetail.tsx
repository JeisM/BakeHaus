"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Send } from "lucide-react";
import { formatPHP, getProductImage, type Product, type ProductComment } from "@/data/products";
import { ProductIllustration } from "@/components/ProductIllustration";

export function ProductDetail({ product }: { product: Product }) {
  const [newComments, setNewComments] = useState<ProductComment[]>([]);
  const [status, setStatus] = useState("");
  const comments = [...product.comments, ...newComments];
  const image = getProductImage(product);

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
    setStatus("Your comment was added.");
    form.reset();
  }

  return <section className="section container product-detail-page">
    <Link href="/menu" className="text-link back-link"><ArrowLeft size={17} aria-hidden="true" /> Back to menu</Link>
    <div className="product-detail-layout">
      <div className={`product-detail-art product-art--${product.tone}`}>{image ? <Image src={image} alt={product.name} fill priority sizes="(max-width: 700px) 100vw, 50vw" /> : <ProductIllustration product={product} />}</div>
      <div className="detail-panel">
        <p className="product-category">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-description">{product.description}</p>
        <div className="detail-meta"><strong>{formatPHP(product.pricePHP)}</strong><span aria-label={`Rating ${product.rating} out of 5`}><Star size={18} aria-hidden="true" /> {product.rating.toFixed(1)}</span></div>
      </div>
    </div>
    <section className="comments-panel" aria-labelledby="comments-heading">
        <h2 id="comments-heading">A little word from you.</h2><p className="comments-subtitle">Comments</p>
        <ul className="comment-list">{comments.map((comment, index) => <li key={`${comment.name}-${comment.message}-${index}`}><span className="comment-avatar" aria-hidden="true">{comment.name.charAt(0)}</span><strong>{comment.name}</strong><span className="comment-message">{comment.message}</span></li>)}</ul>
        <form className="comment-form" onSubmit={submitComment}>
          <label>Your name<input name="name" autoComplete="name" placeholder="Your name" /></label>
          <label>Leave a comment<textarea name="comment" rows={3} placeholder="Share a little joy…" /></label>
          <button className="button comment-submit" type="submit" aria-label="Post comment"><Send size={18} aria-hidden="true" /> Send</button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
    </section>
  </section>;
}
