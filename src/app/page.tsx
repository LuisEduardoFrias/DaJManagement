import daj from "@/daj/gateway.js";
import Link from "next/link";
import ObjectCube from "@/components/object_cube/object_cube";
import "./page.css";

export default async function Home() {
  const { data } = await daj.getAllAsync();

  return (
    <main className='flex min-h-screen gap-5 flex-col items-center p-4'>
      <h1>DaJ Managemen</h1>
      <Link
        href={`/add`}
        className='w-60 border-2 border-b-blue-400 p-2 object clear-select'
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
            className='border-2 border-b-blue-400 p-2 object items clear-select'
          >
            <ObjectCube />
            <label>{e}</label>
          </Link>
        ))}
      </div>
    </main>
  );
}
