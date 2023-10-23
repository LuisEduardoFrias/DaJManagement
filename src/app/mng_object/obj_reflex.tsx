"use client";
import React, { useState, useEffect } from "react";
import "./mng_obj.css";
import Icon from "@/components/icon/icon";

enum Types {
  s = "string",
  n = "number",
  b = "boolean",
  a = "array",
  o = "object",
}

export function isString(obj: object): boolean {
  return typeof obj === "string";
}

export function isNumber(obj: object): boolean {
  return !isNaN(obj);
}

export function isBoolean(obj: object): boolean {
  return typeof obj === "boolean";
}

export function CheckType(obj: string | number | boolean): Types {
  if (isBoolean(obj)) {
    return Types.b;
  } else if (isNumber(obj)) {
    return Types.n;
  } else if (isString(obj)) {
    return Types.s;
  }
}

export function StyleType(obj: string | number | boolean): string {
  const value: Types = CheckType(obj);
  if (value === Types.s) return "string";
  else if (value === Types.n) return "number";
  else if (value === Types.b) return "boolean";
}

export function isObject(obj: object): boolean {
  return !Array.isArray(obj) && typeof obj === "object";
}

export function isArray(obj: object): boolean {
  return Array.isArray(obj) && typeof obj === "object";
}

export default function ObjectRead({ obj }: Object) {
  return (
    <>{Array.isArray(obj) ? <Corchete obj={obj} /> : <Llave obj={obj} />}</>
  );
}

enum WrapType {
  corchete,
  llave,
}

interface ISpanProps {
  children: ReactNode;
  wrapType: WrapType;
}

function handleDoubleClick(event) {
  // event.target.readOnly = false;
  //   event.target.style.borderBottom = "3px solid blue";
  //   event.target.style.borderRadius = "0 0 3px 3px";
}

function Expand(props: ISpanProps) {
  const [icon, setIcon] = useState("expand_more");
  const [isExpand, setIsExpand] = useState(true);
  const _class: string =
    props.wrapType === WrapType.corchete ? "corchete" : "llave";
  const wrap: boolean = props.wrapType === WrapType.corchete ? true : false;

  useEffect(() => {
    setIcon(isExpand ? "expand_more" : "chevron_right");
  }, [isExpand]);

  function handleClick() {
    setIsExpand(!isExpand);
  }

  return (
    <div className={isExpand ? "expand" : "contract"}>
      <div
        className={
          isExpand ? "container-icon-expand" : "container-icon-contract"
        }
      >
        <button onClick={handleClick}>
          <Icon iconName={icon} />
        </button>
      </div>
      <div
        className={
          isExpand ? "container-data-expand" : "container-data-contract"
        }
      >
        <i className={_class}>{wrap ? "[" : "{"}</i>
        {isExpand ? props.children : <Icon iconName={"more_horiz"} />}
        <i className={_class}>{wrap ? "]" : "}"}</i>
      </div>
    </div>
  );
}

function Corchete({ obj }: Object) {
  return (
    <Expand wrapType={WrapType.corchete}>
      <div className='list-items'>
        {obj.map((e, i) => {
          return isObject(e) ? (
            <ObjectRead obj={e} />
          ) : (
            <>
              <input
                readOnly={true}
                onDoubleClick={handleDoubleClick}
                className={StyleType(e)}
                value={e.toString()}
              />
              <br />
            </>
          );
        })}
      </div>
    </Expand>
  );
}

function Llave({ obj }: Object) {
  return (
    <Expand wrapType={WrapType.llave}>
      <div className='list-items'>
        {Object.keys(obj).map((key, index) => (
          <div key6={index} className='items'>
            <label className='key'>{key}:</label>
            {Array.isArray(obj[key]) ? (
              <Corchete obj={obj[key]} />
            ) : (
              <input
                name={key}
                readOnly={true}
                onDoubleClick={handleDoubleClick}
                className={StyleType(obj[key])}
                value={obj[key].toString()}
              />
            )}
          </div>
        ))}
      </div>
    </Expand>
  );
}
