import './App.css';
import { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ContactDetails from './components/ContactDetails';
import { getContacts } from './services/getApi';
import deleteOneContact from './services/deleteApi';
import postContact from './services/postApi';
function App() {
  const [contacts, setContacts] = useState([]);
  const redirect = useNavigate();

  const addContactHandler = async (contact) => {
    try {
      if (!contact.name || !contact.email) {
        alert('please enter a name or email address');
        return;
      }
      await postContact(contact)
      setContacts([
        ...contacts,
        { id: new Date().getTime(), ...contact },
      ]);
    } catch (error) { }
    // localStorage.setItem(
    //   'contacts',
    //   JSON.stringify([
    //     ...contacts,
    //     { id: Math.ceil(Math.random() * 1000), ...contact },
    //   ])
    // );
    redirect('/contact');
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
    } catch (error) {
    }
    // localStorage.setItem('contacts', JSON.stringify([...filteredContact]));
  };

  useEffect(() => {
    const fetchContact = async () => {
      const { data } = await getContacts()
      setContacts(data);
    }
    try {
      fetchContact()
    } catch (error) {
    }
  }, []);

  return (
    <main className='App'>
      <div className='w-full border-b-2 border-primary mb-9 rounded-b-sm'>
        <h1 className='text-black font-semibold py-5 text-[16px] md:text-[30px] '>Welcome to Contact App</h1>
      </div>
      <Routes>
        <Route path='/user/:id' element={<ContactDetails />} />
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
