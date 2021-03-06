import React from 'react';

import PropTypes from 'prop-types';

import Masonry from 'react-masonry-component';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { Link } from 'react-router-dom';

import RecipeCard from '../RecipeCard';
import './styles.css';

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000,
};

const RecipeCardList = ({ items, dietTags }) => (
  <div className="itemsWrapper">
    <Masonry options={masonryOptions}>
      {dietTags && dietTags.length
        ? items
            .filter(item => item.tags.some(tag => dietTags.includes(tag.title)))
            .map(item => <RecipeCard key={item.id} item={item} />)
        : items.map(item => <RecipeCard key={item.id} item={item} />)}
    </Masonry>
    <Link to="/share">
      <FloatingActionButton backgroundColor="#000" className="contentAddButton">
        <ContentAdd />
      </FloatingActionButton>
    </Link>
  </div>
);

export default RecipeCardList;
