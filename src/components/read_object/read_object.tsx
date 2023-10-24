import { Corchete, Llave } from './read_object_tools';

export default function ObjectRead({ obj }: Object) {
  return (
    <>{Array.isArray(obj) ? <Corchete obj={obj} /> : <Llave obj={obj} />}</>
  );
}
