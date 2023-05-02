import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { ContactUl, ContactLi, ContactButton } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { selectContacts, selectFilter } from 'redux/contactSelectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsList = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactUl>
      {contactsList.map((contact) => (
        <ContactLi key={contact.id}>
          <strong>{contact.name}</strong> <p>{contact.phone}</p>
          <ContactButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </ContactButton>
        </ContactLi>
      ))}
    </ContactUl>
  );
}