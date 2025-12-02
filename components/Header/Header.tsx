import Link from 'next/link';
import css from '@/components/Header/Header.module.css';

export default function Header() {
  return (
    <div className={css.headerContent}>
      <svg className={css.icon} width="136" height="16" aria-hidden="true">
        <use href="/images/icons.svg#icon-Logo"></use>
      </svg>
      <nav className={css.headerNav}>
        <Link href="/" aria-label="Home">
          Home
        </Link>
        <Link href="/catalog" aria-label="Catalog">
          Catalog
        </Link>
      </nav>
    </div>
  );
}
