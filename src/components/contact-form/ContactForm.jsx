import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const Contact = ({ initialValues, onFormSubmit }) => {
  const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Name is required"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in the format 123-45-56').required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={FormSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            type="text"
            name="name" />

          <ErrorMessage
            name="name"
            component="span"
            className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field
            type="text"
            name="number" />

          <ErrorMessage
            name="number"
            component="span"
            className={css.error} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

Contact.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Contact;
