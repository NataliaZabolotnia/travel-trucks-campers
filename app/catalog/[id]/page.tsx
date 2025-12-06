import Image from 'next/image';
import css from '@/app/catalog/[id]/page.module.css';
// import Button from '@/components/Button/Button';
import { Camper } from '@/types/campers';
// import Features from '@/components/Features/Features';
import { getCamperById } from '@/lib/api';
import BoxRating from '@/components/BoxRating/BoxRating';
import CamperTabs from '@/components/CamperTabs/CamperTabs';
// import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';

interface PageProps {
  params: { id: string | undefined };
}

const CamperDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  if (!id) return <p>22Camper not found</p>;

  let camper: Camper | null = null;
  try {
    camper = await getCamperById(id);
  } catch (err) {
    console.log('camper not found', err);
  }

  if (!camper) return <p>11Camper not found</p>;
  return (
    <section className={css.product}>
      <h1 className={css.hidden}>Title</h1>
      <div className={css.info}>
        <h3 className={css.name}>{camper.name}</h3>
        <BoxRating camper={camper} />
        <p className={css.price}>€{camper.price}</p>
      </div>
      <div className={css.gallery}>
        {camper.gallery.map((img, index) => (
          <div key={index} className={css.galleryItem}>
            <Image
              src={img.original}
              alt={`${camper.name} ${index + 1}`}
              width={400}
              height={300}
              className={css.image}
            />
          </div>
        ))}
      </div>
      <p className={css.desc}>{camper.description}</p>

      <div className={css.options}>
        <CamperTabs camper={camper} />
      </div>
    </section>
  );
};

export default CamperDetails;
