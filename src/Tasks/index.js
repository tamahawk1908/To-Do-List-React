import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="section__list">
        {tasks.map((task, index) => (
            <li
                key={index}
                className={`task__content ${task.done && hideDone ? "tasks__content--hidden" : ""}`}>
                <button 
                    onClick={() => toggleTaskDone(task.id)} 
                    className="button__done">
                        {task.done ? "✔" : ""}
                </button>
                    <span className={`task__content--text${task.done ? " task__content--done />" : ""}`}>
                        {task.content}
                </span>
                <button
                    className="button__remove"
                    onClick={() => removeTask(task.id)}>
                        <span className="button__remove--icon">
                            🗑
                        </span>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;