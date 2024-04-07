import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <input
        className={styles.modernInput}
        placeholder="Enter todo Item"
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
