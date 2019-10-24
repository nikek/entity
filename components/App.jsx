import { h, Fragment } from "preact";
import { useState, useCallback } from "preact/hooks";
import { Footer } from "/components/Footer.jsx";
import { Header } from "/components/Header.jsx";

export function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    () => setTodos([...todos, `Item ${todos.length}`]),
    [todos]
  );

  return (
    <Fragment>
      <Header name="ToDos" />
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <Footer>footer content here</Footer>
    </Fragment>
  );
}
