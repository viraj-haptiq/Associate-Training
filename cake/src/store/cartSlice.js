import { createSlice, createSelector } from "@reduxjs/toolkit";
import { parsePrice } from "../utils/priceParser";

const initialState = {
  items: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart(state, action) {
      const productToAdd = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product: productToAdd, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.product.id !== productIdToRemove
      );
    },
    incrementQuantity(state, action) {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        return cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
  },
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => {
    const price = parsePrice(item.product.price);
    return total + price * item.quantity;
  }, 0)
);
