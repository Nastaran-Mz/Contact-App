import Contactitem from "./Contactitem"; 
import styles from "./Contactslist.module.css";

// eslint-disable-next-line react/prop-types
function Contactslist({ contacts , deleteHandler}) {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {contacts.length ? (
                <ul className={styles.contacts}>
                    {contacts.map((contact) => (
                        <Contactitem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                    ))}
                </ul>
            ) : (
                <p className={styles.message}>No Contacts Yet!</p>
            )}
        </div>
    );
}

export default Contactslist;
