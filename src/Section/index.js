import "./style.css";

const Section = ({ title, body, additionalButtons }) => (
    <section className="section">
        <div className="section__tasksHeader">{title}
            {additionalButtons}
        </div>
        {body}
    </section>
);

export default Section;