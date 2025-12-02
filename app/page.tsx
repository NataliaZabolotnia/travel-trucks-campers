import css from './page.module.css';

export default function TravelTrucks() {
  return (
    <main>
      <section className={css.hero}>
        <div className={css.pageContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.descr}>
            You can find everything you want in our catalog
          </p>
          <button type="button" className={css.btnViewNow}>
            View Now
          </button>
        </div>
        {/* <Image
          src="/images/picture.jpg"
          alt="Hero Image"
          width={1440}
          height={896}
          className={css.hero_image}
        /> */}
      </section>
    </main>
  );
}
