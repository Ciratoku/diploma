import "./Block.css";

function Block({ children, title }: any) {
  return (
    <div className="block-wrapper">
      <p>{title}</p>
      {children}
    </div>
  );
}

export default Block;
