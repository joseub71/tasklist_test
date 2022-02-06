import './TasksFeed.css';
import { TaskText } from "@tasks";

function TasksFeed({taskList}) {
  console.log('Esto es lo que llega', taskList);
  return (
    <div className="task-list-container">
      {taskList?.map(value =>
        <div className="task-list-item" key={value?.uuid} >
          <TaskText label={`Task #${value?.uuid}`} variant="h4" style={{color: '#ffffff', paddingBottom: '10px',}}/>
          <TaskText label={value?.title} variant="h5" style={{color: '#e5f4f9'}}/>
        </div>
      )}
    </div>
  );
}

export default TasksFeed;
