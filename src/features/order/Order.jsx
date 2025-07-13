// Test ID: IIDSAT

import { useLoaderData } from 'react-router';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import CartItem from '../cart/CartItem';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const x = 10;

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data) fetcher.load('/menu');
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Order #{id} Status</h2>

        <div className="uppercase">
          {priority && (
            <span className="me-2 rounded-full bg-red-500 p-2 text-sm text-stone-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 p-2 text-sm text-stone-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="my-10 flex items-center justify-between bg-stone-300 p-4 font-semibold text-stone-900">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="my-5 divide-y divide-stone-300">
        {cart.map((item, index) => {
          return (
            <li className="flex items-center justify-between py-3">
              <div>
                <p>
                  {item.quantity}&times; {item.name}
                </p>
                <p className="mt-2 text-[12px] font-light uppercase italic">
                  {fetcher.state === 'loading' ? (
                    <div>loading...</div>
                  ) : (
                    fetcher?.data
                      ?.filter((pizza) => pizza.name == item.name)[0]
                      .ingredients.join(', ')
                  )}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {formatCurrency(item.totalPrice)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="my-10 bg-stone-300 p-4 font-semibold text-stone-900">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export default Order;
