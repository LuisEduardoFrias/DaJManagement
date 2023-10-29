"use client";

import { useState, useEffect } from "react";
import NewGuid from "@/components/new_guid/new_guid.ts";
import Key from "./key_add";
import Header from "./header_add";
import Body from "./body_add";
import Adacter from "./adacter_add";
import NotificationCard from "@/components/notification_card/notification_card";
import ConvertoToJson from "./convert_json_add";
import LdDualRing from "@/components/id_dual_ring/id_dual_ring";
import "./add.css";

export enum Type {
  string,
  number,
  boolean,
  object,
  array,
}

export interface IJson {
  name: "string";
  value: any;
  type: string;
}

export default function Add() {
  const [objectName, setObjectName] = useState("");
  const [jsonValue, setJsonValue] = useState<IJson>([]);
  const [isAutoKey, setIsAutoKey] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState({
    text: "",
    visible: false,
  });
  const [key, setKey] = useState(NewGuid());

  useEffect(() => {
    if (key !== "") {
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

  async function handleFetch(dataObj: string) {
    const response = await fetch("/api/data", {
      method: "POST",
      body: dataObj,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }

  async function handleSave() {
    const json = ConvertoToJson(objectName, jsonValue);

    if (json !== null) {
      setSaving(true);

      const jsonObj = JSON.parse(json);
      const objJson = JSON.stringify({ objName: objectName, obj: jsonObj });

      const res = await handleFetch(objJson);

      if (res.error === null) {
        setNotification({
          text: res.data,
          visible: true,
        });
      }

      setSaving(false);
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

  function handleRemove(index: number) {
    setJsonValue(prev => [...prev.filter((e, i) => i != index)]);
  }

  function handleChange(event) {
    const prop: number = event.target.dataset.prop;
    const name: string = event.target.name;
    const value: string = event.target.value;

    setJsonValue(prevState => {
      return Adacter(prevState, prop, name, value);
    });
  }

  return (
    <div className='container-add'>
      <Header
        objexctName={objectName}
        setObjectName={setObjectName}
        handleClick={handleClick}
        handleSave={handleSave}
      />
      {notification.visible && (
        <NotificationCard text={notification.text} visible={true} />
      )}
      {saving && <LdDualRing error={false} />}
      <Key isAutoKey={isAutoKey} handleKey={handleKey} keysCode={key} />
      <Body
        obj={jsonValue}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    </div>
  );
}
