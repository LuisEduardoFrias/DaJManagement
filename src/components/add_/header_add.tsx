import Icon from "@/components/icon/icon";
import "./add.css";

interface IHeaderProps {
  objectName: string;
  setObjectName: () => void;
  handleClick: () => void;
  handleSave: () => void;
}

export default function Header({
  objectName,
  setObjectName,
  handleClick,
  handleSave,
}: IHeaderProps) {
  console.log(objectName);
  return (
    <div className='container-obcjet-name'>
      <input
        placeholder='Object Name'
        value={objectName}
        onChange={event => {
          setObjectName(event.target.value);
        }}
      />
      <button className='clear-select' onClick={handleClick}>
        <Icon classCss='clear-select' iconName='list_alt_add' />
      </button>
      <button className='clear-select' onClick={handleSave}>
        <Icon classCss='clear-select' iconName='save' />
      </button>
    </div>
  );
}
