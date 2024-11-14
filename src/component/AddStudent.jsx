import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addStudentApi } from '../Service/StudentService';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';


const AddStudent = () => {
    const [students, setStudents] = useState([]);
    const navigate=useNavigate();


    function addStudent(values) {
        addStudentApi(values).then((response) => {
            setStudents([...students, response.data]);
            navigate("/")
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className='container'>

            <h3>Enter Student Details</h3>
            <div>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '' }}
                    onSubmit={(values, { resetForm }) => {
                        addStudent(values);
                        resetForm();
                    }}
                >
                    {() => (
                        <Form>
                            <fieldset className='form-group'>
                                <label>First Name</label>
                                <Field className='form-control' name="firstName" />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label>Last Name</label>
                                <Field className='form-control' name="lastName" />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label>Email</label>
                                <Field className='form-control' name="email" type="email" />
                            </fieldset>
                            <button className='btn btn-success' type="submit" >Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddStudent;
