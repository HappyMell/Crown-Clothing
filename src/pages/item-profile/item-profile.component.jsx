import React from "react";
import { connect } from "react-redux";

import { selectItems } from "../../redux/shop/shop.selectors";
import ItemInfo from "../../components/item-info/item-info.component";
import "./item-profile.styles.scss";
const ItemProfile = ({ items, match }) => {
  return (
    <div className='item-profile-view'>
      {items
        .filter((item) => item.linkUrl === match.params.linkUrl)
        .map((item) => (
          <ItemInfo key={item.id} item={item} />
        ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectItems(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ItemProfile);
