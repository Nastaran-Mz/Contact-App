import { useState } from "react";
import { Contactslist } from "./Contactslist";
import inputs from "../constans/input";


export function Contacts() {
    const [contacts, SetContacts] = useState([]);
    const [alert, SetAllert] = useState("");
    const [contact, SetContact] = useState({
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
        SetContacts((contacts) => [...contacts, contact]);
        SetContact({
            name: '',
            lastName: '',
            email: '',
            phone: '',
        });
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
            <Contactslist contacts={contacts} />
        </>
    )

}

export default Contacts;