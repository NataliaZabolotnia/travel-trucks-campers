import css from '@/components/Features/Features.module.css';
import { Camper } from '@/types/campers';

interface Props {
  camper: Camper;
}

export default function Features({ camper }: Props) {
  const features = [
    camper.AC && { name: 'AC', icon: 'icon-AC' },
    camper.bathroom && { name: 'Bathroom', icon: 'icon-bathroom' },
    camper.kitchen && { name: 'Kitchen', icon: 'icon-kitchen' },
    camper.TV && { name: 'TV', icon: 'icon-tv' },
    camper.radio && { name: 'Radio', icon: 'icon-radio' },
    camper.refrigerator && { name: 'Refrigerator', icon: 'icon-refrigerator' },
    camper.microwave && { name: 'Microwave', icon: 'icon-microwave' },
    camper.gas && { name: 'Gas', icon: 'icon-gas' },
    camper.water && { name: 'Water', icon: 'icon-water' },
  ].filter((feature): feature is { name: string; icon: string } =>
    Boolean(feature),
  );
  return (
    <div className={css.features}>
      {features.map((feature) => (
        <span key={feature.name} className={css.featureBtn}>
          <svg className={css.icon} width={20} height={20}>
            <use href={`/images/icons.svg#${feature.icon}`}></use>
          </svg>
          {feature.name}
        </span>
      ))}
    </div>
  );
}
