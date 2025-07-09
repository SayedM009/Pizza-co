import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export async function loader() {
  const menu = await getMenu();
  return menu;
}
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-50">
      {menu.map((pizza, index) => (
        <MenuItem pizza={pizza} key={index} />
      ))}
    </ul>
  );
}

export default Menu;
