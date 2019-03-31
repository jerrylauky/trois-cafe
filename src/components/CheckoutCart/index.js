import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../services/cart/actions';
import { updateCart } from '../../services/total/actions';
import CartProduct from './CartProduct';
import util from '../../services/util';
import Clearfix from '../Clearfix';

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

  proceedToCheckout = (formValues) => {
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
        console.log(formValues);

        const { name, email, phone, address, notes } = formValues;
        const { cartProducts, cartTotal } = that.props;
        const from = name && email ? `${name} <${email}>` : `${name || email}`
        const invoiceNumber = new Date().getTime();

        let htmlForCafe = `
        <div>
          <h3>Order Confirmation</h3>
          <div><b>Invoice #</b>: ${ invoiceNumber }</div>
          <div><b>Name</b>: ${ name }</div>
          <div><b>Email</b>: ${ email }</div>
          <div><b>Phone</b>: ${ phone }</div>
          <div><b>Address</b>: ${ address }</div>
          <div><b>Notes</b>: ${ notes }</div>
          <br />
          <h3>Order Summary</h3>`;
        cartProducts.forEach(product => htmlForCafe += `<div><b>${product.title}</b> x ${product.quantity} = ${product.currencyFormat} ${util.formatPrice(product.price * product.quantity)}</div>`);
        console.log(htmlForCafe);
        htmlForCafe += `<div><b>Subtotal</b> = ${cartTotal.currencyFormat} ${util.formatPrice(cartTotal.totalPrice, cartTotal.currencyId)}</div>
        </div>`;
        const messageForCafe = {
          from,
          to: 'info.troiscafe@gmail.com',
          subject: `New Order from ${from}`,
          html: htmlForCafe,
          replyTo: from
        };
        let messageForCustomer = JSON.parse(JSON.stringify(messageForCafe));
        let htmlForCustomer = htmlForCafe;
        htmlForCustomer += `<div><br />Please contact Trois Cafe within 2 business days to complete the payment and we will start preparing your order.</div>`;
        messageForCustomer.subject = `Trois Cafe - Order Confirmation (${ invoiceNumber })`;
        messageForCustomer.html = htmlForCustomer;
        messageForCustomer.to = email;
        axios.post("https://trois-cafe-api--jerrylauky.repl.co/contact", messageForCafe)
        .then(axios.post("https://trois-cafe-api--jerrylauky.repl.co/contact", messageForCustomer))
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
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <i className="fas fa-exclamation-circle" style={{ color: "indianred", marginRight: "10px", fontSize: "30px", verticalAlign: "middle" }}></i>
              Oh no! Something went wrong! Please try again.
            </div>
          }

          {this.state.order.beingProcessed &&
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <i className="fas fa-coffee" style={{ marginRight: "10px", fontSize: "30px", verticalAlign: "middle" }}></i>
              Please wait while your order is being processed ...
            </div>
          }

          {!this.state.order.beingProcessed && cartProducts.length === 0 &&
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <img 
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsZWQgQmFnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uL0ZpbGxlZC1CYWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iRmlsbGVkLUJhZyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNDU5NDE5LDI4LjQ4ODg2MDkgQzIwLjI2OTMxNDEsMjguNjgxMjk1NyAyMC4wMTQxNDA3LDI4Ljc4NzI5NTcgMTkuNzQwOTE0OSwyOC43ODcyOTU3IEwyLjIxNjE4NTA4LDI4Ljc4NzI5NTcgQzEuOTQyODcwNTYsMjguNzg3Mjk1NyAxLjY4Nzc0MTUzLDI4LjY4MTI5NTcgMS40OTc2ODEwNSwyOC40ODg4NjA5IEMxLjMwNzYyMDU2LDI4LjI5NjM4MjYgMS4yMDc4MjIxOCwyOC4wNDI5OTEzIDEuMjE2NjQ4NzksMjcuNzc2ODE3NCBMMS45ODA3NDk2LDkuMDAyODE3MzkgQzEuOTk4NDAyODIsOC40NzEwMzQ3OCAyLjQzNzQ3MTM3LDguMDU0NDI2MDkgMi45ODAyNDE1Myw4LjA1NDQyNjA5IEw2LjM4NDE2NDkyLDguMDU0NDI2MDkgTDYuMzg0MTY0OTIsOS4wNjYxNjUyMiBDNi4wMzU4MDIwMiw5LjI4OTAzNDc4IDUuODA1MTEyNSw5LjY3Mzg2MDg3IDUuODA1MTEyNSwxMC4xMTIwMzQ4IEM1LjgwNTExMjUsMTAuODAxNzczOSA2LjM3NTUxNTczLDExLjM2MDkwNDMgNy4wNzkxMTY1MywxMS4zNjA5MDQzIEM3Ljc4MjcxNzM0LDExLjM2MDkwNDMgOC4zNTMxMjA1NiwxMC44MDE3NzM5IDguMzUzMTIwNTYsMTAuMTEyMDM0OCBDOC4zNTMxMjA1Niw5LjY3Mzg2MDg3IDguMTIyMzg2NjksOS4yODkwMzQ3OCA3Ljc3NDAyMzc5LDkuMDY2MTY1MjIgTDcuNzc0MDIzNzksOC4wNTQ0MjYwOSBMMTQuMTgzMDc2Miw4LjA1NDQyNjA5IEwxNC4xODMwNzYyLDkuMDY2MTIxNzQgQzEzLjgzNDcxMzMsOS4yODkwMzQ3OCAxMy42MDM5MzUxLDkuNjczODE3MzkgMTMuNjAzOTM1MSwxMC4xMTIwMzQ4IEMxMy42MDM5MzUxLDEwLjgwMTc3MzkgMTQuMTc0MzgyNywxMS4zNjA5MDQzIDE0Ljg3Nzk4MzUsMTEuMzYwOTA0MyBDMTUuNTgxNTg0MywxMS4zNjA5MDQzIDE2LjE1MTk4NzUsMTAuODAxNzczOSAxNi4xNTE5ODc1LDEwLjExMjAzNDggQzE2LjE1MTk4NzUsOS42NzM4NjA4NyAxNS45MjEyOTgsOS4yODkwNzgyNiAxNS41NzI5MzUxLDkuMDY2MTY1MjIgTDE1LjU3MjkzNTEsOC4wNTQ0MjYwOSBMMTguOTc2ODE0MSw4LjA1NDQyNjA5IEMxOS41MTk2NzMsOC4wNTQ0MjYwOSAxOS45NTg2NTI4LDguNDcwOTQ3ODMgMTkuOTc2MjYxNyw5LjAwNDM4MjYxIEwyMC43NDAzNjI1LDI3Ljc3NTI1MjIgQzIwLjc0OTE4OTEsMjguMDQyOTkxMyAyMC42NDk0MzUxLDI4LjI5NjQyNjEgMjAuNDU5NDE5LDI4LjQ4ODg2MDkgWiBNNy43NzQwMjM3OSw0LjQ2NTMzOTEzIEM3Ljc3NDAyMzc5LDIuNzU0MzgyNjEgOS4xOTQwODgzMSwxLjM2MjQyNjA5IDEwLjkzOTU4NDMsMS4zNjI0MjYwOSBMMTEuMDE3NTE1NywxLjM2MjQyNjA5IEMxMi43NjMwMTE3LDEuMzYyNDI2MDkgMTQuMTgzMDc2MiwyLjc1NDM4MjYxIDE0LjE4MzA3NjIsNC40NjUzMzkxMyBMMTQuMTgzMDc2Miw2Ljg2MjI5NTY1IEw3Ljc3NDAyMzc5LDYuODYyMjk1NjUgTDcuNzc0MDIzNzksNC40NjUzMzkxMyBaIE0yMS45NTU4MTgxLDI3LjczNDkwNDMgTDIxLjE5MTc2MTcsOC45NjQwNzgyNiBDMjEuMTUyNzczOCw3Ljc4NTUxMzA0IDIwLjE3OTgwNiw2Ljg2MjI5NTY1IDE4Ljk3NjgxNDEsNi44NjIyOTU2NSBMMTUuNTcyOTM1MSw2Ljg2MjI5NTY1IEwxNS41NzI5MzUxLDQuNDY1MzM5MTMgQzE1LjU3MjkzNTEsMi4wMDMyMDg3IDEzLjUyOTQ2MzMsMy40NzgyNjA4N2UtMDUgMTEuMDE3NTE1NywzLjQ3ODI2MDg3ZS0wNSBMMTAuOTM5NTg0MywzLjQ3ODI2MDg3ZS0wNSBDOC40Mjc3MjU0LDMuNDc4MjYwODdlLTA1IDYuMzg0MTY0OTIsMi4wMDMyMDg3IDYuMzg0MTY0OTIsNC40NjUzMzkxMyBMNi4zODQxNjQ5Miw2Ljg2MjI5NTY1IEwyLjk4MDI0MTUzLDYuODYyMjk1NjUgQzEuNzc3MjkzOTUsNi44NjIyOTU2NSAwLjgwNDM3MDU2NSw3Ljc4NTUxMzA0IDAuNzY1MzM4MzA2LDguOTYyNDY5NTcgTDAuMDAxMTkzMTQ1MTYsMjcuNzM2NDY5NiBDLTAuMDE4NTAwNDAzMiwyOC4zMjk4MTc0IDAuMjAyNjUyODIzLDI4Ljg5MTUxMyAwLjYyMzg5MDcyNiwyOS4zMTc5OTEzIEMxLjA0NTAzOTkyLDI5Ljc0NDUxMyAxLjYxMDU2NDExLDI5Ljk3OTQyNjEgMi4yMTYxODUwOCwyOS45Nzk0MjYxIEwxOS43NDA5MTQ5LDI5Ljk3OTQyNjEgQzIwLjM0NjQ5MTUsMjkuOTc5NDI2MSAyMC45MTE5NzE0LDI5Ljc0NDUxMyAyMS4zMzMxNjQ5LDI5LjMxNzk5MTMgQzIxLjc1NDM1ODUsMjguODkxNTEzIDIxLjk3NTU1NiwyOC4zMjk4MTc0IDIxLjk1NTgxODEsMjcuNzM0OTA0MyBaIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IkZpbGxlZCIgZmlsbD0iIzAwNzMzNiIgY3g9IjExIiBjeT0iMTkiIHI9IjUiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" 
                alt="checkout bag" className="checkout-bag" 
                style={{ filter: "grayscale(100%)",  marginRight: "10px", top: "7px", position: "relative" }}
              />
              is empty.
            </div>
          }

          {!this.state.order.beingProcessed && cartProducts.length > 0 &&
            <div className="checkout-cart__content">
              <div className="checkout-cart__header">
                <span className="bag">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsZWQgQmFnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uL0ZpbGxlZC1CYWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iRmlsbGVkLUJhZyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNDU5NDE5LDI4LjQ4ODg2MDkgQzIwLjI2OTMxNDEsMjguNjgxMjk1NyAyMC4wMTQxNDA3LDI4Ljc4NzI5NTcgMTkuNzQwOTE0OSwyOC43ODcyOTU3IEwyLjIxNjE4NTA4LDI4Ljc4NzI5NTcgQzEuOTQyODcwNTYsMjguNzg3Mjk1NyAxLjY4Nzc0MTUzLDI4LjY4MTI5NTcgMS40OTc2ODEwNSwyOC40ODg4NjA5IEMxLjMwNzYyMDU2LDI4LjI5NjM4MjYgMS4yMDc4MjIxOCwyOC4wNDI5OTEzIDEuMjE2NjQ4NzksMjcuNzc2ODE3NCBMMS45ODA3NDk2LDkuMDAyODE3MzkgQzEuOTk4NDAyODIsOC40NzEwMzQ3OCAyLjQzNzQ3MTM3LDguMDU0NDI2MDkgMi45ODAyNDE1Myw4LjA1NDQyNjA5IEw2LjM4NDE2NDkyLDguMDU0NDI2MDkgTDYuMzg0MTY0OTIsOS4wNjYxNjUyMiBDNi4wMzU4MDIwMiw5LjI4OTAzNDc4IDUuODA1MTEyNSw5LjY3Mzg2MDg3IDUuODA1MTEyNSwxMC4xMTIwMzQ4IEM1LjgwNTExMjUsMTAuODAxNzczOSA2LjM3NTUxNTczLDExLjM2MDkwNDMgNy4wNzkxMTY1MywxMS4zNjA5MDQzIEM3Ljc4MjcxNzM0LDExLjM2MDkwNDMgOC4zNTMxMjA1NiwxMC44MDE3NzM5IDguMzUzMTIwNTYsMTAuMTEyMDM0OCBDOC4zNTMxMjA1Niw5LjY3Mzg2MDg3IDguMTIyMzg2NjksOS4yODkwMzQ3OCA3Ljc3NDAyMzc5LDkuMDY2MTY1MjIgTDcuNzc0MDIzNzksOC4wNTQ0MjYwOSBMMTQuMTgzMDc2Miw4LjA1NDQyNjA5IEwxNC4xODMwNzYyLDkuMDY2MTIxNzQgQzEzLjgzNDcxMzMsOS4yODkwMzQ3OCAxMy42MDM5MzUxLDkuNjczODE3MzkgMTMuNjAzOTM1MSwxMC4xMTIwMzQ4IEMxMy42MDM5MzUxLDEwLjgwMTc3MzkgMTQuMTc0MzgyNywxMS4zNjA5MDQzIDE0Ljg3Nzk4MzUsMTEuMzYwOTA0MyBDMTUuNTgxNTg0MywxMS4zNjA5MDQzIDE2LjE1MTk4NzUsMTAuODAxNzczOSAxNi4xNTE5ODc1LDEwLjExMjAzNDggQzE2LjE1MTk4NzUsOS42NzM4NjA4NyAxNS45MjEyOTgsOS4yODkwNzgyNiAxNS41NzI5MzUxLDkuMDY2MTY1MjIgTDE1LjU3MjkzNTEsOC4wNTQ0MjYwOSBMMTguOTc2ODE0MSw4LjA1NDQyNjA5IEMxOS41MTk2NzMsOC4wNTQ0MjYwOSAxOS45NTg2NTI4LDguNDcwOTQ3ODMgMTkuOTc2MjYxNyw5LjAwNDM4MjYxIEwyMC43NDAzNjI1LDI3Ljc3NTI1MjIgQzIwLjc0OTE4OTEsMjguMDQyOTkxMyAyMC42NDk0MzUxLDI4LjI5NjQyNjEgMjAuNDU5NDE5LDI4LjQ4ODg2MDkgWiBNNy43NzQwMjM3OSw0LjQ2NTMzOTEzIEM3Ljc3NDAyMzc5LDIuNzU0MzgyNjEgOS4xOTQwODgzMSwxLjM2MjQyNjA5IDEwLjkzOTU4NDMsMS4zNjI0MjYwOSBMMTEuMDE3NTE1NywxLjM2MjQyNjA5IEMxMi43NjMwMTE3LDEuMzYyNDI2MDkgMTQuMTgzMDc2MiwyLjc1NDM4MjYxIDE0LjE4MzA3NjIsNC40NjUzMzkxMyBMMTQuMTgzMDc2Miw2Ljg2MjI5NTY1IEw3Ljc3NDAyMzc5LDYuODYyMjk1NjUgTDcuNzc0MDIzNzksNC40NjUzMzkxMyBaIE0yMS45NTU4MTgxLDI3LjczNDkwNDMgTDIxLjE5MTc2MTcsOC45NjQwNzgyNiBDMjEuMTUyNzczOCw3Ljc4NTUxMzA0IDIwLjE3OTgwNiw2Ljg2MjI5NTY1IDE4Ljk3NjgxNDEsNi44NjIyOTU2NSBMMTUuNTcyOTM1MSw2Ljg2MjI5NTY1IEwxNS41NzI5MzUxLDQuNDY1MzM5MTMgQzE1LjU3MjkzNTEsMi4wMDMyMDg3IDEzLjUyOTQ2MzMsMy40NzgyNjA4N2UtMDUgMTEuMDE3NTE1NywzLjQ3ODI2MDg3ZS0wNSBMMTAuOTM5NTg0MywzLjQ3ODI2MDg3ZS0wNSBDOC40Mjc3MjU0LDMuNDc4MjYwODdlLTA1IDYuMzg0MTY0OTIsMi4wMDMyMDg3IDYuMzg0MTY0OTIsNC40NjUzMzkxMyBMNi4zODQxNjQ5Miw2Ljg2MjI5NTY1IEwyLjk4MDI0MTUzLDYuODYyMjk1NjUgQzEuNzc3MjkzOTUsNi44NjIyOTU2NSAwLjgwNDM3MDU2NSw3Ljc4NTUxMzA0IDAuNzY1MzM4MzA2LDguOTYyNDY5NTcgTDAuMDAxMTkzMTQ1MTYsMjcuNzM2NDY5NiBDLTAuMDE4NTAwNDAzMiwyOC4zMjk4MTc0IDAuMjAyNjUyODIzLDI4Ljg5MTUxMyAwLjYyMzg5MDcyNiwyOS4zMTc5OTEzIEMxLjA0NTAzOTkyLDI5Ljc0NDUxMyAxLjYxMDU2NDExLDI5Ljk3OTQyNjEgMi4yMTYxODUwOCwyOS45Nzk0MjYxIEwxOS43NDA5MTQ5LDI5Ljk3OTQyNjEgQzIwLjM0NjQ5MTUsMjkuOTc5NDI2MSAyMC45MTE5NzE0LDI5Ljc0NDUxMyAyMS4zMzMxNjQ5LDI5LjMxNzk5MTMgQzIxLjc1NDM1ODUsMjguODkxNTEzIDIxLjk3NTU1NiwyOC4zMjk4MTc0IDIxLjk1NTgxODEsMjcuNzM0OTA0MyBaIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IkZpbGxlZCIgZmlsbD0iIzAwNzMzNiIgY3g9IjExIiBjeT0iMTkiIHI9IjUiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="checkout bag" className="checkout-bag" />
                  <span className="bag__quantity">{cartTotal.productQuantity}</span>
                </span>
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
                <Formik
                  initialValues={{ name: '', email: '', phone: '', address: '', notes: '' }}
                  validate={values => {
                    let errors = {};
                    if (!values.email) {
                      errors.email = 'Email is missing.';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address.';
                    }

                    if (!values.name) {
                      errors.name = "First and last name are missing.";
                    } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
                      errors.name = "Invalid first and last name.";
                    }

                    if (!values.phone) {
                      errors.phone = "Phone number is missing.";
                    } else if (!/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}$/im.test(values.phone)) {
                      errors.phone = "Invalid phone number.";
                    }

                    if (!values.address) {
                      errors.address = "Address is missing.";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    this.proceedToCheckout(values);
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   setSubmitting(false);
                    // }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form id="order-form">
                      <label htmlFor="name">
                        <div className="label-title">Name</div>
                        <Field type="text" name="name" placeholder="Enter your name" />
                        <Clearfix />
                      </label>
                      <ErrorMessage name="name" component="div" className="error-message" />
                      <label htmlFor="email">
                        <div className="label-title">Email</div>
                        <Field type="email" name="email" placeholder="Enter your email" />
                        <Clearfix />
                      </label>
                      <ErrorMessage name="email" component="div" className="error-message" />
                      <label htmlFor="phone">
                        <div className="label-title">Phone Number</div>
                        <Field type="tel" name="phone" placeholder="Enter your phone number" />
                        <Clearfix />
                      </label>
                      <ErrorMessage name="phone" component="div" className="error-message" />
                      <label htmlFor="address">
                        <div className="label-title">Address</div>
                        <Field name="address" component="textarea" placeholder="Enter your address" />
                        <Clearfix />
                      </label>
                      <ErrorMessage name="address" component="div" className="error-message" />
                      <label htmlFor="notes">
                        <div className="label-title">Notes</div>
                        <Field name="notes" component="textarea" placeholder="Enter your notes / special instructions for your order" />
                        <Clearfix />
                      </label>
                      <ErrorMessage name="notes" component="div" className="error-message" />
                      <Clearfix />
                      <label htmlFor="submit">
                        <button type="submit" disabled={isSubmitting} className="buy-btn">
                          Send Order to Kitchen
                        </button>
                      </label>
                    </Form>
                  )}
                </Formik>
                <Clearfix />
              </div>
            </div>
          }
        </div>
      );
    } else {
      if (this.state.order.success) {
        return <div style={{ textAlign: "center", marginTop: "60px" }}>
          <i className="far fa-check-circle" style={{ color: "#007336", marginRight: "10px", fontSize: "30px", verticalAlign: "middle" }}></i>
          Kitchen received your order. We're preparing and will contact you once it's ready.
        </div>;
      }
    }
  }
}

/*
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
                */

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
