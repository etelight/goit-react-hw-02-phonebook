import { ListUl, ListItem, ListBtn } from './Contactslist.styled';

import { GoXCircle } from 'react-icons/go';

export const Contactslist = ({ filteredContacts, removeContact }) => {
  return (
    <ListUl>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ListBtn onClick={() => removeContact(contact.id)}>
              <GoXCircle size={20} />
            </ListBtn>
          </ListItem>
        );
      })}
    </ListUl>
  );
};
