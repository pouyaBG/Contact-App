import { NavLink } from "react-router-dom"
const ContactList = ({ allContacts, onDelete }) => {
  return (
    <>
      <div className="w-full">
        <NavLink to={"/"}>
          <button className="btn btn-accent">Back to Add Contact</button>
        </NavLink>
      </div>
      {allContacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div className="flex flex-col justify-between w-full  items-center border-red-500 border-l-4 border-r-4" key={id} >
            <div className="flex w-full px-6 items-center  justify-between md:max-w-[600px] text-black">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                </svg>
                <div className="flex flex-col justify-between ml-6 items-start">
                  <p>name: {name}</p>
                  <p>email: {email}</p>
                </div>
              </div>
              <button type="submit" className="btn btn-error mt-5" onClick={() => onDelete(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
    ;
};

export default ContactList;
