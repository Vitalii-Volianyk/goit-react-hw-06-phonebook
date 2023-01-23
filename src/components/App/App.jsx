import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { addContacts, removeContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const contacts = useSelector(state => state.contacts.items);

  const addName = ({ name, number }) => {
    const names = contacts.map(contact => contact.name);
    if (names.indexOf(name) >= 0) {
      alert(name + ' is already in contacts');
      return;
    }
    dispatch(addContacts({ name, number, id: nanoid() }));
  };
  const removeContact = id => {
    dispatch(removeContacts(id));
  };
  const handleFilter = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addName} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={getVisibleContacts()} onRemove={removeContact} />
    </div>
  );
};

export default App;
