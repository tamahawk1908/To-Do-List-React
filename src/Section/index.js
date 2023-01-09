import "./style.css";

const Section = ({ title, body, additionalButtons }) => (
    <header className="section">
        <div className="section__tasksHeader">{title}
            {additionalButtons}
        </div>
        {body}
    </header>
);

export default Section;