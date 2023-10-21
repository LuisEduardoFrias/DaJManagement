import ObjectBaseName from "./object_base_name";
import ObjRefle from "./obj_reflex";
import "./mng_obj.css";
import Icon from "@/components/icon/icon";
import Editor from "@/components/editor/editor";
import ObjectCube from "@/components/object_cube/object_cube";

enum Types {
  e = "string",
  n = "number",
  b = "boolean",
  a = "array",
  o = "object",
}

export function isString(obj: object): boolean {
  return typeof obj === "string";
}

export function isNumber(obj: object): boolean {
  return !isNaN(obj);
}

export function isBoolean(obj: object): boolean {
  return typeof obj === "boolean";
}

export function isObject(obj: object): boolean {
  return !Array.isArray(obj) && typeof obj === "object";
}

export function isArray(obj: object): boolean {
  return Array.isArray(obj) && typeof obj === "object";
}

export default function MngObject(props) {
  const title: string = props.searchParams?.objname;

  return (
    <div id='MngObject'>
      <h1 id='title'>{title}</h1>
      <ObjectCube />
      <div
        id='containera'
        style={{
          width: "100%",
          height: "100vh",
          padding: "10px",
          border: "1px solid white",
          boxSizing: "border-box",
        }}
      >
        {
          //<ObjRefle obj={plate} />
        }
        <Editor value={JSON.stringify(plate, null, 2)} />
      </div>
    </div>
  );
}

const plate = [
  {
    key: "yf6ue7j37dj99wjehdujd",
    name: "plato 1",
    score: 8,
    description: "este es un plato ejemplo para probar.",
    ingredients: [
      {
        name: "ingrediente x - 1",
        medida: "tasa",
        acount: 10,
        ingredients: [
          {
            name: "ingrediente x - 1",
            medida: "tasa",
            acount: 10,
          },
          {
            name: "ingrediente x - 2",
            medida: "tasa",
            acount: 10,
          },
        ],
      },
      {
        name: "ingrediente x - 2",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 3",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 4",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 5",
        medida: "tasa",
        acount: 10,
      },
    ],
  },
  {
    key: "yf6ue7j37gjtg6grjehdujd",
    name: "plato 2",
    score: 8,
    description: "este es un plato ejemplo para probar.",
    ingredients: [
      {
        name: "ingrediente x - 1",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 2",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 3",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 4",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 5",
        medida: "tasa",
        acount: 10,
      },
    ],
  },
  {
    key: "yf6ue7j37gjhuu6u468jehdujd",
    name: "plato 3",
    score: 8,
    description: "este es un plato ejemplo para probar.",
    ingredients: [
      {
        name: "ingrediente x - 1",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 2",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 3",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 4",
        medida: "tasa",
        acount: 10,
      },
      {
        name: "ingrediente x - 5",
        medida: "tasa",
        acount: 10,
      },
    ],
  },
  {
    key: "yf6ue7j37gjhuu6ooy58jehdujd",
    name: "plato 4",
    score: 8,
    description: "este es un plato ejemplo para probar.",
    ingredients: [
      "ingrediente x - 1",
      "ingrediente x - 2",
      "ingrediente x - 3",
      "ingrediente x - 4",
      "ingrediente x - 5",
    ],
  },
];

//<ObjectBaseName title={title} data={plate} />
