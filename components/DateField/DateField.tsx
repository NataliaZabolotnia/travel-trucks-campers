import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import css from '@/components/DateField/DateField.module.css';

export default function DateField() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selected={date}
      onChange={(val) => setDate(val)}
      placeholderText="Booking date*"
      className={css.date}
      dateFormat="dd.MM.yyyy"
    />
  );
}
