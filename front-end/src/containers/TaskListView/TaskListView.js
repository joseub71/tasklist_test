import './TaskListView.css';
import { TasksFeed, TaskModal, TaskBanner } from "@tasks";

function TaskListView() {
  return (
    <div className="task-container">
      <TaskBanner/>
      <TasksFeed taskList={[
        { 
          uuid: 1,
          title: "sunt voluptatem dicta",
        },
        { 
          uuid: 2,
          title: "commodi rerum consequatur"
        },
        { 
          uuid: 3,
          title: "suscipit suscipit quia"
        }
      ]}/>
      <TaskModal/>
    </div>
  );
}

export default TaskListView;
