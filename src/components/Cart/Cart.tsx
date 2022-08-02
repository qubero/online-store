import { useAppSelector } from '../../hooks/redux';

const Cart = () => {
  const cart = useAppSelector((state) => state.products.cart);

  return <b style={{ width: 75 }}>InCart: {cart.length}</b>;
};

export default Cart;
