import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/" aria-label="Home">
        Home
      </Link>
      <Link href="/catalog" aria-label="Catalog">
        Catalog
      </Link>
    </div>
  );
}
