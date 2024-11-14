import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteStudentApi, listStudent, addStudentApi } from '../Service/StudentService';
import { Link } from 'react-router-dom';


const StudentList = () => {
    const [students, setStudents] = useState([]);
    

    useEffect(() => {
        listStudent().then((response) => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function deleteStudent(id) {
        deleteStudentApi(id).then(() => {
            setStudents(students.filter(student => student.id !== id));
        }).catch(error => {
            console.error(error);
        });
    }


    // function addStudent(values) {
    //     addStudentApi(values).then((response) => {
    //         setStudents([...students, response.data]);
    //     }).catch(error => {
    //         console.error(error);
    //     });
    // }



    return (
        <div className='container'>
            <div className="d-flex justify-content-between m-3">
                <h3>Student List hello</h3>
                {/*<button className="btn btn-success " >Add New Student</button>*/}
                <Link to="addStudent"><button className='btn btn-success'>add student</button></Link>
            </div>

            <table className="table table-secondary table-striped table-bordered">
                <thead className='table-dark'>
                    <tr>
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td><button className='btn btn-success'>Update</button></td>
                                <td><button className='btn btn-warning' onClick={() => deleteStudent(student.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
