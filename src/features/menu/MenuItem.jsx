import { formatCurrency } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import Button from '../../ui/Button';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
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
          {!soldOut && <Button handleClick={handleOnClick}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
