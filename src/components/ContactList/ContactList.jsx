import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getVisibleUsers } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleUsers);
  const dispatch = useDispatch();

  const onDeleteUser = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <p className={css.contact}>
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => onDeleteUser(id)}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
