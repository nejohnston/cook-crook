import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import SvgIcon from 'material-ui/SvgIcon';

import { getDietTags } from '../../redux/modules/recipes';
import Filter from '../FilterField/FilterField';

import Logo from '../../images/boomtown-logo.svg';

import { firebaseAuth } from '../../config/firebase';

import './styles.css';

const HeaderButtons = () => (
  <div className="headerButtonWrapper">
    <Link to={`/profile/${firebaseAuth.currentUser.uid}`}>
      <RaisedButton
        className="headerButton"
        label="My Profile"
        primary
        onClick={() => firebaseAuth.currentUser.uid}
      />
    </Link>
    <RaisedButton
      secondary
      className="headerButton"
      label="Logout"
      backgroundColor="#000"
      onClick={() => firebaseAuth.signOut()}
    />
  </div>
);

const HeaderBar = ({ dietTags, dispatch }) => (
  <AppBar
    showMenuIconButton={false}
    className="headerBar"
    style={{
      backgroundColor: '#fff',
    }}
    iconClassNameLeft="iconClassNameLeft"
  >
    <div>
      <div className="titleWrapper">
        <a href="/items">
          <img src={Logo} alt="Boomtown" className="headerLogo" />
        </a>
        <Route
          exact
          path="/items"
          render={() => (
            <Filter
              handleChange={(event, index, tags) => {
                dispatch(getDietTags(tags));
              }}
              values={dietTags}
            />
          )}
        />
      </div>
    </div>
    <HeaderButtons />
  </AppBar>
);

const mapStateToProps = state => ({
  dietTags: state.items.dietTags,
});

export default withRouter(connect(mapStateToProps)(HeaderBar));
