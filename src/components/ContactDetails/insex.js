import { data } from 'autoprefixer';
import { useLocation } from 'react-router-dom';

const ContactDetails = (props) => {
  const location = useLocation();
  const data = location.state.contact;
  return (
    <>
      <div>
        <p>name : {data.name}</p>
        <p>email : {data.email} </p>
      </div>
    </>
  );
};

export default ContactDetails;
