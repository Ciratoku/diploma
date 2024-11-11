import { Props } from "@/types";
import "./Wrapper.css";

function Wrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
