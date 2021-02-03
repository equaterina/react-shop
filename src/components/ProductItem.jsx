import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { toggleFavorites } from "../redux/actions/favorites";
import { ReactComponent as FavoriteIcon } from "../assets/icons/favorite_border-24px.svg";
import { ReactComponent as FavoriteIconFill } from "../assets/icons/favorite-24px.svg";
import {Link} from 'react-router-dom'

import { useToggle } from "../hooks/useToggle";

function ProductItem(props) {
  const { name, price, currency, image, id } = props;
  const [isToggled, setIsToggled] = useToggle();

  return (
    <div className="product-item col-12 col-md-4 d-flex flex-column align-items-center mb-3">
      <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
        <img src={image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center">{price + currency}</p>
      </Link>
      <div>
        <button
          className="btn btn-outline-dark"
          onClick={() =>
            props.addToCart({
              product: {
                id,
                name,
                price,
                currency,
                image,
              },
            })
          }
        >
          Adaugă în coș
        </button>
        <div
          className="heart-icon"
          onClick={() => {
            props.toggleFavorites({
              item: { id, name, price, currency, image, isToggled },
            });
            setIsToggled();
          }}
        >
          {isToggled ? (
            <FavoriteIconFill className="heart-icon-hover ml-3" />
          ) : (
            <FavoriteIcon className="heart-icon-hover ml-3" />
          )}
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    toggleFavorites: (payload) => dispatch(toggleFavorites(payload)),
  };
}
export default connect(null, mapDispatchToProps)(ProductItem);
