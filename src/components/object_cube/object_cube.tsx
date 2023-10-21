import "./object_cube.css";
import Icon from "@/components/icon/icon";

export default function ObjectCube() {
  return (
    <div id='cube'>
      <div className='side1'><Icon iconName='indeterminate_question_box' /></div>
      <div className='side2'><Icon iconName='indeterminate_question_box' /></div>
      <div className='side3'><Icon iconName='indeterminate_question_box' /></div>
      <div className='side4'><Icon iconName='indeterminate_question_box' /></div>
      <div className='side5'><Icon iconName='indeterminate_question_box' /></div>
      <div className='side6'><Icon iconName='indeterminate_question_box' /></div>
    </div>
  );
}
