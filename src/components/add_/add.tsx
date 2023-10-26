"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/icon/icon";
import Interruptor from "@/components/interruptor/interruptor";
import "./add.css";

enum Type {
  string,
  number,
  boolean,
  object,
  array,
}

interface IJson {
  name: "string";
  value: any;
  type: string;
}

export default function Add() {
  const [jsonValue, setJsonValue] = useState<IJson>([]);
  const [isAutoKey, setIsAutoKey] = useState(true);

  useEffect(() => {}, [jsonValue]);

  function handleKey(interruptor: boolean) {
    setIsAutoKey(interruptor);
  }

  function handleClick() {
    setJsonValue(prev => [...prev, { name: "", value: "", type: "text" }]);
  }

  function handleClose(index: number) {
    setJsonValue(prev => [...prev.filter((e, i) => i != index)]);
  }

  function handleChange(event) {
    const prop = event.target.dataset.prop;
    const name = event.target.name;
    const value = event.target.value;

    setJsonValue(prevState => {
      const updatedJsonValue = [...prevState];
      if (name === "name") {
        updatedJsonValue[prop].name = value;
      } else if (name === "value") {
        if (updatedJsonValue[prop].type === "radio") {
          updatedJsonValue[prop].value = value === "true" ? true : false;
        } else {
          updatedJsonValue[prop].value = value;
        }
      } else if (name === "type") {
        updatedJsonValue[prop].value = "";
        if (value == Type.string) {
          updatedJsonValue[prop].type = "text";
        } else if (value == Type.number) {
          updatedJsonValue[prop].type = "number";
        } else if (value == Type.boolean) {
          updatedJsonValue[prop].type = "radio";
          updatedJsonValue[prop].value = false;
        } else if (value == Type.object) {
          updatedJsonValue[prop].type = "object";
        } else if (value == Type.array) {
          updatedJsonValue[prop].type = "array";
        }
      }
      return updatedJsonValue;
    });
    console.log(jsonValue);
  }

  return (
    <div className='container-add'>
      <div className='container-obcjet-name'>
        <input placeholder='Object Name' />
        <button onClick={handleClick}>
          <Icon iconName='list_alt_add' />
        </button>
      </div>
      <div className='auto-key'>
        <div className='interruptor-key'>
          <label>Auto key? </label>
          <Interruptor activated={isAutoKey} onToggle={handleKey} />
        </div>

        {isAutoKey && (
          <div className='label-key'>
            <label>Key: </label>
            <label>hsud7dh7wheu7ejw8idje7ejd8kdyd</label>
          </div>
        )}
      </div>
      <br />

      <fieldset>
        {jsonValue.map((prop: IJson, index: number) => (
          <fieldset key={index} className='prop'>
            <legend>
              <label>Propertie</label>
              <button onClick={() => handleClose(index)}>
                <Icon iconName='close' />
              </button>
            </legend>
            <div className='container-input'>
              <input
                name='name'
                data-prop={index}
                placeholder='Object key'
                value={prop.name}
                onChange={handleChange}
              />

              {prop.type != "radio" ? (
                <input
                  name='value'
                  type={prop.type}
                  data-prop={index}
                  placeholder='Object value'
                  value={prop.value}
                  onChange={handleChange}
                />
              ) : (
                <fieldset className='container-radio'>
                  <label>True</label>
                  <input
                    name='value'
                    checked={prop.value}
                    type={"radio"}
                    data-prop={index}
                    placeholder='Object value'
                    value='true'
                    onChange={handleChange}
                  />
                  <label>False</label>
                  <input
                    name='value'
                    checked={!prop.value}
                    type={"radio"}
                    data-prop={index}
                    placeholder='Object value'
                    value='false'
                    onChange={handleChange}
                  />
                </fieldset>
              )}
            </div>
            <div className='container-select'>
              <select name='type' data-prop={index} onChange={handleChange}>
                <option value={Type.string}>String</option>
                <option value={Type.number}>Number</option>
                <option value={Type.boolean}>Boolean</option>
                <option value={Type.object}>Object</option>
                <option value={Type.array}>Array</option>
              </select>
            </div>
          </fieldset>
        ))}
      </fieldset>
    </div>
  );
}
