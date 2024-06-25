// StudentList.js
import React from 'react';
import { useSelector } from 'react-redux';

const StudentList = () => {
    const students = useSelector(state => state.students.students);

    return (
        <div>
            <h2>Student List</h2>

            <table style={{ width: "100%" }}>
                <thead>
                    <tr className='flex justify-between'>
                        <th style={{ width: '25%' }}>Id</th>
                        <th style={{ width: '25%' }}>Full Name</th>
                        <th style={{ width: '25%' }}>Email</th>
                        <th style={{ width: '25%' }}>Phone</th>

                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className='flex justify-between'>
                            <td style={{ width: '25%' }}>{student.Id}</td>
                            <td style={{ width: '25%' }}>{student.fullName}</td>
                            <td style={{ width: '25%' }}>{student.email}</td>
                            <td style={{ width: '25%' }}>{student.phone}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default StudentList;
