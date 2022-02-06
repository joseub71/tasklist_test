import './TaskBtn.css';
import { TaskText } from "@tasks";

function getIcon(icon){
  switch (icon) {
    case "pencil":
      return <span className="pencil-icon" >&#x270E;</span>
  
    default:
      break;
  }
}

function TaskBtn({event, icon, label}) {
  return (
    <button
      className="btn-container"
      onClick={ event }>
        {getIcon(icon)}
        {label && <TaskText label={label} variant="h5" style={{ marginLeft: 10}}/>}
    </button>
  );
}

export default TaskBtn;