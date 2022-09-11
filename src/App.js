import './App.css';
import { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ContactDetails from '../src/components/ContactDetails/insex';

function App() {
  const [contacts, setContacts] = useState([]);
  const redirect = useNavigate();

  const addContactHandler = (contact) => {
    if (!contact.name || !contact.email) {
      alert('please enter a name or email address');
      return;
    }
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 1000), ...contact },
    ]);
    localStorage.setItem(
      'contacts',
      JSON.stringify([
        ...contacts,
        { id: Math.ceil(Math.random() * 1000), ...contact },
      ])
    );
    redirect('/contact');
  };

  const deleteContactHandler = (id) => {
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
    localStorage.setItem('contacts', JSON.stringify([...filteredContact]));
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(savedContacts ?? []);
  }, []);

  return (
    <main className='App'>
      <h1 className='text-black font-semibold py-5'>Contact App</h1>
      <Routes>
        <Route path='/user/:id' element={<ContactDetails />}   />
        <Route
          path='/'
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path='/contact'
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
