import css from './Filter.module.css';
import { PropTypes } from 'prop-types';
import { setStatusFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const handleFilter = e => {
    dispatch(setStatusFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;
