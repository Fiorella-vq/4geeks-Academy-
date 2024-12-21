import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async (event) => {
    event.preventDefault();

    if (newTodo !== "") {
      await saveTodo();
      setNewTodo("");
    }
  };

  // Guardar nueva tarea.
  const saveTodo = async () => {
    try {
      const url = "https://playground.4geeks.com/todo/todos/Fiovq";
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: newTodo,
          is_done: false,
        }),
      });
      if (resp.ok) {
        uploadTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Cargar tareas.
  const uploadTodos = async () => {
    try {
      const url = "https://playground.4geeks.com/todo/users/Fiovq";
      const resp = await fetch(url);
      if (resp.status === 404) {
        await addUser();
        return;
      }
      const data = await resp.json();
      setTodos(data.todos || []);
    } catch (error) {
      console.error(error);
    }
  };

  // Crear usuario.
  const addUser = async () => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/todo/users/Fiovq",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (resp.status === 201) {
        await uploadTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar tareas.
  const deleteTodo = async (id) => {
    try {
      const resp = await fetch(
        `https://playground.4geeks.com/todo/todos/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (resp.status === 204) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      addTodo(event);
    }
  };

  useEffect(() => {
    uploadTodos();
  }, []);

  return (
    <>
      <h1>TODOLIST✏️</h1>
      <div className="container mt-5">
        <div className="card col-5 mx-auto">
          <div className="card-header">
            <div className="input-group mb-3">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={keyDown}
                placeholder="What needs to be done?"
                className="form-control"
              />
            </div>
          </div>

          <ul className="list-group list-group-flush">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center todo-item"
                >
                  {todo.label}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => deleteTodo(todo.id)}
                  ></button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center text-danger">
                No hay tareas, añadir tareas 😒
              </li>
            )}
          </ul>

          <div className="card-footer bg-light text-muted">
            {todos.length} item{todos.length !== 1 && "s"} left
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
