import './TaskListView.css';
import { TasksFeed, TaskBanner } from "@tasks";
import CompleteTask from "components/CompleteTask/CompleteTask"
import { useEffect, useState } from 'react';
import {taskGetServices} from "services/tasksServices"
import { Oval } from 'react-loader-spinner';

function TaskListView() {
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await taskGetServices()
        setTaskList(result?.data?.response)
        setLoading(false)
      } catch (error) {
        console.log(error);
        alert('Disculpe algo salio mal')
      }
    }
    fetchData();
  }, [])

  return (
    <div className="task-container">
      <TaskBanner/>
      <TasksFeed taskList={taskList}/>

      {
      loading &&
      <div className="spinner">
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          color="#1fc4db"
          secondaryColor="#20205ddb"
        />
      </div>
      }

     <CompleteTask/>
    </div>
  );
}

export default TaskListView;