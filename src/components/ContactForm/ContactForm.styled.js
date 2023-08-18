import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const ContactFormStyled = styled(Form)`
  padding: 10px;
`;
export const ContactFieled = styled(Field)`
  padding: 8px 8px 8px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  width: 100%;
`;
export const ContactError = styled.div`
  color: red;
  font-size: 15px;
`;
export const ContactLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
`;
export const ContactButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  &:hover {
    background-color: green;
    color: white;
    transform: scale(1.02);
  }
`;
