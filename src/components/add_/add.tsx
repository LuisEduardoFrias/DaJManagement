"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/icon/icon";
import NewGuid from "@/components/new_guid/new_guid.ts";
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
  const [objectName, setObjectName] = useState();
  const [jsonValue, setJsonValue] = useState<IJson>([]);
  const [isAutoKey, setIsAutoKey] = useState(true);
  const [key, setKey] = useState(NewGuid());

  useEffect(() => {
    if (key != "") {
      setJsonValue(prev => {
        if (jsonValue[0]?.name != "Key") {
          prev.reverse();
          prev.push({ name: "Key", value: key, type: "Key" });
          prev.reverse();
        }
        return prev;
      });
    } else if (key === "") {
      if (jsonValue.length >= 1) {
        if (jsonValue[0].name === "Key") {
          setJsonValue(prev => [...prev.filter((e, i) => i != 0)]);
        }
      }
    }
  }, [key]);

  useEffect(() => {
    console.log(jsonValue);
  }, [jsonValue]);

  function fetch(data) {
    alert("llamar al fetch");
    
    fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        alert(data);
        // Hacer algo con la respuesta del servidor
      })
      .catch(error => {
        alert(error);
        // Manejar cualquier error que pueda ocurrir
      });

    alert("fetch");
  }
  
  function handleSave() {
    alert("save");
    if (objectName === "" || objectName === undefined) {
      alert("The name of the object still needs to be entered");
    } else if (!(jsonValue.length >= 1)) {
      alert("Add at least one property");
    } else {
      let _string: string = "{";

      const newObject = jsonValue.map((prop, i) => {
        _string += `"${prop.name}":${
          prop.type === "text" || prop.type === "Key" ? '"' : ""
        }${prop.value}${
          prop.type === "text" || prop.type === "Key" ? '"' : ""
        }`;
        if (i + 1 < jsonValue.length) _string += `,`;
      });

      _string += "}";

      alert(_string);
      const ob = JSON.parse(_string);
      // console.log(ob[objectName]);
      //       console.log(JSON.stringify(ob[objectName]));
      fetch(ob);
    }
  }

  function handleKey(interruptor: boolean) {
    setIsAutoKey(interruptor);
    if (interruptor) {
      setKey(NewGuid());
    } else {
      setKey("");
    }
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
        } else if (updatedJsonValue[prop].type === "number") {
          updatedJsonValue[prop].value = Number(value);
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
        <input
          placeholder='Object Name'
          value={objectName}
          onChange={event => setObjectName(event.target.value)}
        />
        <button className='clear-select' onClick={handleClick}>
          <Icon classCss='clear-select' iconName='list_alt_add' />
        </button>
        <button className='clear-select' onClick={handleSave}>
          <Icon classCss='clear-select' iconName='save' />
        </button>
      </div>
      <div className='auto-key'>
        <div className='interruptor-key'>
          <label className='NoSelet'>Auto key? </label>
          <Interruptor activated={isAutoKey} onToggle={handleKey} />
        </div>

        {isAutoKey && (
          <div className='label-key'>
            <label className='NoSelet'>Key: </label>
            <label className='NoSelet keysCode'>{key}</label>
          </div>
        )}
      </div>
      <br />

      <fieldset>
        {jsonValue.map((prop: IJson, index: number) => (
          <fieldset key={index} className='prop'>
            <legend>
              <label className='NoSelet'>Propertie</label>
              {prop.type != "Key" && (
                <button
                  className='clear-select'
                  onClick={() => handleClose(index)}
                >
                  <Icon iconName='close' />
                </button>
              )}
            </legend>
            <div className='container-input'>
              <input
                name='name'
                data-prop={index}
                placeholder='Object key'
                readOnly={prop.type === "Key"}
                value={prop.name}
                onChange={handleChange}
              />

              {prop.type != "radio" ? (
                <input
                  name='value'
                  type={prop.type}
                  data-prop={index}
                  readOnly={prop.type === "Key"}
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
            {prop.type != "Key" && (
              <div className='container-select'>
                <select name='type' data-prop={index} onChange={handleChange}>
                  <option value={Type.string}>String</option>
                  <option value={Type.number}>Number</option>
                  <option value={Type.boolean}>Boolean</option>
                  <option value={Type.object}>Object</option>
                  <option value={Type.array}>Array</option>
                </select>
              </div>
            )}
          </fieldset>
        ))}
      </fieldset>
    </div>
  );
}
