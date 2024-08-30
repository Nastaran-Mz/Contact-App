import { useState } from "react";
import  Contactslist  from "./Contactslist";
import inputs from "../constans/input";
import { v4 } from "uuid";

export function Contacts() {
    const [contacts, SetContacts] = useState([]);
    const [alert, SetAllert] = useState("");
    const [contact, SetContact] = useState({
        id: '',
        name: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        SetContact((contact) => ({ ...contact, [name]: value }));
    };
    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            SetAllert(
                "Please enter valid data!"

            );
            return;

        }
        SetAllert(" ");
        const newContact = {...contact , id: v4()}
        SetContacts((contacts) => [...contacts, newContact]);
        SetContact({
            name: '',
            lastName: '',
            email: '',
            phone: '',
        });
    }

    // eslint-disable-next-line no-unused-vars
    const deleteHandler = (id)  => {
      const newContacts = contacts.filter((contact) => contact.id !== id );
      SetContacts(newContacts);
    }
    return (
        <>
            <div>
                
                   {inputs.map((input , index ) => (
                     <input 
                     key = {index}
                     type={input.type} 
                     placeholder={input.placeholder} 
                     name={input.name} 
                     value={contact[input.name]}
                     onChange={changeHandler}

                     />
                     ))}
              
              
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div>{alert && <p>{alert}</p>}</div>
            <Contactslist contacts={contacts} SetContacts={SetContacts} />
        </>
    )

}

export default Contacts;