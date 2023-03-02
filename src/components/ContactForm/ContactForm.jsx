/* eslint-disable no-unreachable */
import React from 'react';
import { addContacts } from 'redux/operations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const checkContactExist = (name, number) => {
    return (
      contacts &&
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };

    if (checkContactExist(name, number)) {
      alert(
        `${name} is already in contacts or ${number} is used with another contact`
      );
      return;
    }
    dispatch(addContacts(newContact));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <span className={css.icon}>
            <FaUser />
          </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={event => setName(event.target.value)}
            className={css.inputForm}
            placeholder="Name"
          />
        </label>

        <label className={css.label}>
          <span className={css.icon}>
            <FaPhone />
          </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={event => setNumber(event.target.value)}
            className={css.inputForm}
            placeholder="Number"
          />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
