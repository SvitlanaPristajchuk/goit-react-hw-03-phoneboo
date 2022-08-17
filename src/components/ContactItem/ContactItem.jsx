import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';


function ContactItem ({ contact,  deleteContact }) {

        return (
          <li className={s.item}>
          <span className={s.name}>{contact.name}: </span>
          <a href={`tel:${contact.number}`} className={s.number}>
            {contact.number}
          </a>
          <button
            className={s.button}
            type="button"
            onClick={() =>  deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
          
        );
    };

  

ContactItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func.isRequired,

};

  export default ContactItem;