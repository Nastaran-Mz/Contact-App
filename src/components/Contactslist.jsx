
import Contactitem from "./Contactitem"; 


function Contactslist({ contacts , deleteHandler}) {
    return (
        <>
            <h3>Contacts List</h3>
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <Contactitem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                    ))}
                </ul>
            ) : (
                <p>No Contacts Yet!</p>
            )}
        </>
    );
}

export default Contactslist;
