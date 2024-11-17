import "./Button.css";

function Button({ children, handleClick }: any) {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
