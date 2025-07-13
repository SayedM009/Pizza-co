import { formatCurrency } from '../../utils/helpers';

import DeleteButton from '../../ui/DeleteButton';
import UpdateQuantity from '../../ui/UpdateQuantity';
function CartItem({ item, isDeleteBtn = true }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="bg-white px-3 py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <section className="space-x-1">
          <UpdateQuantity id={pizzaId} />
          {isDeleteBtn && <DeleteButton pizzaId={pizzaId}>Delete</DeleteButton>}
        </section>
      </div>
    </li>
  );
}

export default CartItem;
