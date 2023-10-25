"use client";

import { useState } from "react";
import Icon from "@/components/icon/icon";
import "./add.css";

interface IJson {
  name: "string";
  value: any;
}

export default function Add() {
  const [jsonValue, setJsonValue] = useState<IJson>([]);
  const [typeValue, setTypeValue] = useState("text");

  function handleClick() {
    setJsonValue(prev => [...prev, { name: "", value: null }]);
  }

  function handleChange(event) {
    const prop = event.target.dataset.prop - 1;
    const name = event.target.name;
    const value = event.target.value;

    console.log(jsonValue);
    console.log(prop);
    console.log(jsonValue[prop]);

    if (name === "name") {
      jsonValue[prop].key = value;
    } else if (name === "value") {
      jsonValue[prop].value = value;
    } else if (name === "type") {
      if (value === "string") {
        setTypeValue("text");
        //jsonValue[prop].value = event.target.dataset.value;
      } else if (value === "number") {
        setTypeValue("number");
        //jsonValue[prop].value = parseInt(event.target.dataset.value);
      } else if (value === "boolean") {
        setTypeValue("radio");
        // jsonValue[prop].value = JSON.parse(event.target.dataset.value);
      } else if (value === "object") {
        //jsonValue[prop].value = event.target.dataset.value;
      } else if (value === "array") {
        // jsonValue[prop].value = event.target.dataset.value;
      }
    }
  }

  return (
    <div className='container-add'>
      <div>
        <input placeholder='Object Name' />
        <button onClick={handleClick}>
          <Icon iconName='list_alt_add' />
        </button>
      </div>
      <label>Properties</label>
      <group>
        {jsonValue.map((prop: IJson, index: numbee) => (
          <div key={index} className='prop'>
            <input
              name='name'
              data-prop={jsonValue.length}
              placeholder='Object key'
              value={prop.value}
              onChange={handleChange}
            />
            <label hidden={typeValue != "radio"}>true</label>
            <input
              name='value'
              checked={false}
              type={typeValue}
              data-prop={jsonValue.length}
              placeholder='Object value'
              value={prop.value}
              onChange={handleChange}
            />
            <label hidden={typeValue != "radio"}>false</label>
            <input
              name='value'
              checked={true}
              hidden={typeValue != "radio"}
              type={"radio"}
              data-prop={jsonValue.length}
              placeholder='Object value'
              value={prop.value}
              onChange={handleChange}
            />
            <select
              name='type'
              data-prop={jsonValue.length}
              data-value={prop.value}
              onChange={handleChange}
            >
              <option value='string'>String</option>
              <option value='number'>Number</option>
              <option value='boolean'>Boolean</option>
              <option value='object'>Object</option>
              <option value='array'>Array</option>
            </select>
          </div>
        ))}
      </group>
    </div>
  );
}
