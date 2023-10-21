import daj from "@/daj/gateway.js";
import Link from "next/link";
import ObjectCube from "@/components/object_cube/object_cube";
import "./page.css";

export default async function Home() {
  const { data } = await daj.getAllAsync();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <h1>DaJ Managemen</h1>
      <Link
        href={`/mng_object/?objname=__add__`}
        className='w-full border-2 border-b-blue-400 p-2 object'
      >
        <ObjectCube />
        <label>Add new object</label>
      </Link>
      <h2>DaJ Objects</h2>
      <div className='flex gap-1.5 justify-between'>
        {Reflect.ownKeys(data).map((e, i) => (
          <Link
            href={`/mng_object/?objname=${e}`}
            key={i}
            className='border-2 border-b-blue-400 p-2 object'
          >
            <ObjectCube />
            <label>{e}</label>
          </Link>
        ))}
      </div>
    </main>
  );
}
