import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList  ({ contacts, deleteContact}) {
  return (
    <ul className={s.base}>
      {contacts().map(contact => (
        <ContactItem
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func.isRequired,

};

 export default ContactList;