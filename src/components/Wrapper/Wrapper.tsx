import { ReactElement, ReactPortal } from "react";
import "./Wrapper.css";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};

function Wrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
