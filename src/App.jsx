import React, { useState } from 'react';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm.jsx';

function App() {
    const [currentTodo, setCurrentTodo] = useState(null);

    const handleEdit = (todo) => setCurrentTodo(todo);
    const handleSave = () => setCurrentTodo(null);
    const handleReset = () => setCurrentTodo(null);

    return (
        <div>
            <h1>TODO Application</h1>
            <TodoForm
                currentTodo={currentTodo}
                onSave={handleSave}
                onReset={handleReset}
            />
            <TodoList onEdit={handleEdit} />
        </div>
    );
}

export default App;


// import React from 'react';
// import './App.css';
// import StudentList from './component/StudentList';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AddStudent from './component/AddStudent';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<StudentList />} />
//           <Route path="/addStudent" element={<AddStudent/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
