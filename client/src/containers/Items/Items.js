import React, { Component } from "react";
import propTypes from "prop-types";

import Masonry from "react-masonry-component";

import ItemCard from "../../components/ItemCard/ItemCard";
import ItemsContainer from "./ItemsContainer";

import Gravatar from "react-gravatar";

import "./styles.css";
// export default class Items extends Component {
//   render() {
//     return <div> Items! </div>;
//   }
// }
const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const Items = ({ list }) => (
  <Masonry options={masonryOptions} className={"itemsWrapper"}>
    {list.length && list.map(item => <ItemCard key={item.id} item={item} />)}
  </Masonry>
);
// export default ({ list }) => (
//   <div>
//     {list.length &&
//       list.map(item => {
//         return <ItemCard item={item.id} key={item.id} />;
//       })}
//   </div>
// );

Items.propTypes = {
  list: propTypes.array.isRequired
};

export default Items;
