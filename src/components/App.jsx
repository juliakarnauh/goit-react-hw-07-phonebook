import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export const App = () => {
  return (
    <>
    <ContactForm />
      <Filter />
      <ContactList/>
    </>
  );
};