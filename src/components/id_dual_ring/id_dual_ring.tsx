import "./id_dual_ring.css";

interface ILdDualRingProps {
  error: boolean;
  errorMessage?: string;
}

export default function LdDualRing(props: ILdDualRingProps) {
  return (
    <div className='conten'>
      {!props.error ? (
        <div className='ldDualRing'></div>
      ) : (
        <label className='errorlabel'>{props?.errorMessage}</label>
      )}
    </div>
  );
}
