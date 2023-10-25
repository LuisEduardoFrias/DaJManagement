import daj from "@/daj/gateway.js";
import dajb from "@/daj/daj.js";
import Link from "next/link";
import ObjectCube from "@/components/object_cube/object_cube";
import "./page.css";

class Ingredientes extends dajb {
  name: string;
  medida: string;
  acount: number;

  constructor(name: string, medida: string, acount: number) {
    super();
    this.name = name;
    this.medida = medida;
    this.acount = acount;
  }
}

class Compra extends dajb {
  name: string;
  score: number;
  description: string;
  ingredients: Ingrente[];

  constructor(
    name: string,
    score: number,
    description: string,
    ingredients: Ingrente[],
  ) {
    super();
    this.name = name;
    this.score = score;
    this.description = description;
    this.ingredients = ingredients;
  }
}

export default async function Home() {
  const plate = new Ingredientes("ingrediente x - 2", "tasa", 10);
  const res = await daj.postAsync(plate);
  const { data } = await daj.getAllAsync();

  return (
    <main className='flex min-h-screen gap-5 flex-col items-center p-4'>
      <ObjectCube dios={true} />
      <h1>DaJ Managemen</h1>
      <Link
        href={`/add`}
        className='w-60 border-2 border-b-blue-400 p-2 object'
      >
        <ObjectCube />
        <label>Add new object</label>
      </Link>
      <h2>DaJ Objects</h2>
      <div className='container-objects'>
        {Reflect.ownKeys(data).map((e, i) => (
          <Link
            href={`/mng_object/?objname=${e}`}
            key={i}
            className='border-2 border-b-blue-400 p-2 object items'
          >
            <ObjectCube />
            <label>{e}</label>
          </Link>
        ))}
      </div>
    </main>
  );
}
