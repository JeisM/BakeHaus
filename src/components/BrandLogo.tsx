import Link from "next/link";

function CroissantMark() {
  return <svg className="logo-mark" viewBox="22 24 488 200" aria-hidden="true" focusable="false">
    <path fill="var(--orange)" d="M29 184c4-13 18-20 33-15 18 6 31 16 45 24l-65 20c-9-7-15-18-13-29Z" />
    <path fill="var(--orange)" d="M63 149c13-30 35-54 68-61l29 32-32 60-65-31Z" />
    <path fill="var(--orange)" d="M143 91c4-20 23-32 43-30 9 1 18 4 26 8l16 105-48 17-20-51-17 17-1-66Z" />
    <path fill="var(--orange)" d="M212 63c11-13 30-16 49-15 25 0 40 14 37 35l-11 96-45 6-24-96 10 84-16-110Z" />
    <path fill="var(--orange)" d="M306 75c30 0 55 5 69 22 6 7 6 16 1 25l-38 71-41-14 9-104Z" />
    <path fill="var(--orange)" d="M381 124c28 13 46 29 46 54 0 17-8 29-21 40l-62-21 37-73Z" />
    <path fill="var(--orange)" d="M443 177c13 5 19 13 15 22-6 14-26 19-49 18l34-40Z" />
    <path fill="var(--pink)" d="M425 49c11-16 28-21 40-12 16 12 10 32-3 46l-43 25-33-39c-9-11-5-28 8-36 13-8 25 0 31 16Z" />
    <path fill="var(--pink)" d="M456 139c8-11 27-22 43-25 5-1 4 4 0 8-12 11-28 20-42 23-5 1-6-1-1-6Z" />
    <path fill="var(--pink)" d="M454 153c13 0 29 7 36 16 4 5 0 6-5 5-16-4-28-10-35-17-2-3 0-4 4-4Z" />
  </svg>;
}

export function BrandLogo() {
  return <Link className="logo" href="/" aria-label="BakeHaus home"><CroissantMark /><span className="logo-wordmark">BAKE<span className="logo-accent">HAUS</span></span></Link>;
}
