import css from '@/components/BoxRating/BoxRating.module.css';
import { Camper } from '@/types/campers';

interface CamperProps {
  camper: Camper;
}

export default function BoxRating({ camper }: CamperProps) {
  return (
    <div className={css.boxRating}>
      <div className={css.ratingStar}>
        <svg className={css.iconStar} height={16} width={16}>
          <use href="/images/icons.svg#icon-star"></use>
        </svg>
        <p className={css.rating}> Rating: {camper.rating}</p>
        <p className={css.reviews}>({camper.reviews.length} Reviews)</p>
      </div>
      <div className={css.boxLocation}>
        <svg className={css.icon} height={16} width={16}>
          <use href="/images/icons.svg#icon-vector"></use>
        </svg>
        <p className={css.location}>{camper.location}</p>
      </div>
    </div>
  );
}
