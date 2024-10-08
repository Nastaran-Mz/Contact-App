import { useState } from "react";
import Contactslist from "./Contactslist";
import inputs from "../constans/input";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

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
            SetAllert("Please enter valid data!");
            return;
        }
        SetAllert("");
        const newContact = {...contact , id: v4()}
        SetContacts((contacts) => [...contacts, newContact]);
        SetContact({
            name: '',
            lastName: '',
            email: '',
            phone: '',
        });
    }

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        SetContacts(newContacts);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input, index) => (
                    <input 
                        key={index}
                        type={input.type} 
                        placeholder={input.placeholder} 
                        name={input.name} 
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
            <Contactslist 
                contacts={contacts} 
                SetContacts={SetContacts} 
                deleteHandler={deleteHandler}
            />
        </div>
    )
}

export default Contacts;