import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="section__list">
        {tasks.map((task, index) => (
            <li 
                key={index} 
                className={`task__content ${task.done && hideDoneTasks ? "tasks__content--hidden" : ""}` }>
                <button className="button__done">
                    {task.done ? "✔" : ""}
                </button>
                    <span className={`task__content--text${task.done ? " task__content--done />" : ""}`}>
                        {task.content}
                    </span>
                <button className="button__remove">
                    <span className="button__remove--icon">
                        🗑
                    </span>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;