'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField, useFormikContext } from 'formik';
import { ErrorMessage } from 'formik';
import css from '@/components/DateField/DateField.module.css';

export default function DateField() {
  const { setFieldValue } = useFormikContext();
  const [field] = useField('date');

  return (
    <div>
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={(val) => setFieldValue('date', val)}
        placeholderText="Booking date*"
        className={css.date}
        dateFormat="dd.MM.yyyy"
      />
      <ErrorMessage name="date" component="div" className={css.error} />
    </div>
  );
}
