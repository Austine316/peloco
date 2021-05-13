import React from "react";
import { NavLink, Link } from "react-router-dom";
import Paypal from "./../Paypal/Paypal";
import classes from "./CartTotals.css";
const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className={classes.Container}>
      <NavLink to="/shop">
        <Link to="#">
          <button className={classes.Btn}>Place Order</button>
        </Link>
        <button className={classes.Btn} onClick={() => clearCart()}>
          Clear Cart
        </button>
      </NavLink>
      <h3>
        <strong>SUBTOTAL : </strong>₦{cartSubTotal}
      </h3>
      <h3>
        <strong>Delivery Fee : </strong>
        {cartTax}
      </h3>
      <h3>
        <strong>TOTAL : </strong>₦{cartTotal}
      </h3>
      {/* <Paypal 
      total={cartTotal}
      clearCart={clearCart}
      history={history}
      /> */}
    </div>
  );
};

export default CartTotals;
