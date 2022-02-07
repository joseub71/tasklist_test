import './TasksFeed.css';
import { TaskText } from "@tasks";

import { useSelector, useDispatch } from 'react-redux';

import {
  handlerModal,
  handlerTask
} from 'store/completeTaskSlice';

function TasksFeed({taskList}) {
  const dispatch = useDispatch();

  const openCard = (value)=> {
    dispatch(handlerModal(true))
    dispatch(handlerTask(value))
  }

  return (
    <div className="task-list-container">
      {taskList?.map(value =>
        <div className="task-list-item" key={value?.uuid} onClick={()=>openCard(value)}>
          <TaskText label={`Task #${value?.uuid}`} variant="h4" style={{color: '#ffffff', paddingBottom: '10px',}}/>
          <TaskText label={value?.title} variant="h5" style={{color: '#e5f4f9'}}/>
        </div>
      )}
    </div>
  );
}

export default TasksFeed;
