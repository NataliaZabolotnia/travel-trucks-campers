import css from '@/components/BookingForm/BookingForm.module.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Button from '../Button/Button';
import DateField from '../DateField/DateField';

interface OrderFormValues {
  username: string;
  email: string;
  date: string;
  comment: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
  date: '',
  comment: '',
};
export default function BookingForm() {
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>,
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.booking}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.name}
            type="text"
            name="username"
            placeholder={'Name*'}
          />
          <Field
            className={css.email}
            type="email"
            name="email"
            placeholder={'Email*'}
          />
          <DateField />

          <Field
            className={css.comment}
            as="textarea"
            name="comment"
            rows={5}
            placeholder={'Comment'}
          />
          <div className={css.btnWrapper}>
            <Button size={'m'}>Send</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
