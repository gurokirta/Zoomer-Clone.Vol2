import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useStore } from "../../zustand/store";
import "./Cart.scss";
const Cart = () => {
  const cartItems = useStore(state => state.cartItems);
  const removeFromCart = useStore(state => state.removeFromCart);
  const getTotalPrice = useStore(state => state.getTotalPrice);
  const clearCart = useStore(state => state.clearCart);
  return (
    <Box className="cart-container">
      <Typography variant="h4" className="cart-title">
        Shopping Cart
      </Typography>
      <Box className="cart-items">
        {cartItems.map(item => (
          <Box key={item.id} className="cart-item">
            <img
              src={item.images[0]}
              alt={item.title}
              className="cart-item-image"
            />
            <Typography className="cart-item-title">{item.title}</Typography>
            <Typography className="cart-item-price">
              {parseFloat(item.price.toString()).toFixed(2)}₾
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
        ))}
      </Box>
      <Box className="cart-summary">
        <Typography variant="h6">
          Total:
          {parseFloat(getTotalPrice().toString()).toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className="remove-button"
          onClick={() => clearCart()}
        >
          Clear Cart
        </Button>
        <Button variant="contained" color="primary" className="checkout-button">
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};
export default Cart;
