import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <footer className="flex items-center justify-between bg-stone-900 p-5 font-semibold text-stone-300 uppercase">
      <p className="space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </footer>
  );
}

export default CartOverview;
