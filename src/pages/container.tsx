import type { ReactNode } from "react";
import "./container.css";
interface Props {
  children: ReactNode;
}

export default function Container(props: Props) {
  return <div className="container">{props.children}</div>;
}
