import { data } from 'autoprefixer';
import { NavLink, useLocation } from 'react-router-dom';

const ContactDetails = () => {
  const location = useLocation();
  const data = location.state.contact;
  return (
    <>
      <section className='w-full'>
        <div className='md:w-[100%] lg:w-[70%] m-auto  card card-side bg-base-100 shadow-xl'>
          <figure className='hidden md:block lg:w-[42%] md:w-[50%]'><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
          <div className='card-body'>
            <h2 className='card-title text-[20px]'>Contact Details</h2>
            <div className='flex items-start flex-col'>
              <p className='text-[16px] '>Name: <span className='font-[700] text-white'>{data.name}</span></p>
              <p className='text-[16px] '>Emal: <span className='font-[700] text-white'>{data.email}</span></p>
            </div>
            <div className='card-actions justify-end'>
              <NavLink to={'/'}>
                <button className='btn btn-primary'>Main Page</button>
              </NavLink>
            </div>
            <div className='card-actions justify-end'>
              <NavLink to={'/contact'}>
                <button className='btn btn-primary'>Contact List</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
