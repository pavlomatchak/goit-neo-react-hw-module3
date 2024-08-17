import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ item, deleteItem}) => {
  return (
    <div className={css.item}>
      <div>
        <p><span>&#128100;</span> {item.name}</p>

        <p><span>&#9742;</span> {item.number}</p>
      </div>

      <button
        type="button"
        onClick={() => deleteItem(item.id)}>
          Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Contact;
