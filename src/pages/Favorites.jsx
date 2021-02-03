import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { removeFromFavorites } from "../redux/actions/favorites";

function Cart(props) {
  return (
    <Layout>
      <div
        className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
      >
        {props.favorites.length ? (
          <div className="w-100">
            <div className="d-flex justify-content-between text-center h4 text-bold">
              <p className="w-50">Produs</p>
              <p className="w-50">Pret</p>
            </div>
            {props.favorites.map((item) => {
              return (
                <div
                  className="d-flex justify-content-between align-items-center text-center"
                  key={item.id}
                >
                  <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <img src={item.image} alt="Produs" />
                    <p>{item.name}</p>
                  </div>
                  <div className="w-50 d-flex justify-content-center">
                    <p className="mr-2">
                      {item.price} {item.currency}
                    </p>
                    <Close
                      onClick={() => props.removeFromFavorites({ item })}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <p className="h3">You don't have any favorites yet!</p>
            <Link to="/">
              <button className="btn btn-outline-dark">Inapoi la home</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.items,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
