import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [tasks, setTasks] = useState([
    { id: 1, content: "zjeść obiad", done: true },
    { id: 2, content: "wypić piwo", done: false },
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }

      return task
    }));
  };

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
          <Tasks
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            tasks={tasks}
            hideDone={hideDone} />
        }
        additionalButtons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </>
  );
}

export default App;
