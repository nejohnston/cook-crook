import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import HeaderBar from '../HeaderBar';

import Loader from '../Loader';

import './styles.css';

const Layout = ({ children, authenticated, userLoading }) =>
  (userLoading ? (
    <Loader />
  ) : (
    <div className="appContentWrapper">
      <div className="appHeader">{authenticated && <HeaderBar />}</div>
      <div className="appContent">{children}</div>
      <footer className="appFooter">
        {authenticated && <p>© 2018 Cook Crook All Rights Reserved</p>}
      </footer>
    </div>
  ));

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  userLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userLoading: state.auth.userLoading,
});

export default withRouter(connect(mapStateToProps)(Layout));
