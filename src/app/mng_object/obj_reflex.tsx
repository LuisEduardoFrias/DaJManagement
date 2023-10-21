"use client";
import React, { useState } from "react";
import "./mng_obj.css";
import Icon from "@/components/icon/icon";
import { isObject, isArray } from "./page";

export default function ObjRefle({ obj }: Object) {
  return (
    <>
      {obj.map((e, i) => (
        <ButtonObject obj={e} />
      ))}
    </>
  );
}

export function ButtonObject({ obj }: Object) {
  const [showList, setShowList] = useState(false);

  function handleClick(event) {
    setShowList(true);
  }

  const StyleMyButton = {
    width: !showList ? "25px" : "100%",
    height: !showList ? "25px" : "300px",
  };

  return (
    <button id='myButton' style={StyleMyButton} onClick={handleClick}>
      {!showList ? (
        <Icon id='myIcon' iconName='indeterminate_question_box' />
      ) : (
        <div id='myIconClose'>
          <Icon iconName='close' id='IconClose' />
        </div>
      )}
      {showList && (
        <ul id='myList'>
          <List obj={obj} />
        </ul>
      )}
    </button>
  );
}

export function List({ obj }: object) {
  return (
    <>
      {Object.keys(obj).map((key, index) => (
        <li key={index} id='listIten'>
          <label id='itemKey'>{key}:</label>
          {Array.isArray(obj[key]) ? (
            <ul id='itemUl'>
              {/*
               obj[key].forEach((element, inde) => {
                if (isArray(element)) {
                  return (
                    <>
                      {element.map((ele, ind) => {
                        if (isObject(ele)) {
                          return <ObjRefle key={ind} obj={obj[key]} />;
                        } else {
                          return (
                            <input
                              key={ind}
                              disabled={true}
                              id='itemValue'
                              value={obj[key]}
                            />
                          );
                        }
                      })}
                    </>
                  );
                } else if (isObject(element)) {
                  return <ObjRefle obj={element} />;
                } else {
                  return (
                    <input
                      key={inde}
                      disabled={true}
                      id='itemValue'
                      value={element}
                    />
                  );
                }
              })
              */}

              {obj[key].map((item, itemIndex) => {
                if (typeof item === "object") {
                  return <ButtonObject obj={item} />;
                } else {
                  return <li key={itemIndex}>{item}</li>;
                }
              })}
            </ul>
          ) : (
            <input disabled={true} id='itemValue' value={obj[key]} />
          )}
        </li>
      ))}
    </>
  );
}
