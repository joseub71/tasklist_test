import './TaskBanner.css';
import trueNorth from 'assets/trueNorth.jpeg';
import { TaskText, TaskBtn } from "@tasks";

function TaskBanner() {
  return (
    <div className="task-banner-container">
      <div className="logo-container">
        <img className="logo-styles" src={trueNorth} alt="true north logo" />
        <TaskText label="Jose Useche" variant="h4"/>
      </div>
      
      <TaskBtn
        event={()=>alert('You clicked me!')}
        icon="pencil"
      />
    </div>
  );
}

export default TaskBanner;