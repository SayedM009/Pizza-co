import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header className="text-font-extrabold md:text-normal bg-yellow-500 p-4 text-center font-bold uppercase md:flex md:items-center md:justify-between">
      <Link to="/" className="mb-5 block tracking-wider md:mb-0">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <h1 className="hidden md:block">User</h1>
    </header>
  );
}
