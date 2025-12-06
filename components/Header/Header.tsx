// 'use client';
import Link from 'next/link';
import css from '@/components/Header/Header.module.css';
// import { useRouter } from 'next/router';
export default function Header() {
  // const router = useRouter(); // Отримуємо поточний шлях

  // // Функція для перевірки, чи є поточний шлях активним
  // const isActive = (path: string) =>
  //   router.pathname === path ? css.active : '';
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
