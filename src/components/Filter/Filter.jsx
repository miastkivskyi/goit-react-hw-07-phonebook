import { setFilter } from '../../redux/filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };

  return (
    <>
      <label htmlFor="findInputId" className={css.container}>
        <div className={css.inputContainer}>
          <input
            type="text"
            name="filterContact"
            id="findInputId"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={filter}
            onChange={e => onFilterChange(e.target.value)}
            className={css.inputFind}
            placeholder="Find contacts by name..."
          />
        </div>
      </label>
    </>
  );
};

export default Filter;
