import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contactslist } from './Contactslist/Contactslist';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    if (
      this.state.contacts.find(contact => contact.number === newContact.number)
    ) {
      return alert(`${newContact.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  getContact = evt => {
    const searchQuerry = evt.currentTarget.value;
    this.setState({ filter: searchQuerry });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <Section title={'Contact Form'}>
          <ContactForm onAdd={this.addContact}></ContactForm>
        </Section>
        <Section title={'Contacts'}>
          <div>
            <Filter filter={filter} getContact={this.getContact} />
          </div>
          <Contactslist
            filteredContacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
