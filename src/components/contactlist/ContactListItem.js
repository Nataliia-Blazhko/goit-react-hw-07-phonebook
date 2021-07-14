import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';

export class ContactListItem extends Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <li className="person">
        {name} {number}
        <button
          className="deleteButton"
          onClick={() => deleteContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
