import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./item-info.styles.scss";
const ItemInfo = ({ item, match, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='item-info'>
      <div className='wrapper'>
        <div className='intro'>
          <h1>{name}</h1>
          <div
            className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div class='description'>
          <div className='price'>price: ${price}</div>
        </div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemInfo);
