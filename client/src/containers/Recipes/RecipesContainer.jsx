import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import store from '../../redux/store';

import CircularProgress from 'material-ui/CircularProgress';

import Recipes from './Recipes';
import BorrowModal from '../../components/RecipeCard/BorrowModal';
// import updateModalState from "../../redux/modules/";

import './styles.css';
import { updateModalState } from '../../redux/modules/borrowed';

class RecipesContainer extends Component {
  static PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
    dietTags: PropTypes.array,
    modalOpen: PropTypes.bool,
  };
  render() {
    const { loading, items } = this.props.data;
    return loading ? (
      <div className="loadingWrapper">
        <CircularProgress color="white" />
      </div>
    ) : (
      <div className="itemsWrapper">
        {this.props.modalOpen && <BorrowModal />}
        <Recipes items={items} dietTags={this.props.dietTags} />
      </div>
    );
  }
}

const fetchItems = gql`
  query {
    items {
      id
      title
      imageurl
      description
      available
      tags {
        title
      }
      borrower {
        id
      }
      itemowner {
        id
        fullname
        bio
        email
      }
    }
  }
`;

const mapStateToProps = state => ({
  dietTags: state.recipes.dietTags,
  modalOpen: state.borrowed.modalOpen,
});
// FetchItems??
export default compose(graphql(fetchItems), connect(mapStateToProps))(RecipesContainer);
