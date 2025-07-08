import { useState } from 'react';
import { useNavigate } from 'react-router';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function onHandleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`, {
      state: { test: JSON.stringify({ name: 'sayed', age: 25 }) },
    });
    setQuery('');
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Order ID"
        className="rounded bg-white py-1 ps-2 outline-0 transition-all duration-300 placeholder:font-normal focus:translate-y-[-3px] focus:shadow-lg"
      />
    </form>
  );
}

export default SearchOrder;
