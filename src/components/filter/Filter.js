import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleFilter } from '../../redux/phonebook/phonebook-actions';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p className="text">Find contacts by name</p>
        <input
          value={this.props.filter}
          onChange={this.props.handleFilter}
          type="text"
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilter: event => dispatch(handleFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = { filter: PropTypes.string, handleFilter: PropTypes.func };
