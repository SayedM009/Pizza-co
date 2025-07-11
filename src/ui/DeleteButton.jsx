import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';

export default function DeleteButton({ children, pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" handleClick={handleDeleteItem}>
      {children}
    </Button>
  );
}
