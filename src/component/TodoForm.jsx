import React, { useState, useEffect } from 'react';
import { createTodo, updateTodo } from '../Service/todoService';

function TodoForm({ currentTodo, onSave, onReset }) {
    const [todo, setTodo] = useState({ title: '', description: '', status: 'PENDING' });

    useEffect(() => {
        if (currentTodo) setTodo(currentTodo);
    }, [currentTodo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (todo.id) await updateTodo(todo.id, todo);  // Pass the updated status
        else await createTodo(todo); // Pass the new todo object
        onSave();
        setTodo({ title: '', description: '', status: 'PENDING' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={todo.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                name="description"
                value={todo.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <select name="status" value={todo.status} onChange={handleChange}>
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={onReset}>Clear</button>
        </form>
    );
}

export default TodoForm;
