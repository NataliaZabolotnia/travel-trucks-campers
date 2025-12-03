import Image from 'next/image';
import css from '@/components/CamperCard/Campercard.module.css';
import Button from '../Button/Button';
import { Camper } from '@/types/campers';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
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
            <p className={css.price}>€{camper.price}</p>
            <svg className={css.icon} height={26} width={24}>
              <use href="/images/icons.svg#icon-heart"></use>
            </svg>
          </div>
        </div>
        <div className={css.boxRating}>
          <div className={css.ratingStar}>
            <svg className={css.icon} height={16} width={16}>
              <use href="/images/icons.svg#icon-star"></use>
            </svg>
            <p className={css.rating}>Rating: {camper.rating}</p>
            <p className={css.reviews}>({camper.reviews.length} Reviews)</p>
          </div>
          <div className={css.boxLocation}>
            <svg className={css.icon} height={16} width={16}>
              <use href="/images/icons.svg#icon-vector"></use>
            </svg>
            <p className={css.location}>{camper.location}</p>
          </div>
        </div>
        <p className={css.desc}>{camper.description}</p>
        <div className={css.features}>
          {(
            [
              camper.AC && { name: 'AC', icon: 'icon-AC' },
              camper.bathroom && { name: 'Bathroom', icon: 'icon-bathroom' },
              camper.kitchen && { name: 'Kitchen', icon: 'icon-kitchen' },
              camper.TV && { name: 'TV', icon: 'icon-tv' },
              camper.radio && { name: 'Radio', icon: 'icon-radio' },
              camper.refrigerator && {
                name: 'Refrigerator',
                icon: 'icon-refrigerator',
              },
              camper.microwave && { name: 'Microwave', icon: 'icon-microvawe' },
              camper.gas && { name: 'Gas', icon: 'icon-gas' },
              camper.water && { name: 'Water', icon: 'icon-water' },
            ] as { name: string; icon: string }[]
          )
            .filter(Boolean)
            .map((feature) => (
              <span key={feature.name} className={css.featureBtn}>
                <svg className={css.icon} width={20} height={20}>
                  <use href={`/images/icons.svg#${feature.icon}`}></use>
                </svg>
                {feature.name}
              </span>
            ))}
        </div>

        <Button size="m">Show more</Button>
      </div>
    </div>
  );
}
