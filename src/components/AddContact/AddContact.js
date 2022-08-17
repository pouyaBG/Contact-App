import { useState } from 'react';

const AddContact = () => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className='w-full flex flex-col justify-center items-center	 my-10	border-x-4 border-indigo-500  '>
        <div className='form-control w-full max-w-xs'>
          <label class='label'>
            <span class='label-text text-gray-700'>
              What is your contact name?
            </span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            name='name'
            className='input input-md  border-2 border-blue-800 w-full bg-gray-100 hover:border-2 hover:border-blue-700 min-w-100'
            value={contact.name}
            onChange={changeHandler}
          />
          <label class='label'>
            <span class='label-text text-gray-700'>
              What is your contact email?
            </span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            name='email'
            className='input input-md  border-2 border-blue-800 w-full bg-gray-100 hover:border-2 hover:border-blue-700 my-2'
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
      </form>
    </>
  );
};

export default AddContact;
