import { useTodoViewModel } from "../viewmodel/useTodoViewModel";
import "../model/Todo"
import type { Todo } from "../model/Todo";

export default function TodoView() {
    const { todos, text, setText, createTodo, removeTodo } = useTodoViewModel();

    return (
        <div>
            <h1>Lista de tareas</h1>

            <input value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={createTodo}>Agregar</button>

            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
