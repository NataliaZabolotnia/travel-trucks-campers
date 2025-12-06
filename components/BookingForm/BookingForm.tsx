import css from '@/components/BookingForm/BookingForm.module.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Button from '../Button/Button';
import DateField from '../DateField/DateField';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';

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

const validationSchema = Yup.object({
  username: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  date: Yup.string().required('Booking date is required'),

  comment: Yup.string()
    .min(5, 'Comment must be at least 5 characters')
    .optional(),
});

export default function BookingForm() {
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>,
  ) => {
    console.log(values);
    toast.success('Your booking has been sent!');
    actions.resetForm();
  };

  return (
    <div className={css.booking}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.name}
            type="text"
            name="username"
            placeholder={'Name*'}
          />
          <ErrorMessage name="username" component="div" className={css.error} />
          <Field
            className={css.email}
            type="email"
            name="email"
            placeholder={'Email*'}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
          <DateField />

          <Field
            className={css.comment}
            as="textarea"
            name="comment"
            rows={5}
            placeholder={'Comment'}
          />
          <ErrorMessage name="comment" component="div" className={css.error} />
          <div className={css.btnWrapper}>
            <Button type="submit" size={'m'}>
              Send
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
