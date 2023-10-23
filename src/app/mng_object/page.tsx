import ObjectBaseName from "./object_base_name";
import ObjectRead from "./obj_reflex";
import "./mng_obj.css";
import Icon from "@/components/icon/icon";
import Editor from "@/components/editor/editor";
import EditorText from "@/components/editor_text";
import ObjectCube from "@/components/object_cube/object_cube";

export default function MngObject(props) {
  const title: string = props.searchParams?.objname;

  return (
    <div className='MngObject'>
      <div className='header'>
        <ObjectCube /> <h1 className='title'>{title}</h1>
      </div>
      <pre className='json-style'>
        <ObjectRead obj={plate} />
      </pre>
    </div>
  );
}

const plate = [
  {
    key: "yf6ue7j37dj99wjehdujd",
    name: "plato 1",
    isOpen: true,
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
