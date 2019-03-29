import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../services/cart/actions';
import { updateCart } from '../../services/total/actions';
import CartProduct from './CartProduct';
import util from '../../services/util';
import Clearfix from '../Clearfix';

import axios from "axios";

import './style.scss';

class CheckoutCart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object
  };

  // state = {
  //   isOpen: true
  // };

  state = {
    order: {
      beingProcessed: false,
      submitted: false,
      success: false
    },
    orderForm: {
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    }
  };

  handleFormInputChange (key) {
    const that = this;
    return function (event) {
      let nextState = JSON.parse(JSON.stringify(that.state));
      nextState.orderForm[key] = event.target.value;
      that.setState({ orderForm: nextState.orderForm });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  // openFloatCart = () => {
  //   this.setState({ isOpen: true });
  // };

  // closeFloatCart = () => {
  //   this.setState({ isOpen: false });
  // };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    // this.openFloatCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
    // if (!cartProducts.length) {
    //   window.location.href = "/order";
    // }
  };

  proceedToCheckout = (e) => {
    // e.preventDefault();
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = this.props.cartTotal;

    // if (!productQuantity) {
    //   alert('Add some product in the bag!');
    // } else {
    //   alert(
    //     `Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(
    //       totalPrice,
    //       currencyId
    //     )}`
    //   );
    // }
    // console.log(
    //   `Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(
    //       totalPrice,
    //       currencyId
    //     )}`
    // );
    let nextState = JSON.parse(JSON.stringify(this.state));
    nextState.order.beingProcessed = true;
    let that = this;
    this.setState({ order: nextState.order }, function () {
      console.log(that.state.order);
      setTimeout(function () {
        console.log(that.state.orderForm);

        const { name, email } = that.state.orderForm;
        const { cartProducts, cartTotal } = that.props;
        const from = name && email ? `${name} <${email}>` : `${name || email}`

        let html = `
        <div>
          <h3>Order Confirmation</h3>
          <div><b>Invoice #</b>: ${ new Date().getTime() }</div>
          <div><b>Name</b>: ${ that.state.orderForm.name }</div>
          <div><b>Email</b>: ${ that.state.orderForm.email }</div>
          <div><b>Phone</b>: ${ that.state.orderForm.phone }</div>
          <div><b>Address</b>: ${ that.state.orderForm.address }</div>
          <div><b>Notes</b>: ${ that.state.orderForm.notes }</div>
          <br />
          <h3>Order Summary</h3>`;
        cartProducts.forEach(product => html += `<div><b>${product.title}</b> x ${product.quantity} = ${product.currencyFormat} ${util.formatPrice(product.price * product.quantity)}</div>`);
        console.log(html);
        html += `<div><b>Subtotal</b> = ${cartTotal.currencyFormat} ${util.formatPrice(cartTotal.totalPrice, cartTotal.currencyId)}</div>
        </div>`;
        const message = {
          from,
          to: 'h38075@gmail.com',
          subject: `New Order from ${from}`,
          html,
          replyTo: from
        };
        axios.post("/contact", message)
        .then(function (response) {
          console.log(response);
          let productsToBeRemoved = JSON.parse(JSON.stringify(that.props.cartProducts));
          productsToBeRemoved.forEach(function (product) {
            that.props.removeProduct(product);
          });
          console.log("cart total: " + that.props.cartTotal.productQuantity);
          nextState.order.beingProcessed = false;
          nextState.order.submitted = true;
          nextState.order.success = true;
          that.setState({ order: nextState.order });
        })
        .catch(function (error) {
          console.log(error);
          nextState.order.beingProcessed = false;
          nextState.order.submitted = true;
          nextState.order.success = false;
          that.setState({ order: nextState.order });
        });
      }, 3000);
    });
  };

  clearCart = () => {
    const that = this;
    let productsToBeRemoved = JSON.parse(JSON.stringify(that.props.cartProducts));
    productsToBeRemoved.forEach(function (product) {
      that.props.removeProduct(product);
    });
  }

  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
      );
    });

    const checkoutBtn = cartProducts.length ? (
      <button type="submit" onClick={(e) => this.proceedToCheckout(e)} className="buy-btn">
        Send Order to Kitchen
      </button>
    ) : (
      <button type="submit" className="buy-btn disabled">
        Send Order to Kitchen
      </button>
    );

    let classes = ['checkout-cart'];

    // if (!!this.state.isOpen) {
    //   classes.push('checkout-cart--open');
    // }

    if (!this.state.order.submitted || (this.state.order.submitted && !this.state.order.success)) {
      return (
        <div className={classes.join(' ')}>
          {this.state.order.submitted && !this.state.order.success &&
            <div>Oh no! Something went wrong! Please try again.</div>
          }

          {this.state.order.beingProcessed &&
            <div style={{ color: "white" }}>Please wait while your order is being processed ...</div>
          }

          {!this.state.order.beingProcessed && cartProducts.length === 0 &&
            <div style={{ color: "white" }}>Order is empty.</div>
          }

          {!this.state.order.beingProcessed && cartProducts.length > 0 &&
            <div className="checkout-cart__content">
              <div className="checkout-cart__header">
                <span className="bag">
                  <span className="bag__quantity">{cartTotal.productQuantity}</span>
                </span>
                <span className="header-title">Bag</span>
              </div>

              <div className="checkout-cart__shelf-container">
                {products}
              </div>

              { false && <button onClick={e => this.clearCart()}>Clear Cart</button> }

              <div className="checkout-cart__footer">
                <div className="sub">SUBTOTAL</div>
                <div className="sub-price">
                  <p className="sub-price__val">
                    {`${cartTotal.currencyFormat} ${util.formatPrice(
                      cartTotal.totalPrice,
                      cartTotal.currencyId
                    )}`}
                  </p>
                  <small className="sub-price__installment">
                    {!!cartTotal.installments && (
                      <span>
                        {`OR UP TO ${cartTotal.installments} x ${
                          cartTotal.currencyFormat
                        } ${util.formatPrice(
                          cartTotal.totalPrice / cartTotal.installments,
                          cartTotal.currencyId
                        )}`}
                      </span>
                    )}
                  </small>
                </div>
                <Clearfix />
                <form>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" onChange={this.handleFormInputChange('name')} required />
                  <Clearfix />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={this.handleFormInputChange('email')} required />
                  <Clearfix />

                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name="phone" pattern="[0-9]{8}" onChange={this.handleFormInputChange('phone')} required />
                  <span className="note">Format: 12345678</span>
                  <Clearfix />

                  <label htmlFor="address">Address</label>
                  <textarea name="address" rows="3" onChange={this.handleFormInputChange('address')}></textarea>
                  <Clearfix />

                  <label htmlFor="notes">Note</label>
                  <textarea name="notes" rows="3" onChange={this.handleFormInputChange('notes')}></textarea>
                  <Clearfix />

                  <button type="submit" onClick={(e) => this.proceedToCheckout(e)} className="buy-btn">
                    Send Order to Kitchen
                  </button>
                </form>
                <Clearfix />
              </div>
            </div>
          }
        </div>
      );
    } else {
      if (this.state.order.success) {
        return <div>Kitchen received your order. We're preparing and will contact you once it's ready.</div>;
      }
    }
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(CheckoutCart);
