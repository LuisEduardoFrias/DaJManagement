import "./mng_obj.css";
import daj from "@/daj/gateway.js";
import BackButton from "@/components/back_button/back_button";
import ReadObject from "@/components/read_object/read_object";
import ObjectCube from "@/components/object_cube/object_cube";

export default async function MngObject(props) {
  const objname = props.searchParams?.objname;
  const { data } = await daj.getAsync(objname);

  return (
    <div className='MngObject'>
      <div className='header'>
        <BackButton />
        <div className='header-title'>
          <ObjectCube /> <h1 className='title'>{objname}</h1>
        </div>
      </div>
      <pre className='json-style'>
        <ReadObject obj={data} />
      </pre>
    </div>
  );
}
