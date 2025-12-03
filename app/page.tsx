import css from './page.module.css';
import Button from '@/components/Button/Button';
export default function TravelTrucks() {
  return (
    <main>
      <section className={css.hero}>
        <div className={css.pageContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.descr}>
            You can find everything you want in our catalog
          </p>
          {/* <button type="button" className={css.btnViewNow}>
            View Now
          </button> */}
          <Button size="l">View Now</Button>
        </div>
      </section>
    </main>
  );
}
