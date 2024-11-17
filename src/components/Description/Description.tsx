import { useEffect, useRef, useState } from "react";
import "./Description.css";

// TODO: if description is array

const pStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
} as any;

function Description({ description }: any) {
  const [isOpened, setIsOpened] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const ref: any = useRef(null);
  useEffect(() => {
    if (ref.current)
      setShowMoreButton(ref.current.scrollHeight !== ref.current.clientHeight);
  }, []);
  return (
    <div className="block">
      <p style={isOpened ? null : pStyle} ref={ref}>
        {description}
      </p>
      {showMoreButton && (
        <div className="expand">
          {isOpened ? <p> </p> : <p>...</p>}
          <button onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? "скрыть" : "развернуть"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Description;
