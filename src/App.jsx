import { useState } from 'react'
import { defaultValues, formInitialValues } from './config';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import SearchBox from './components/search-box/SearchBox';
import './App.css'

function App() {
  const [phoneBook, setPhoneBook] = useState(() => {
    const savedPhoneBook = localStorage.getItem('phone-book');

    return JSON.parse(savedPhoneBook) || defaultValues;
  });
  const [filter, setFilter] = useState('');
  const visibleItems = phoneBook.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.includes(filter));

  function saveToStorage(arr) {
    localStorage.setItem('phone-book', JSON.stringify(arr));
  }

  function onFormSubmit(values, actions) {
    setPhoneBook(prevPhoneBook => {
      const arr = [...prevPhoneBook, {
        id: Date.now(),
        name: values.name,
        number: values.number,
      }];
      saveToStorage(arr);

      return arr;
    });
    actions.resetForm();
  }

  function onDeleteItem(itemId) {
    setPhoneBook(prevPhoneBook => {
      const arr = prevPhoneBook.filter(item => item.id !== itemId);
      saveToStorage(arr);

      return arr;
    });
  }

  return (
    <>
      <h1>Phone Book</h1>

      <ContactForm
        initialValues={formInitialValues}
        onFormSubmit={onFormSubmit} />

      <SearchBox
        filter={filter}
        onFilterChange={setFilter} />

      <ContactList
        phoneBook={visibleItems}
        deleteItem={onDeleteItem} />
    </>
  )
}

export default App
