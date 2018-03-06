import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => (
  <div className="loadingWrapper">
    <CircularProgress color="white" />
  </div>
);

export default Loader;
