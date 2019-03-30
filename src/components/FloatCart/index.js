import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../services/cart/actions';
import { updateCart } from '../../services/total/actions';
// import CartProduct from './CartProduct';
import util from '../../services/util';

import './style.scss';

class FloatCart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object
  };

  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

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
    this.openFloatCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = this.props.cartTotal;

    if (!productQuantity) {
      alert('Add some product in the bag!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    // const products = cartProducts.map(p => {
    //   return (
    //     <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
    //   );
    // });

    let classes = ['float-cart'];

    // if (!!this.state.isOpen) {
    //   classes.push('float-cart--open');
    // }

    return (
      <div className={classes.join(' ')}>
        <span className="bag bag--float-cart-closed" onClick={() => { window.location.href = "/checkout"; }}>
          <img data-v-707457b1="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsZWQgQmFnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJY29uL0ZpbGxlZC1CYWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iRmlsbGVkLUJhZyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNDU5NDE5LDI4LjQ4ODg2MDkgQzIwLjI2OTMxNDEsMjguNjgxMjk1NyAyMC4wMTQxNDA3LDI4Ljc4NzI5NTcgMTkuNzQwOTE0OSwyOC43ODcyOTU3IEwyLjIxNjE4NTA4LDI4Ljc4NzI5NTcgQzEuOTQyODcwNTYsMjguNzg3Mjk1NyAxLjY4Nzc0MTUzLDI4LjY4MTI5NTcgMS40OTc2ODEwNSwyOC40ODg4NjA5IEMxLjMwNzYyMDU2LDI4LjI5NjM4MjYgMS4yMDc4MjIxOCwyOC4wNDI5OTEzIDEuMjE2NjQ4NzksMjcuNzc2ODE3NCBMMS45ODA3NDk2LDkuMDAyODE3MzkgQzEuOTk4NDAyODIsOC40NzEwMzQ3OCAyLjQzNzQ3MTM3LDguMDU0NDI2MDkgMi45ODAyNDE1Myw4LjA1NDQyNjA5IEw2LjM4NDE2NDkyLDguMDU0NDI2MDkgTDYuMzg0MTY0OTIsOS4wNjYxNjUyMiBDNi4wMzU4MDIwMiw5LjI4OTAzNDc4IDUuODA1MTEyNSw5LjY3Mzg2MDg3IDUuODA1MTEyNSwxMC4xMTIwMzQ4IEM1LjgwNTExMjUsMTAuODAxNzczOSA2LjM3NTUxNTczLDExLjM2MDkwNDMgNy4wNzkxMTY1MywxMS4zNjA5MDQzIEM3Ljc4MjcxNzM0LDExLjM2MDkwNDMgOC4zNTMxMjA1NiwxMC44MDE3NzM5IDguMzUzMTIwNTYsMTAuMTEyMDM0OCBDOC4zNTMxMjA1Niw5LjY3Mzg2MDg3IDguMTIyMzg2NjksOS4yODkwMzQ3OCA3Ljc3NDAyMzc5LDkuMDY2MTY1MjIgTDcuNzc0MDIzNzksOC4wNTQ0MjYwOSBMMTQuMTgzMDc2Miw4LjA1NDQyNjA5IEwxNC4xODMwNzYyLDkuMDY2MTIxNzQgQzEzLjgzNDcxMzMsOS4yODkwMzQ3OCAxMy42MDM5MzUxLDkuNjczODE3MzkgMTMuNjAzOTM1MSwxMC4xMTIwMzQ4IEMxMy42MDM5MzUxLDEwLjgwMTc3MzkgMTQuMTc0MzgyNywxMS4zNjA5MDQzIDE0Ljg3Nzk4MzUsMTEuMzYwOTA0MyBDMTUuNTgxNTg0MywxMS4zNjA5MDQzIDE2LjE1MTk4NzUsMTAuODAxNzczOSAxNi4xNTE5ODc1LDEwLjExMjAzNDggQzE2LjE1MTk4NzUsOS42NzM4NjA4NyAxNS45MjEyOTgsOS4yODkwNzgyNiAxNS41NzI5MzUxLDkuMDY2MTY1MjIgTDE1LjU3MjkzNTEsOC4wNTQ0MjYwOSBMMTguOTc2ODE0MSw4LjA1NDQyNjA5IEMxOS41MTk2NzMsOC4wNTQ0MjYwOSAxOS45NTg2NTI4LDguNDcwOTQ3ODMgMTkuOTc2MjYxNyw5LjAwNDM4MjYxIEwyMC43NDAzNjI1LDI3Ljc3NTI1MjIgQzIwLjc0OTE4OTEsMjguMDQyOTkxMyAyMC42NDk0MzUxLDI4LjI5NjQyNjEgMjAuNDU5NDE5LDI4LjQ4ODg2MDkgWiBNNy43NzQwMjM3OSw0LjQ2NTMzOTEzIEM3Ljc3NDAyMzc5LDIuNzU0MzgyNjEgOS4xOTQwODgzMSwxLjM2MjQyNjA5IDEwLjkzOTU4NDMsMS4zNjI0MjYwOSBMMTEuMDE3NTE1NywxLjM2MjQyNjA5IEMxMi43NjMwMTE3LDEuMzYyNDI2MDkgMTQuMTgzMDc2MiwyLjc1NDM4MjYxIDE0LjE4MzA3NjIsNC40NjUzMzkxMyBMMTQuMTgzMDc2Miw2Ljg2MjI5NTY1IEw3Ljc3NDAyMzc5LDYuODYyMjk1NjUgTDcuNzc0MDIzNzksNC40NjUzMzkxMyBaIE0yMS45NTU4MTgxLDI3LjczNDkwNDMgTDIxLjE5MTc2MTcsOC45NjQwNzgyNiBDMjEuMTUyNzczOCw3Ljc4NTUxMzA0IDIwLjE3OTgwNiw2Ljg2MjI5NTY1IDE4Ljk3NjgxNDEsNi44NjIyOTU2NSBMMTUuNTcyOTM1MSw2Ljg2MjI5NTY1IEwxNS41NzI5MzUxLDQuNDY1MzM5MTMgQzE1LjU3MjkzNTEsMi4wMDMyMDg3IDEzLjUyOTQ2MzMsMy40NzgyNjA4N2UtMDUgMTEuMDE3NTE1NywzLjQ3ODI2MDg3ZS0wNSBMMTAuOTM5NTg0MywzLjQ3ODI2MDg3ZS0wNSBDOC40Mjc3MjU0LDMuNDc4MjYwODdlLTA1IDYuMzg0MTY0OTIsMi4wMDMyMDg3IDYuMzg0MTY0OTIsNC40NjUzMzkxMyBMNi4zODQxNjQ5Miw2Ljg2MjI5NTY1IEwyLjk4MDI0MTUzLDYuODYyMjk1NjUgQzEuNzc3MjkzOTUsNi44NjIyOTU2NSAwLjgwNDM3MDU2NSw3Ljc4NTUxMzA0IDAuNzY1MzM4MzA2LDguOTYyNDY5NTcgTDAuMDAxMTkzMTQ1MTYsMjcuNzM2NDY5NiBDLTAuMDE4NTAwNDAzMiwyOC4zMjk4MTc0IDAuMjAyNjUyODIzLDI4Ljg5MTUxMyAwLjYyMzg5MDcyNiwyOS4zMTc5OTEzIEMxLjA0NTAzOTkyLDI5Ljc0NDUxMyAxLjYxMDU2NDExLDI5Ljk3OTQyNjEgMi4yMTYxODUwOCwyOS45Nzk0MjYxIEwxOS43NDA5MTQ5LDI5Ljk3OTQyNjEgQzIwLjM0NjQ5MTUsMjkuOTc5NDI2MSAyMC45MTE5NzE0LDI5Ljc0NDUxMyAyMS4zMzMxNjQ5LDI5LjMxNzk5MTMgQzIxLjc1NDM1ODUsMjguODkxNTEzIDIxLjk3NTU1NiwyOC4zMjk4MTc0IDIxLjk1NTgxODEsMjcuNzM0OTA0MyBaIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IkZpbGxlZCIgZmlsbD0iIzAwNzMzNiIgY3g9IjExIiBjeT0iMTkiIHI9IjUiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="checkout bag" class="checkout-bag" />
          <span className="bag__quantity">{cartTotal.productQuantity}</span>
        </span>
      </div>
    );

    // return (
    //   <div className={classes.join(' ')}>
    //     {/* If cart open, show close (x) button */}
    //     {this.state.isOpen && (
    //       <div
    //         onClick={() => this.closeFloatCart()}
    //         className="float-cart__close-btn"
    //       >
    //         X
    //       </div>
    //     )}

    //     {/* If cart is closed, show bag with quantity of product and open cart action */}
    //     {!this.state.isOpen && (
    //       <span
    //         onClick={() => this.openFloatCart()}
    //         className="bag bag--float-cart-closed"
    //       >
    //         <span className="bag__quantity">{cartTotal.productQuantity}</span>
    //       </span>
    //     )}

    //     <div className="float-cart__content">
    //       <div className="float-cart__header">
    //         <span className="bag">
    //           <span className="bag__quantity">{cartTotal.productQuantity}</span>
    //         </span>
    //         <span className="header-title">Bag</span>
    //       </div>

    //       <div className="float-cart__shelf-container">
    //         {products}
    //         {!products.length && (
    //           <p className="shelf-empty">
    //             Add some products in the bag <br />
    //             :)
    //           </p>
    //         )}
    //       </div>

    //       <div className="float-cart__footer">
    //         <div className="sub">SUBTOTAL</div>
    //         <div className="sub-price">
    //           <p className="sub-price__val">
    //             {`${cartTotal.currencyFormat} ${util.formatPrice(
    //               cartTotal.totalPrice,
    //               cartTotal.currencyId
    //             )}`}
    //           </p>
    //           <small className="sub-price__installment">
    //             {!!cartTotal.installments && (
    //               <span>
    //                 {`OR UP TO ${cartTotal.installments} x ${
    //                   cartTotal.currencyFormat
    //                 } ${util.formatPrice(
    //                   cartTotal.totalPrice / cartTotal.installments,
    //                   cartTotal.currencyId
    //                 )}`}
    //               </span>
    //             )}
    //           </small>
    //         </div>
    //         <div onClick={() => this.proceedToCheckout()} className="buy-btn">
    //           Checkout
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
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
)(FloatCart);
