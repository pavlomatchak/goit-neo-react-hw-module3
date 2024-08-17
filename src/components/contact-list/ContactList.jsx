import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from '../contact/Contact';

const ContactList = ({ phoneBook, deleteItem }) => {
  return (
    <div className={css.list}>
      { phoneBook.map(item => <Contact
        key={item.id}
        item={item}
        deleteItem={deleteItem} />) }
    </div>
  );
};

ContactList.propTypes = {
  phoneBook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ContactList;
