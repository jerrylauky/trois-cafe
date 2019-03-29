import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Thumb from '../../Thumb';
import util from '../../../services/util';

// const Product = props => {
//   const product = props.product;

//   product.quantity = 1;

//   let formattedPrice = util.formatPrice(product.price, product.currencyId);

//   let productInstallment;

//   if (!!product.installments) {
//     const installmentPrice = product.price / product.installments;

//     productInstallment = (
//       <div className="installment">
//         <span>or {product.installments} x</span>
//         <b>
//           {' '}
//           {product.currencyFormat}{' '}
//           {util.formatPrice(installmentPrice, product.currencyId)}
//         </b>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="shelf-item"
//       onClick={() => props.addProduct(product)}
//       data-sku={product.sku}
//     >
//       {product.isFreeShipping && (
//         <div className="shelf-stopper">Free shipping</div>
//       )}
//       <Thumb
//         classes="shelf-item__thumb"
//         src={require(`../../../static/products/${product.sku}_1.jpg`)}
//         alt={product.title}
//       />
//       <p className="shelf-item__title">{product.title}</p>
//       <div className="shelf-item__price">
//         <div className="val">
//           <small>{product.currencyFormat}</small>
//           <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
//           <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
//         </div>
//         {productInstallment}
//       </div>
//       <div className="shelf-item__buy-btn">Add to cart</div>
//     </div>
//   );
// };


class Product extends Component {
  state = {
    quantity: 1
  }

  render () {
    const product = this.props.product;

    product.quantity = 1;

    let formattedPrice = util.formatPrice(product.price, product.currencyId);

    return (
      <div
        className="shelf-item"
      >
        {product.isFreeDelivery && (
          <div className="shelf-stopper">Free Delivery</div>
        )}
        <Thumb
          classes="shelf-item__thumb"
          src={product.thumbnail}
          alt={product.title}
        />
        <p className="shelf-item__title">{product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            <small>{product.currencyFormat}</small>
            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
          </div>
        </div>
        <div 
          className="shelf-item__quantity"
        >
          <span onClick={() => {this.setState({ quantity: Math.min(this.state.quantity + 1, 10) });}}>+</span>
          <input type="number" value={ this.state.quantity } onChange={(e) => { this.setState({ quantity: (!e.target.value || isNaN(parseInt(e.target.value))) ? 0 : parseInt(e.target.value)}) }} />
          <span onClick={() => {this.setState({ quantity: Math.max(this.state.quantity - 1, 0) }) }}>-</span>
        </div>
        {this.state.quantity > 0 &&
        <div 
          className="shelf-item__buy-btn" 
          onClick={() => { product.quantity = this.state.quantity; this.props.addProduct(product) }}
        >Add to cart</div>}
        {this.state.quantity <= 0 &&
        <div 
          className="shelf-item__buy-btn disabled" 
        >Add at least 1 to cart</div>}
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default Product;
