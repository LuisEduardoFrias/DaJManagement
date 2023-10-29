import { IJson, Type } from "./add";

export default function Adacter(
  prev: IJson[],
  prop: number,
  name: string,
  value: string,
) {
  const updatedJsonValue: IJson[] = [...prev];
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
}
