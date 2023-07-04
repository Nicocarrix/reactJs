import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, eliminateProduct } = useContext(CartContext);

  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        eliminateProduct={eliminateProduct}
      />
    </div>
  );
};

export default CartContainer;
