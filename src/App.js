import './App.css';
import { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {

  const [contacts, setContacts] = useState([]);
  const redirect = useNavigate()

  const addContactHandler = (contact) => {
    if (contact.name === '' && contact.email === '') {
      alert('Please enter a name or email address');
    } else {
      setContacts([
        ...contacts,
        { id: Math.ceil(Math.random() * 1000), ...contact },
      ]);
      redirect("/contact")
    }
  };

  const deleteContactHandler = (id) => {
    const filteredContact = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContact)
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'))
    setContacts(savedContacts)
  }, [])

  useEffect(() => {
    if (contacts.length !== 0) localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  return (
    <main className='App'>
      <h1 className='text-black font-semibold py-5'>Contact App</h1>
      <Routes>
        <Route path='/' element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path='/contact' element={<ContactList allContacts={contacts} onDelete={deleteContactHandler} />} />
      </Routes>
    </main>
  );
}

export default App;
