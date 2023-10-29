import Interruptor from "@/components/interruptor/interruptor";
import "./add.css";

interface IKeyProps {
  isAutoKey: boolean;
  keysCode: string;
  handleKey: (value: boolean) => void;
}

export default function Key({ isAutoKey, keysCode, handleKey }: IKeyProps) {
  return (
    <>
      <div className='auto-key'>
        <div className='interruptor-key'>
          <label className='NoSelet'>Auto key? </label>
          <Interruptor activated={isAutoKey} onToggle={handleKey} />
        </div>

        {/* isAutoKey && (
          <div className='label-key'>
            <label className='NoSelet'>Key: </label>
            <label className='NoSelet keysCode'>{keysCode}</label>
          </div>
        ) */}
      </div>
      <br />
    </>
  );
}
