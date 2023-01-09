import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "zjeść obiad", done: true },
  { id: 2, content: "wypić piwo", done: false },
];

const hideDone = false;

function App() {
  return (
    <><Header
      title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        additionalButtons={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </>
  );
}

export default App;
