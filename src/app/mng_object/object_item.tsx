"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/icon/icon";
import Add from "./add";
import "./mng_obj.css";

interface IDictionary {
  key: string;
  value: object;
}

export default function ObjectItem({
  data,
  setParentChildren,
}: {
  data: string;
  setParentChildren: (obj: IDictionary[]) => void;
}) {
  const [inputValue, setInputValue] = useState(data);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [children, setChildren] = useState<IDictionary>([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isInputDisabled]);

  useEffect(() => {
    setParentChildren(prev => {
      const index = prev.findIndex(item => item.key === data);
      alert(index);
      //prev[index].value = children;
      return prev;
    });
  }, [children]);

  const handleEditClick = () => {
    setInputDisabled(false);
  };

  const handleAddClick = () => {
    setChildren([...children, { key: "", value: null }]);
  };

  const handleDeleteClick = () => {
    setParentChildren(prev => {
      const updatedChildren = [...prev];
      updatedChildren.splice(index, 1);
      return updatedChildren;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isInputDisabled) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className='container-add'>
      <div className='p-1.5 flex justify-center items-center mngObj'>
        <input
          ref={inputRef}
          placeholder='objet'
          value={inputValue}
          className='border-black border-b-blue-700 border-2 text-white bg-black p-1.5'
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
          <Add index={index} setParentChildren={setChildren} />
        ))}
      </ul>
    </div>
  );
}
