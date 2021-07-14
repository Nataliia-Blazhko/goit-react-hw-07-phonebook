import { Component } from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-operations';

export class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <ul>
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          this.props.contacts
            .filter(item =>
              item.name.toLowerCase().includes(this.props.filter.toLowerCase()),
            )
            .map(item => <ContactListItem key={item.id} {...item} />)
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.phonebook.loading,
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
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
