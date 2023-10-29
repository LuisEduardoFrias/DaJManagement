import { IJson } from "./add";

export default function ConvertoToJson(objectName: string, jsonValue: IJson[]) {
  if (objectName === "" || objectName === undefined) {
    alert("The name of the object still needs to be entered");
    return null;
  } else if (!(jsonValue.length >= 1)) {
    alert("Add at least one property");
    return null;
  } else {
    let _string: string = "{";

    const newObject = jsonValue.map((prop, i) => {
      _string += `"${prop.name}":${
        prop.type === "text" || prop.type === "Key" ? '"' : ""
      }${prop.value}${prop.type === "text" || prop.type === "Key" ? '"' : ""}`;
      if (i + 1 < jsonValue.length) _string += `,`;
    });

    _string += "}";

    return _string;
  }
}
