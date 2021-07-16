import { Component } from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

export class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return this.props.loading ? (
      <div>Loading...</div>
    ) : (
      <ul>
        {this.props.contacts.map(item => (
          <ContactListItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: phonebookSelectors.getLoading(state),
    contacts: phonebookSelectors.getVisibleContacts(state),
    // filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => dispatch(getContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
