"use client";

import "./editor_text.css";
import React, { useState, useEffect } from "react";

export default function EditorText({ json }: string): JSX.Element {
  useEffect(() => {
    InsertJson(json, "style-text");
  }, [json]);

  return (
    <>
      <pre className='style-text'></pre>
    </>
  );
}

function InsertJson(json, className) {
  var openComment, styles, writeStyleChar, writeStyles;

  styles = json;

  writeStyleChar = function (char, element) {
    if (char === "/" && openComment === false) {
      openComment = true;
      styles = element.innerHTML + char;
    } else if (char === '"' && openComment === true) {
      openComment = false;
      styles = element.innerHTML.replace(
        /(\/[^\/]*\*)$/,
        '<em className="key">$1/</em>',
      );
    } else if (char === ":") {
      styles = element.innerHTML.replace(
        /([a-zA-Z- ^\n]*)$/,
        '<em className="value">$1</em>:',
      );
    } else if (char === "[" || char === "]") {
      styles = element.innerHTML.replace(
        /([^:]*)$/,
        '<em className="llave" >$1</em>;',
      );
    } else if (char === "{" || char === "}") {
      styles = element.innerHTML.replace(
        /(.*)$/,
        '<em className="corchete">$1</em>{',
      );
    } else {
      styles = element.innerHTML + char;
    }
    element.innerHTML = styles;
  };

  writeStyles = function (message, index) {
    if (index < message.length) {
      var element = document.querySelector(`.${className}`);

      element.scrollTop = element.scrollHeight;

      writeStyleChar(message[index++], element);
      return writeStyles(message, index);
    }
  };

  writeStyles(styles, 0);
}
