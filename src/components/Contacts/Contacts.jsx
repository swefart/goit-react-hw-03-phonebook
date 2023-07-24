import { Item, List, Text, DeleteBtn } from "./Contacts.styled";
import PropTypes from 'prop-types';


export const Contacts = ({ contacts, deleteContacts }) => {
    return (
        (<List>
            <h2>Contacts</h2>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Item key={id} name={name} number={number}>
                        <Text>{`${name}: ${number}` }</Text> <DeleteBtn onClick={e=> (deleteContacts(id))}>Delete</DeleteBtn>
                    </Item>
                    )
                })}
            </List>)
        
    )
}


Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string)
    ),
    deleteContacts: PropTypes.func,
};
