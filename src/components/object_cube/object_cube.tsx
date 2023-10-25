import "./object_cube.css";
import Icon from "@/components/icon/icon";

export default function ObjectCube({ dios }: { dios?: boolean }) {
  return (
    <>
      {!dios ? (
        <div id='cube'>
          <div className='side1'>
            <Icon iconName='indeterminate_question_box' />
          </div>
          <div className='side2'>
            <Icon iconName='indeterminate_question_box' />
          </div>
          <div className='side3'>
            <Icon iconName='indeterminate_question_box' />
          </div>
          <div className='side4'>
            <Icon iconName='indeterminate_question_box' />
          </div>
          <div className='side5'>
            <Icon iconName='indeterminate_question_box' />
          </div>
          <div className='side6'>
            <Icon iconName='indeterminate_question_box' />
          </div>
        </div>
      ) : (
        <div id='Dcube'>
          <div className='Dside1'>
            <label>YAHWEH</label>
          </div>
          <div className='Dside2'>
            <label>RAPHA</label>
          </div>
          <div className='Dside3'>
            <label>ELOHIM</label>
          </div>
          <div className='Dside4'>
            <label>SHADDAI</label>
          </div>
          <div className='Dside5'>
            <label>JIREH</label>
          </div>
          <div className='Dside6'>
            <label>ADONAI</label>
          </div>
        </div>
      )}
    </>
  );
}
