import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container';
import ItemProfilePageContainer from '../item-profile/item-profile.container'

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";



class ShopPage extends React.Component {  


  componentDidMount() {
   const {fetchCollectionsStart} = this.props;
   fetchCollectionsStart();
  }

  render() {
    const { match} = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />

        <Route
          path={`${match.path}/:collectionId/:linkUrl`}
          component={ItemProfilePageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
