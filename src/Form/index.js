import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" name="name" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;