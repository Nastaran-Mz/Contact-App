
import Contactitem from "./Contactitem"; 


// eslint-disable-next-line react/prop-types
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
