import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PropTypes from 'prop-types';

import './styles.css';

const tags = ['Vegan', 'Ketogenic', 'Vegetarian', 'Raw food', 'Liquor', 'If You High'];

const menuItems = values =>
  tags.map(tag => (
    <MenuItem
      insetChildren
      key={tag}
      checked={values && values.indexOf(tag) > -1}
      value={tag}
      label={tag}
      primaryText={tag}
    />
  ));

const Filter = ({ handleChange, values }) => (
  <SelectField
    multiple
    value={values}
    onChange={handleChange}
    className="selectFieldWrapper"
    hintText="Filter by Tag"
    autoWidth
  >
    {menuItems(values)}
  </SelectField>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
};

export default Filter;
