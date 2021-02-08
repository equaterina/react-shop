import React, { Component } from "react";
import Layout from "../Layout/Layout";
import products from "../../utils/products.json";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {Link} from 'react-router-dom'
import './Product.css'
import { toggleFavorites } from "../../redux/favorites/favoritesActions";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite_border-24px.svg";
import { ReactComponent as FavoriteIconFill } from "../../assets/icons/favorite-24px.svg";




class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      isToggled: false
    };
  }

  componentDidMount() {
    const productIdUrl = this.props.match.params.productId;
    const categoryData = Object.values(products);
    let currentProduct;
    categoryData.forEach((category) => {
      const findResult = category.items.find((item) => {
        return Number(productIdUrl) === item.id;
      });

      if (findResult !== undefined) {
        currentProduct = findResult;
      }
    });
    this.setState({ product: currentProduct });
  }

  setIsToggled(){
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));  
  }

  render() {
    const { name, price, currency, image, id, brand, size, colour, description } = this.state.product;
    const { toggleFavorites} = this.props;
    const isToggled = this.state.isToggled
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <h1>{name}</h1>
        <div className='d-flex'>
          <img className='product-image m-5' src={image} alt={name} />
          <div className='p-5'>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Product ID:</p> {id}</div>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Brand:</p> {brand}</div>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Size:</p> {size}</div>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Colour:</p> {colour}</div>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Description:</p> {description}</div>
            <div className='mb-2'> <p className="font-weight-bold d-inline">Price:</p> {price + '' +  currency}</div>
            <div>
            <button
                className="btn btn-dark mt-3 h-10"
                onClick={() =>
                  addToCart({
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
                Add To Cart
              </button>
              <div
          className="heart-icon"
          onClick={() => {
            toggleFavorites({
              item: { id, name, price, currency, image, isToggled },
            });
            this.setIsToggled();
          }}
        >
          {isToggled ? (
            <FavoriteIconFill className="heart-icon-hover ml-3 mt-3" />
          ) : (
            <FavoriteIcon className="heart-icon-hover ml-3 mt-3" />
          )}
        </div>
              
            </div>

          </div>
        </div>
          <div>
            <Link Link className='mt-4' to='/'> <small>← Back To Browsing</small></Link>
          </div>
        </div>

      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    toggleFavorites: (payload) => dispatch(toggleFavorites(payload)),
  };
}
export default connect(null, mapDispatchToProps)(Product);
