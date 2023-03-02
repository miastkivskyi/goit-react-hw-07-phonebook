import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getVisibleUsers } from '../../redux/selectors';
import { RiDeleteBinLine } from 'react-icons/ri';
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
          <div className={css.contact}>
            <p>{name}</p>
            <p className={css.phone}>: {phone}</p>
          </div>
          <button
            type="button"
            onClick={() => onDeleteUser(id)}
            className={css.button}
          >
            <RiDeleteBinLine />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
