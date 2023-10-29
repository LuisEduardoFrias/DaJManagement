import React from "react";
import Icon from "@/components/icon/icon";
import LdDualRing from "@/components/id_dual_ring/id_dual_ring";
import { Type, IJson } from "./add";
import "./add.css";

interface IBodyProps {
  obj: Array<IJson>;
  handleRemove: (index: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Body({ obj, handleRemove, handleChange }: IBodyProps) {
  return (
    <fieldset>
      {obj.length != 0 ? (
        obj.map((prop: IJson, index: number) => (
          <fieldset key={index} className={"prop"}>
            <legend>
              <label className='NoSelet'>Propertie</label>
              {prop.type != "Key" && (
                <button
                  className='clear-select'
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  <Icon iconName='close' />
                </button>
              )}
            </legend>
            <div
              className={
                prop.type === "Key" ? "container-input-key" : "container-input"
              }
            >
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
        ))
      ) : (
        <LdDualRing error={false} />
      )}
    </fieldset>
  );
}
