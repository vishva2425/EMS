import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

    const [employees, setEmployees] = useState([]);

    // GET Employees
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

    useEffect(() => {
        getEmployees();
    }, []);

    // Total Employees
    const totalEmployees = employees.length;

    // Total Departments
    const departments = [
        ...new Set(
            employees
                .map((employee) => employee.department)
                .filter(Boolean)
        )
    ];

    // Recent Employees
    const recentEmployees = employees.slice(-5).reverse();


    return (
        <div className="p-8 bg-gray-100 mx-80 min-h-screen">

            {/* Dashboard Title */}

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>


            {/* Cards */}

            <div className="grid grid-cols-4 gap-6 mb-8 ">

                {/* Total Employees */}

                <div className="bg-white p-6 rounded-lg shadow ">

                    <h3 className="text-gray-500 text-sm">
                        Total Employees
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {totalEmployees}
                    </p>

                </div>


                {/* Departments */}

                <div className="bg-white p-6 rounded-lg shadow">

                    <h3 className="text-gray-500 text-sm">
                        Departments
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {departments.length}
                    </p>

                </div>


                {/* Active Employees */}

                <div className="bg-white p-6 rounded-lg shadow">

                    <h3 className="text-gray-500 text-sm">
                        Active Employees
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {totalEmployees}
                    </p>

                </div>


                {/* New Employees */}

                <div className="bg-white p-6 rounded-lg shadow">

                    <h3 className="text-gray-500 text-sm">
                        Recent Employees
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {recentEmployees.length}
                    </p>

                </div>

            </div>


            {/* Recent Employees Table */}

            <div className="bg-white rounded-lg shadow p-6">

                <h2 className="text-xl font-bold mb-5">
                    Recent Employees
                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-100">

                                <th className="border p-3 text-left">
                                    S.No
                                </th>

                                <th className="border p-3 text-left">
                                    First Name
                                </th>

                                <th className="border p-3 text-left">
                                    Last Name
                                </th>

                                <th className="border p-3 text-left">
                                    Department
                                </th>

                                <th className="border p-3 text-left">
                                    Designation
                                </th>

                                <th className="border p-3 text-left">
                                    Email
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {recentEmployees.length > 0 ? (

                                recentEmployees.map((employee, index) => (

                                    <tr key={employee._id}>

                                        <td className="border p-3">
                                            {index + 1}
                                        </td>

                                        <td className="border p-3">
                                            {employee.firstname}
                                        </td>

                                        <td className="border p-3">
                                            {employee.lastname}
                                        </td>

                                        <td className="border p-3">
                                            {employee.department}
                                        </td>

                                        <td className="border p-3">
                                            {employee.designation}
                                        </td>

                                        <td className="border p-3">
                                            {employee.email}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center p-6 text-gray-500"
                                    >
                                        No Employees Found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;