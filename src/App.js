import { Component } from 'react';
import ContactForm from './components/contactform/ContactForm';
import ContactList from './components/contactlist/ContactList';
import Filter from './components/filter/Filter';
import './styles.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
