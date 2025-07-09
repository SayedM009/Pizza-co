import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
function Home() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="py-10 text-center text-xl font-semibold">
      <h1 className="text-stone-800">The best pizza.</h1>
      <p className="mb-5 text-yellow-500">
        Straight out of the oven, straight to you.
      </p>
      {userName ? (
        <Button to="/menu" type="small">
          Continue ordering, {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
