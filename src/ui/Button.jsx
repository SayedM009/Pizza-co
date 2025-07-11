import { useNavigate } from 'react-router';

function Button({ children, disabled, to, type = 'small', handleClick }) {
  const navigate = useNavigate();
  const base =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:bg-yellow-300 focus:outline-none focus:ring focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:cursor-pointer';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5',
    rounded: base + 'rounded-full py-1 px-3 ',
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
  return (
    <button
      disabled={disabled}
      className={styles[type]}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

export default Button;
