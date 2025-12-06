import css from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
export default function TravelTrucks() {
  return (
    <main>
      <section className={css.hero}>
        <div className={css.pageContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.descr}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" passHref>
            <Button size="l">View Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
