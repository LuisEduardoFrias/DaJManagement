"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/icon/icon";
import ObjectItem from "./object_item";
import "./mng_obj.css";
import { Guid } from "js-guid";

interface IDictionary {
  key: string;
  value: object;
}

export default function ObjectBaseName({
  tittle,
  data,
}: {
  title: string;
  data: object;
}) {
  const [inputValue, setInputValue] = useState(title);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [children, setChildren] = useState<IDictionary>([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isInputDisabled]);

  const _newObj: string = Guid.newGuid().StringGuid;

  const handleEditClick = () => {
    setInputDisabled(false);
  };

  const handleAddClick = () => {
    setChildren(prev => [...prev, { key: _newObj, value: null }]);
  };

  const handleDeleteClick = () => {};

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
          <ObjectItem data={_newObj} setParentChildren={setChildren} />
        ))}
      </ul>
    </div>
  );
}
