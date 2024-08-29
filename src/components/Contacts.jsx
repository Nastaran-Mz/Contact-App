import { useState } from "react";
import { Contactslist } from "./Contactslist";

export function Contacts() {
    const [contacts,SetContacts] = useState ([]);
    const [alert,SetAllert] = useState ("");
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
        SetContacts ((contacts) =>[...contacts,contact]);
        SetContact ({
            name: '',
            lastName: '',
            email: '',
            phone: '',
        }) ;
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
                <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler} />
                <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler} />
                <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler} />
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div>{alert && <p>{alert}</p>}</div>
            <Contactslist contacts={contacts} />
        </>
    )

}

export default Contacts;