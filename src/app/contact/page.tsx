"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { BakeryArt } from "@/components/BrandArt";
export default function ContactPage() {
const [status, setStatus] = useState("");
const submit = (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();
const form = event.currentTarget;
const data = new FormData(form);
if (!["name", "email", "subject", "message"].every((key) => String(data.get(key) ?? "").trim())) {
setStatus("Please complete every field before submitting.");
form.querySelector<HTMLInputElement | HTMLTextAreaElement>(":invalid")?.focus();
return;
}
if (!form.checkValidity()) { setStatus("Please enter a valid email address."); form.querySelector<HTMLInputElement>(":invalid")?.focus(); return; }
setStatus("Thank you for your note.");
};
return <section className="section container contact"><div className="contact-layout"><div className="contact-copy"><p className="eyebrow">Let&apos;s talk treats</p><h1>We&apos;d love to hear from you.</h1><p className="lede">Have a question? Leave us a note.</p><div className="contact-decoration"><BakeryArt /></div></div><form onSubmit={submit} noValidate><div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><label>Subject<input name="subject" placeholder="What’s on your mind?" required /></label><label>Message<textarea name="message" rows={5} placeholder="Tell us a little more…" required /></label><button className="button" type="submit" aria-label="Send message"><Send size={17} aria-hidden="true" /> Send</button><p className="form-status" role="status">{status}</p></form></div></section>;
}
