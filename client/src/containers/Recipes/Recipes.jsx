import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';
import RecipeCardList from '../../components/RecipeCardList';

const Recipes = ({ items }) => <RecipeCardList items={items} />;

Recipes.propTypes = {
  // items: PropTypes.object,
};
export default Recipes;
