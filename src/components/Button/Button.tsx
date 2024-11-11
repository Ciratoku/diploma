import { Props } from "@/types";
import "./Button.css";

function Button({ children }: Props) {
  return <button className="btn">{children}</button>;
}

export default Button;
