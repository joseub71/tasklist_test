import './TaskBtn.css';
import { TaskText } from "@tasks";

function getIcon(icon){
  switch (icon) {
    case "pencil":
      return <span className="pencil-icon" >&#x270E;</span>
    case "check":
      return <span className="check-icon" >&#x2713;</span>
    case "cancel":
      return <span className="check-icon" >&#x2717;</span>
  
    default:
      break;
  }
}

function getColor(type){
  switch (type) {
    case "cancel":
      return "red"
  
    default:
      return "blue"
  }
}

function TaskBtn({event, icon, label, type}) {
  return (
    <button
      className={`btn-container ${getColor(type)}`}
      onClick={ event }>
        {icon && getIcon(icon)}
        {label && <TaskText label={label} variant="h5" style={{ marginLeft: icon ? 10 : 0, color: '#fff', fontWeight: 'bold'}}/>}
    </button>
  );
}

export default TaskBtn;