import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';

import './style.scss';

// const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
const availableCategories = [ 'Breakfast', "Drinks", "Soup", "Salad" ];

class Filter extends Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
    this.selectedCheckboxes.add("Breakfast");
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.clear();
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = filters => label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      isChecked={ filters && filters.indexOf(label) > -1 }
      key={label}
    />
  );

  createCheckboxes = () => availableCategories.map(this.createCheckbox(this.props.filters));

  render() {
    return (
      <div className="filters">
        <h4 className="title">Categories:</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { updateFilters }
)(Filter);
