import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
function CartItem({ item, isDeleteBtn = true }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        {isDeleteBtn && (
          <Button type="small" handleClick={handleDeleteItem}>
            Delete
          </Button>
        )}
      </div>
    </li>
  );
}

export default CartItem;
