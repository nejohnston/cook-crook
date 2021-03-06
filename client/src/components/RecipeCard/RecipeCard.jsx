import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import moment from 'moment';
import Gravatar from 'react-gravatar';
import BorrowModal from './BorrowModal';
import { updateModalState } from '../../redux/modules/borrowed';

import './styles.css';

const RecipeCard = ({ item, user, dispatch }) => (
  <div className="RecipeCardWrapper">
    <Card>
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <Link to={`/profile/${item.itemowner.id}`}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment(item.created).fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />
      </Link>
      <CardTitle title={item.title} subtitle={item.tags.map(i => i.title).join(', ')} />{' '}
      <CardText>{item.description}</CardText>
      <CardActions>
        <RaisedButton
          secondary
          className="headerButton"
          label="Borrow"
          onClick={() => dispatch(updateModalState(true))}
        />
      </CardActions>
    </Card>
  </div>
);

const mapDispatchToProps = dispatch => ({
  updateModalState: (modalOpen) => {
    dispatch(updateModalState(modalOpen));
  },
});

export default connect(mapDispatchToProps)(RecipeCard);
