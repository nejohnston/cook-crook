import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import store from '../../redux/store';

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

const Filter = ({ tags, handleChange, values }) => (
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

export default Filter;
