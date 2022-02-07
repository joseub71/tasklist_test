import './CompleteTask.css';
import { TaskModal, TaskText, TaskBtn } from "@tasks";
import {taskPutServices} from "services/tasksServices"
import { useSelector, useDispatch } from 'react-redux';

import {
  handlerModal,
  handlerTask,
  modalValue,
  taskValue
} from 'store/completeTaskSlice';

function CompleteTask() {
  const modal = useSelector(modalValue);
  const task = useSelector(taskValue);
  const dispatch = useDispatch();

  const cancelTask = ()=>{
    dispatch(handlerModal(false))
    dispatch(handlerTask(null))
  }

  const editTask = async()=>{
    try {
      dispatch(handlerModal(false))
      const response = await taskPutServices(task)
      console.log('response put', response); 
    } catch (error) {
      alert('Perdone algo salio mal')
    }    
  }

  return (
    <div className="task-container">
      <TaskModal show={modal} title="Completaste esta tarea ?" >
        
        <div className="body-modal-complete">
          <div className="cont-text-complete">
            <TaskText label={`Task ${task?.uuid} - ${task?.title}`} variant="h5"/>
          </div>
          <div style={{
            margin: '20px  15px 10px 15px',
            display: 'flex',
            justifyContent: 'space-between'
          }} >
            <TaskBtn
              type="cancel"
              event={()=> cancelTask()}
              label="Cancelar"
              icon="cancel"
            />
            <TaskBtn
              type="agree"
              event={()=> editTask() }
              label="Completada"
              icon="check"
            />
          </div>
        </div>
        
      </TaskModal>
    </div>
  );
}

export default CompleteTask;