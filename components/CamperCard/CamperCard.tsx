import Image from 'next/image';
import css from '@/components/CamperCard/Campercard.module.css';
import Button from '../Button/Button';
import { Camper } from '@/types/campers';
import Features from '../Features/Features';
import BoxRating from '../BoxRating/BoxRating';
import Link from 'next/link';
import { useCampersStore } from '@/lib/store/useCampersStore';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const favorites = useCampersStore((s) => s.favorites);
  const toggleFavorite = useCampersStore((s) => s.toggleFavorite);
  const isFav = favorites.includes(camper.id);

  return (
    <div className={css.card}>
      <Image
        src={camper.gallery[0]?.thumb || '/placeholder.png'}
        alt={camper.name}
        width={292}
        height={320}
        className={css.image}
      />
      <div className={css.info}>
        <div className={css.box}>
          <h3 className={css.name}>{camper.name}</h3>
          <div className={css.boxRight}>
            <p className={css.price}>€{camper.price}.00</p>
            <svg
              className={`${css.icon} ${isFav ? css.activeHeart : ''}`}
              height={26}
              width={24}
              onClick={() => toggleFavorite(camper.id)}
            >
              <use href="/images/icons.svg#icon-heart"></use>
            </svg>
          </div>
        </div>
        <BoxRating camper={camper} />
        <p className={css.desc}>{camper.description}</p>
        <Features camper={camper} />
        <Link href={`/catalog/${camper.id}`} passHref>
          <Button size="m">Show more</Button>
        </Link>
      </div>
    </div>
  );
}
