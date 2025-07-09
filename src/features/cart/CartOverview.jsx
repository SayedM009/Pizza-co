import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuanity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuanity) return;

  return (
    <footer className="flex items-center justify-between bg-stone-900 p-5 font-semibold text-stone-300 uppercase">
      <p className="space-x-5">
        <span>{String(totalCartQuanity).padStart(2, 0)} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </footer>
  );
}

export default CartOverview;
