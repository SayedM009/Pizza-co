import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getItemQunatity,
  increaseItemQuantity,
} from '../features/cart/cartSlice';

export default function UpdateQuantity({ id }) {
  const quantity = useSelector(getItemQunatity(id));
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="rounded"
        handleClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        type="rounded"
        handleClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </Button>
    </>
  );
}
