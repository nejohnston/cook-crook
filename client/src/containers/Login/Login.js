import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

const Login = ({
  login,
  loginError,
  handleUpdateEmail,
  handleUpdatePassword,
  emailInputValue,
  passwordInputValue,
}) => (
  <div className="page login">
    <div className="logo">
      <img src={logo} alt="Boomtown Logo" />
    </div>
    <div className="topRight">
      <img src={topRight} alt="Sky" />
    </div>
    <div className="bottomLeft">
      <img src={bottomLeft} alt="City" />
    </div>
    <div className="cardContainer">
      <Paper zDepth={5}>
        <div className="formContainer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            autoComplete="off"
          >
            <div>
              <ValidatedTextField
                value={emailInputValue}
                handleChange={handleUpdateEmail}
                label="Email"
              />
            </div>
            <div>
              <ValidatedTextField
                value={passwordInputValue}
                handleChange={handleUpdatePassword}
                label="Password"
              />
            </div>
            <RaisedButton className="enterButton" primary fullWidth type="submit">
              Enter
            </RaisedButton>
          </form>
          <div>{loginError.message}</div>
        </div>
      </Paper>
    </div>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired,
  handleUpdateEmail: PropTypes.func.isRequired,
  handleUpdatePassword: PropTypes.func.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
};

export default Login;
