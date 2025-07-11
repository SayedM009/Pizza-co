import { useState } from 'react';
import { createOrder } from '../../services/apiRestaurant';
import { redirect, useActionData, useNavigation } from 'react-router';
import { Form } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { clearCart, getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
};

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const userName = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h2 className="my-5 text-3xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-2 flex items-center justify-between">
          <label className="w-74">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={userName}
            required
            className="w-full bg-white ps-2 uppercase"
          />
          {formErrors?.customer && (
            <div className="errorMessage">
              <FiAlertCircle />
              {formErrors.customer}
            </div>
          )}
        </div>

        <div className="mb-2 flex items-center justify-between">
          <label className="w-74">Phone number</label>
          <div className="w-full">
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-white"
            />
            {formErrors?.phone && (
              <div className="errorMessage">
                <FiAlertCircle />
                {formErrors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="w-74">Address</label>
          <div className="w-full">
            <input
              type="text"
              name="address"
              required
              className="w-full bg-white"
            />
            {formErrors?.address && (
              <div className="errorMessage">
                <FiAlertCircle />
                {formErrors.address}
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-4 w-4 accent-yellow-500"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="my-3 select-none">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input
            type="hidden"
            name="cart"
            id="cart"
            value={JSON.stringify(cart)}
          />
        </div>

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'loading' : 'Order new'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const errors = {};

  if (order.customer.length <= 2)
    errors.customer = 'You name should be larger than 2 chracters';

  if (!isValidPhone(order.phone))
    errors.phone = 'Please enter a valid phone number';

  if (order.address.length <= 4)
    errors.address = 'You address should be larger than 5 chracters';

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
