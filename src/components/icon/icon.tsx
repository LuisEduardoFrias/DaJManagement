import { CSSProperties } from "react";
import "./icon.css";

export default function Icon({
  iconName,
  classCss,
  style,
  id,
}: {
  iconName: string;
  classCss: string;
  id: string;
  style?: CSSProperties;
}) {
  return (
    <i
      className={`material-symbols-outlined icon__ ${classCss}`}
      style={{
        userSelect: "none",
        ...style,
      }}
      id={id}
    >
      {iconName}
    </i>
  );
}
