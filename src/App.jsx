import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
} from 'components/redux/Slices/contactsSlice';
import { setFilter } from 'components/redux/Slices/filterSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts.items); // Accesează `items` din `contacts`
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles['app-container']}>
      <div className={styles['camera-hole']}></div>
      <div className={styles['screen']}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
