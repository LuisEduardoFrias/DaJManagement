"use client";

import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
// import "prismjs/components/prism-json";
import "./editor.css";

export default function Editor({ value }: { value: string }): React.FC {
  const [texto, setTexto] = useState(value);
  const [lineas, setLineas] = useState("");

  const textoRef = useRef<HTMLTextAreaElement>(null);
  const lineasRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const lineasTexto = texto
      .split("\n")
      .map((_, index) => `${index + 1}\n`)
      .join("");
    setLineas(lineasTexto);
  }, [texto]);

  const handleTextoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13) {
      // Verifica si se presiona la tecla Enter
      const lineasTexto = event.target.value
        .split("\n")
        .map((_, index) => `${index + 1}\n`)
        .join("");
      setLineas(lineasTexto);
    }
    setTexto(event.target.value);
  };

  const handleScroll = () => {
    if (textoRef.current && lineasRef.current) {
      const scrollTop = textoRef.current.scrollTop;
      lineasRef.current.scrollTop = scrollTop;
    }
  };

  return (
    <>
      <pre>
        <code className='language-css'>{" p { color: red }"}</code>
      </pre>
      <code className='language-css'>{"p { color: red }"}</code>
      <div className='editor-container'>
        <textarea
          ref={lineasRef}
          className='lineas-textarea'
          rows={10}
          value={lineas}
          readOnly
        />
        <textarea
          ref={textoRef}
          className='texto-textarea language-json'
          rows={10}
          value={texto}
          onChange={handleTextoChange}
          onScroll={handleScroll}
        />
      </div>
    </>
  );
}
