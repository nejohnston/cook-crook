import React, { Component } from "react";

import Items from "../../containers/Items";
import ItemsContainer from "../../containers/Items";
import ItemCard from "../ItemCard";
import PropTypes from "prop-types";

import Masonry from "react-masonry-component";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import "./styles.css";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const ItemCardList = ({ items }) => (
  <div className="itemsWrapper">
    <Masonry options={masonryOptions}>
      {items}
      {/* {itemTags && itemTags.length
        ? items
            .filter(item =>
              items.tags.some(tag => itemTags.includes(tag.title))
            )
            .map(item => <ItemCard key={item.id} />)
        : items.map(item => <ItemCard key={item.id} item={item} />)} */}
    </Masonry>
    <FloatingActionButton backgroundColor="#000" className="contentAddButton">
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default ItemCardList;
