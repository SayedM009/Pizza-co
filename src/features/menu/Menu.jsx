import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  return menu;
}
function Menu() {
  const menu = useLoaderData();
  return menu.map((pizza, index) => <MenuItem pizza={pizza} key={index} />);
}

export default Menu;
