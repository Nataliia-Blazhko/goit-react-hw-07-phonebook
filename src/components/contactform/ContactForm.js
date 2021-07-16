import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addContact } from '../../redux/phonebook/phonebook-actions';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { v4 as uuid } from 'uuid';

import { getContacts } from '../../redux/phonebook/phonebook-selectors.js';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = contact => {
    if (this.props.contacts.find(person => person.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    if (this.props.contacts.find(person => person.number === contact.number)) {
      alert(`${contact.number} is already in contacts`);
      return;
    }
    contact.id = uuid();
    this.props.addContact(contact);
    this.clearForm();
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addContact(this.state);
            this.clearForm();
          }}
        >
          <label htmlFor="name" className="subtitle">
            Name
          </label>
          <input
            onChange={this.handleInput}
            value={this.state.name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label htmlFor="number" className="subtitle">
            Number
          </label>
          <input
            onChange={this.handleInput}
            value={this.state.number}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className="addContact">Add contact</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
ContactForm.propTypes = { addContact: PropTypes.func };
