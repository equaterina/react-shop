import React, { Component } from "react";
import Layout from "../Layout/Layout";
import products from "../../utils/products.json";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
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
  render() {
    const { name, price, currency, image, id } = this.state.product;
    const { addToCart } = this.props;
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <h1>{name}</h1>
          <img src={image} alt="" />
          <button
            className="btn btn-dark mt-3"
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
        </div>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
  };
}
export default connect(null, mapDispatchToProps)(Product);
