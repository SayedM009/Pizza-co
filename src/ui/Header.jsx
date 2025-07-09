import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from './UserName';
import { useSelector } from 'react-redux';

export default function Header() {
  const userName = useSelector((state) => state.user.username);
  return (
    <header
      className={`text-font-extrabold md:text-normal border-b-amber-200 bg-yellow-500 p-4 text-center font-bold uppercase md:flex md:items-center md:justify-between`}
    >
      <Link to="/" className="font-roboto mb-5 block tracking-wider md:mb-0">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      {userName && <UserName />}
    </header>
  );
}
