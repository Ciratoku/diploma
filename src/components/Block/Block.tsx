import "./Block.css";

function Block() {
  const desc: string[] = [
    "🏆 19 попаданий в галерею Made on Tilda",
    "🏆 10 международных наград Awwwards HM",
  ];
  return (
    <div className="block-wrapper">
      <p>описание</p>
      <div className="block">
        {desc.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
}

export default Block;
