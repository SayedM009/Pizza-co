import { useSelector } from 'react-redux';

export default function UserName() {
  const userName = useSelector((state) => state.user.username);
  return <h1 className="hidden md:block">{userName}</h1>;
}
