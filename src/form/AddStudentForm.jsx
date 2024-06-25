// AddStudentForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../redux/slices/student';
import { findStudent } from '../redux/slices/student';
import { clearSearchResult } from '../redux/slices/student';

const AddStudentForm = () => {
    const searchResult = useSelector(state => state.students.searchResult);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phone: '',
        Id: ''
    });
    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        Id: '',
    });
    const validate = (event) => {
        const { value, name, required, pattern } = event.target;
        const newErrors = { ...formErrors };
        if (!value.trim()) {
            if (required) {
                newErrors[name] = 'Vui lòng nhập thông tin!';
            }
        } else {
            if (pattern) {
                const regex = new RegExp(pattern);
                const isValid = regex.test(value); //true  || false
                if (!isValid) {
                    if (name === 'email') {
                        newErrors[name] = 'Email không hợp lệ, vui lòng thử lại!';
                    }
                    else if (name === 'phone') {
                        newErrors[name] = 'Số điện thoại không hợp lệ, vui lòng thử lại và chỉ nhập ký tự số!';
                    }
                    else if (name === 'Id') {
                        newErrors[name] = 'Id không hợp lệ, vui lòng thử lại và chỉ nhập ký tự số!';
                    }
                    else {
                        newErrors[name] = '';
                    }

                }
                // else if (name === 'phone') {
                //     if (pattern) {
                //         const regex1 = new RegExp(pattern);
                //         const isValid1 = regex1.test(value);
                //         if (!isValid1) {
                //             newErrors[name] = 'Chỉ nhập số, vui lòng thử lại!';
                //         }
                //         else {
                //             newErrors[name] = '';
                //         }
                //     }
                // }
                else {
                    newErrors[name] = '';
                }
            } else {
                newErrors[name] = '';
            }
        }
        setFormErrors(newErrors);
    };
    const handleOnchange = (event) => {
        const { value, name, required, pattern } = event.target;
        validate(event);
        setFormValues({ ...formValues, [name]: value });
    };
    const handleOnBlur = (event) => {
        validate(event);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(formValues));
        setFormValues({
            fullName: '',
            email: '',
            phone: '',
            Id: ''
        });
    };

    const handleFind = () => {

        dispatch(findStudent(searchTerm));
    }
    const handleClearSearch = () => {
        dispatch(clearSearchResult());
        setSearchTerm('');
    };
    return (
        <div className='container'>
            <div>
                <h4>Tìm kiếm</h4>
                <input
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className='text-right my-3'
                >
                    <button
                        onClick={handleFind}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Find Student
                    </button>
                    <button onClick={handleClearSearch}>Clear</button>
                    {searchResult && (
                        <div>
                            {typeof searchResult === 'string' ? (
                                <p>{searchResult}</p>
                            ) : (
                                <div>
                                    <p>Name: {searchResult.fullName}</p>
                                    <p>Student ID: {searchResult.Id}</p>
                                    <p>Email: {searchResult.email}</p>
                                    <p>Phone: {searchResult.phone}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>

            <form onSubmit={handleSubmit} >
                <div className="grid gap-4full_name gap-y-4 text-sm grid-cols-1">
                    <div className="md:col-span-5">
                        <label htmlFor="Id">Id</label>
                        <input
                            type="text"
                            name="Id"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formValues.Id}
                            onChange={handleOnchange}
                            onBlur={handleOnBlur}
                            required={true}
                            pattern='^[0-9]*$'
                        />
                        {formErrors.Id && <p className="text-red-600 text-sm text-start mt-2">{formErrors.Id}</p>}
                    </div>
                    <div className="md:col-span-5">
                        <label htmlFor="">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formValues.fullName}
                            onChange={handleOnchange}
                            onBlur={handleOnBlur}
                            required={true}
                        />
                        {formErrors.fullName && (
                            <p className="text-red-600 text-sm text-start mt-2">{formErrors.fullName}</p>
                        )}
                    </div>
                    <div className="md:col-span-5">
                        <label htmlFor="full_name">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formValues.email}
                            onChange={handleOnchange}
                            onBlur={handleOnBlur}
                            required={true}
                            pattern="^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$"
                        />
                        {formErrors.email && <p className="text-red-600 text-sm text-start mt-2">{formErrors.email}</p>}
                    </div>
                    <div className="md:col-span-5">
                        <label htmlFor="full_name">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formValues.phone}
                            onChange={handleOnchange}
                            onBlur={handleOnBlur}
                            required={true}
                            maxLength={10}
                            pattern='^[0-9]*$'
                        />
                        {formErrors.phone && <p className="text-red-600 text-sm text-start mt-2">{formErrors.phone}</p>}
                    </div>



                    <div className="md:col-span-5 text-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStudentForm;
