import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../user/userSlice';
import { clearCart, getCart } from './cartSlice';

import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="my-5 font-semibold uppercase">Your cart, {userName}</h2>
      <ul className="my-5 divide-y divide-stone-300">
        {cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>

      <div className="flex gap-5">
        <Button to="/order/new">Order pizzas</Button>
        <Button handleClick={handleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
