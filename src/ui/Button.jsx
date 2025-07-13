import { useNavigate } from 'react-router';

function Button({ children, disabled, to, type = 'small', handleClick }) {
  const navigate = useNavigate();
  const base =
    'inline-block rounded-full  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  focus:ring  focus:outline-none focus:ring focus:ring  disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer ';

  const bg =
    'bg-yellow-400 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2';

  const styles = {
    primary: base + bg + 'px-4 py-3 md:px-6 md:py-4',
    secondary:
      'px-4 py-3 md:px-6 md:py-4 bg-gray-300  outline-gray-400 hover:bg-white' +
      base,
    small: base + bg + 'px-4 py-2 md:px-5 md:py-2.5',
    rounded: base + bg + 'rounded-full py-1 px-3 ',
  };

  if (to === '-1')
    return (
      <Link to={to} disabled={disabled} className={styles[type]}>
        {children}
      </Link>
    );

  if (handleClick)
    return (
      <button
        disabled={disabled}
        className={styles[type]}
        onClick={handleClick}
      >
        {children}
      </button>
    );

  if (to)
    return (
      <button
        disabled={disabled}
        className={styles[type]}
        onClick={() => navigate(to)}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
