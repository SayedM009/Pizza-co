function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="mt-2 w-74 rounded bg-yellow-500 px-3 py-2 text-white hover:cursor-pointer hover:bg-yellow-400 active:bg-stone-400"
    >
      {children}
    </button>
  );
}

export default Button;
