import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="py-10 text-center text-xl font-semibold">
      <h1 className="text-stone-800">The best pizza.</h1>
      <p className="mb-5 text-yellow-500">
        Straight out of the oven, straight to you.
      </p>
      <CreateUser />
    </div>
  );
}

export default Home;
