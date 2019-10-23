import { html } from "/index.js";
import {
  useState,
  useCallback
} from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";
import { Footer } from "/components/Footer.js";
import { Header } from "/components/Header.js";

export function App({ page }) {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    () => setTodos([...todos, `Item ${todos.length}`]),
    [todos]
  );

  return html`
    <Fragment>
      <${Header} name="ToDo's (${page})" />
      <ul>
        ${todos.map(
          todo => html`
            <li>${todo}</li>
          `
        )}
      </ul>
      <button onClick=${addTodo}>Add Todo</button>
      <${Footer}>footer content here<//>
    </Fragment>
  `;
}
