import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

import Loader from '../Loader/loader';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from '../App/App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h1 className={css.title}>Contacts</h1>
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
}
