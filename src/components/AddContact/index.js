import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    addContactHandler(contact)
    setContact({ name: "", email: "" })
    // push to home
  }

  return (
    <>
      <form onSubmit={submitForm} className='w-full flex flex-col justify-center items-center	 my-5	border-x-4 border-indigo-500  '>
        <div className='form-control w-full px-6 md:max-w-[600px]'>
          <label className='label'>
            <span className='label-text text-gray-800'>
              What is your contact name?
            </span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            name='name'
            className='input input-md  border-2 border-blue-800 w-full bg-gray-100 hover:border-2 hover:border-blue-200  focus:bg-white'
            value={contact.name}
            onChange={changeHandler}
          />
          <label className='label'>
            <span className='label-text text-gray-700'>
              What is your contact email address?
            </span>
          </label>
          <input
            type='email'
            placeholder='Type here'
            name='email'
            className='input input-md  border-2 border-blue-800 w-full bg-gray-100 hover:border-2 hover:border-blue-200 my-2 focus:bg-white'
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <div className=' mt-5 flex justify-between w-full px-6  md:max-w-[600px]'>
          <button type="submit" className={`btn w-[60%] md:w-[75%] ${!isLoading ? 'btn-primary' : "loading"}`}>{!isLoading ? "Add Contact" : "Please wait..."}</button>
          <NavLink to={"/contact"}>
            <button type="button" className="btn btn-secondary">Contact List</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default AddContact;
