import './TaskModal.css';
import { TaskText } from "@tasks";

function TaskModal({ show, title, children }){
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={`${showHideClassName}`}>
      <section className='modal-main'>
        <div className="modal-div">
          <TaskText label={title} variant="h4"/>
        </div>

        {children}
      </section>
    </div>
  );
};

export default TaskModal;