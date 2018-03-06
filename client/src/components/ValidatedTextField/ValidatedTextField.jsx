import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import styles from './styles';

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
