"use client";
import React, { useState, useEffect } from "react";
import "./interruptor.css";

interface Props {
  activated: boolean;
  onToggle: (activado: boolean) => void;
}

export default function Interruptor({ activated, onToggle }): React.FC<Props> {
  const [active, setActive] = useState(activated);

  useEffect(() => {
    onToggle(active);
  }, [active]);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <button className={`interruptor`} onClick={handleToggle}>
      <div className={`bool ${active ? "activated" : "desactive"}`}></div>
    </button>
  );
}
