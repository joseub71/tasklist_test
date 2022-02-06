import './TaskText.css';

function TaskText({label, variant, style}) {
  return (
    <span className={`text-${variant}`} style={{...style}}>
      {label}
    </span>
  );
}

export default TaskText;