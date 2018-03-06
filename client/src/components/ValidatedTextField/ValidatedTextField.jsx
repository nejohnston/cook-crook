import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { blueGrey900 } from 'material-ui/styles/colors';

import './styles.css';

const ValidatedTextField = ({
  label, handleChange, value, type,
}) => (
  <TextField
    style={styles.fieldStyle}
    hintText={label}
    floatingLabelText={label}
    errorStyle={styles.errorStyle}
    underlineFocusStyle={styles.underlineStyle}
    onChange={handleChange}
    value={value}
    type={type || 'text'}
  />
);

ValidatedTextField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ValidatedTextField;
