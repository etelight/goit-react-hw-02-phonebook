import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  ContactFieled,
  ContactFormStyled,
  ContactError,
  ContactLable,
  ContactButton,
} from './ContactForm.styled';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().min(6).max(10).required('* Number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <ContactFormStyled autoComplete="off">
        <ContactLable>
          Name
          <ContactFieled type="text" name="name" placeholder="Enter name" />
          <ContactError>
            <ErrorMessage omponent="div" name="name" />
          </ContactError>
        </ContactLable>
        <ContactLable>
          Number
          <ContactFieled type="tel" name="number" placeholder="Enter phone" />
          <ContactError>
            <ErrorMessage omponent="div" name="number" />
          </ContactError>
        </ContactLable>

        <ContactButton type="submit">Add contact</ContactButton>
      </ContactFormStyled>
    </Formik>
  );
};
