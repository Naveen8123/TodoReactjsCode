import React, { useState, useEffect } from 'react';
import { getTodos, deleteTodo } from '../Service/todoService';

function TodoList({ onEdit }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.title} - Status: {todo.status}</span>
                        <button onClick={() => onEdit(todo)}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
