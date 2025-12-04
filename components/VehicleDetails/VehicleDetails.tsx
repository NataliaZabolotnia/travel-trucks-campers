import css from './VehicleDetails.module.css';
import { Camper } from '@/types/campers';

export default function VehicleDetails({ camper }: { camper: Camper }) {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Vehicle Details</h3>
      <div className={css.line}></div>
      <ul className={css.table}>
        <li>
          <span className={css.det}>Form</span>
          <span>{camper.form}</span>
        </li>
        <li>
          <span className={css.det}>Length</span>
          <span>{camper.length} m</span>
        </li>
        <li>
          <span className={css.det}>Width</span>
          <span className={css.det}>{camper.width} m</span>
        </li>
        <li>
          <span className={css.det}>Height</span>
          <span className={css.det}>{camper.height} m</span>
        </li>
        <li>
          <span className={css.det}>Tank</span>
          <span className={css.det}>{camper.tank}</span>
        </li>
        <li>
          <span className={css.det}>Consumption</span>
          <span className={css.det}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
