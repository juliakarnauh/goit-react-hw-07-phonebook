import { Title, Form, Input, Label, Button } from './ContactForm.styled';
import { addContact } from 'redux/contactsOperations';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts} from 'redux/contactSelectors';
export const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    if (contacts.find(contact => contact.name === name||contact.phone === phone )){
      Notify.failure(`Contact with such data have already existed!`);
      e.target.reset();
      return;
    }
    e.target.reset();
    dispatch(addContact({name: name, phone: phone, }));
    Notify.info(`Contact ${name} added`)
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button>Add contact</Button>
      </Form>
    </>
  );
};