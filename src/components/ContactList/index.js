import { NavLink } from 'react-router-dom';
import Contact from './Contact';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className='w-full'>
        <NavLink to={'/'}>
          <button className='btn btn-accent'>Back to Add Contact</button>
        </NavLink>
      </div>
      {contacts.map((contact, index) => {
        return <Contact contact={contact} onDelete={onDelete} key={index} />
      })}
    </>
  );
};

export default ContactList;
