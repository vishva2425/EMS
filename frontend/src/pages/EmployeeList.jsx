import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    // GET Method
    const getEmployees = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/employee"
            );

            setEmployees(res.data);

        } catch (error) {
            console.error(error);
        }
    };

    // Load employees when page opens
    useEffect(() => {
        getEmployees();
    }, []);


    // DELETE Method
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `http://localhost:5000/api/employee/${id}`
            );

            alert("Employee Deleted Successfully");

            // Refresh table
            getEmployees();

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="p-8 mx-60">

            <h2 className="font-bold text-2xl mb-6">
                Employee List
            </h2>

            <div className="overflow-x-auto">

                <table className="w-full border border-gray-300">

                    <thead className="bg-gray-200">

                        <tr>

                            <th className="border p-3">
                                S.No
                            </th>

                            <th className="border p-3">
                                First Name
                            </th>

                            <th className="border p-3">
                                Last Name
                            </th>

                            <th className="border p-3">
                                Gender
                            </th>

                            <th className="border p-3">
                                Email
                            </th>

                            <th className="border p-3">
                                Phone
                            </th>

                            <th className="border p-3">
                                Department
                            </th>

                            <th className="border p-3">
                                Designation
                            </th>

                            <th className="border p-3">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {employees.map((employee, index) => (

                            <tr key={employee._id}>

                                <td className="border p-3 text-center">
                                    {index + 1}
                                </td>

                                <td className="border p-3">
                                    {employee.firstname}
                                </td>

                                <td className="border p-3">
                                    {employee.lastname}
                                </td>

                                <td className="border p-3">
                                    {employee.gender}
                                </td>

                                <td className="border p-3">
                                    {employee.email}
                                </td>

                                <td className="border p-3">
                                    {employee.phonenumber}
                                </td>

                                <td className="border p-3">
                                    {employee.department}
                                </td>

                                <td className="border p-3">
                                    {employee.designation}
                                </td>

                                <td className="border p-3">

                                    <div className="flex gap-2">

                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(employee._id)
                                            }
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default EmployeeList;