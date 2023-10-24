"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/icon/icon";
import "./mng_obj.css";

interface IDictionary {
  key: string;
  value: object;
}

interface IAddProps {
  index: numbert;
  setParentChildren: (obj: IDictionary[]) => void;
}

export default function Add({ index, setParentChildren }: IAddProps) {
  const [inputKey, setInputKey] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isInputDisabled, setInputDisabled] = useState(false);
  const [children, setChildren] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isInputDisabled]);

  const handleEditClick = () => {
    setInputDisabled(false);
  };

  const handleAddClick = () => {
    setChildren([...children, "add"]);
  };

  const handleDeleteClick = () => {
    setParentChildren(prev => {
      alert(JSON.stringify(prev));
      const updatedChildren = [...prev];
      updatedChildren.splice(index, 1);
      return updatedChildren;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isInputDisabled) {
      if (e.target.name === "key") {
        setParentChildren(prev => {
          prev[index].key = e.target.value;
          return prev;
        });
        setInputKey(e.target.value);
      } else if (e.target.name === "value") {
        setParentChildren(prev => {
          prev[index].value = e.target.value;
          return prev;
        });
        setInputValue(e.target.value);
      }
    }
  };

  return (
    <li className='container-add'>
      <div className='p-1.5 flex justify-center items-center mngObj'>
        <input
          name='key'
          ref={inputRef}
          placeholder='Key objet'
          value={inputKey}
          className='border-black border-b-blue-700 border-2 text-white bg-black p-1.5 w-3/12'
          onChange={handleInputChange}
          disabled={isInputDisabled}
        />
        <input
          name='value'
          placeholder='Value objet'
          value={inputValue}
          className='border-black border-b-blue-700 border-2 text-white bg-black p-1.5 w-3/12'
          onChange={handleInputChange}
          disabled={isInputDisabled}
        />
        {!isInputDisabled ? (
          <button onClick={() => setInputDisabled(true)}>
            <Icon iconName='done' />
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <Icon iconName='edit_note' />
          </button>
        )}
        <button onClick={handleAddClick}>
          <Icon iconName='list_alt_add' />
        </button>
        <button onClick={() => handleDeleteClick()}>
          <Icon iconName='contract_delete' />
        </button>
      </div>
      <ul>
        {children.map((child, index) => (
          <Add />
        ))}
      </ul>
    </li>
  );
}
