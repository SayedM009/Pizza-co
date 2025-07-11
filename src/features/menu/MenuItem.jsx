import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCart, getItemQunatity } from '../cart/cartSlice';
import Button from '../../ui/Button';
import DeleteButton from '../../ui/DeleteButton';
import UpdateQuantity from '../../ui/UpdateQuantity';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const quantity = useSelector(getItemQunatity(id));
  const dispatch = useDispatch();

  function handleOnClick() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="mb-2 flex gap-2 py-3">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && quantity == 0 && (
            <Button handleClick={handleOnClick}>Add to cart</Button>
          )}
          {quantity > 0 && (
            <div className="space-x-1">
              <UpdateQuantity id={id} />
              <DeleteButton pizzaId={id}>Delete</DeleteButton>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
