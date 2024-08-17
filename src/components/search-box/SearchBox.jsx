import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const Contact = ({ filter, onFilterChange }) => {
  return (
    <div className={css.search}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={e => onFilterChange(e.target.value)} />
      </label>
    </div>
  );
};

Contact.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Contact;
