import Link from 'next/link';

export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div>
        <p className="v2-footer-line">The moment ends. The story stays.</p>
        <p>Copyright 2026 AFTERSTORY / Amelia Enterprises</p>
      </div>
      <div className="v2-footer-links">
        <a href="mailto:afterstory@gmail.com">Contact</a>
        <a
          href="https://wa.me/9161666633"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <Link href="/v2/policies">Shipping &amp; returns</Link>
        <Link href="/v2/policies">Policies</Link>
      </div>
    </footer>
  );
}
