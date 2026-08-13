import React, { useState } from 'react'
import axios from "axios"

const EmployeeDetails = () => {
    const [formdata, setFormData] = useState({
        firstname: "", 
        lastname: "", 
        gender: "", 
        dateofbirth: "", 
        bloodgroup: "", 
        maritalstatus: "", 
        email: "",
        phonenumber: "", 
        address: "", 
        city: "", 
        state: "", 
        country: "", 
        pincode: "", 
        department: "", 
        designation: "", 
        jobtitle: "", 
        reportingmanager: "", 
        joiningdate: "", 
        employmenttype: "", 
        worklocation: "", 
        employeegrade: "",
        shift: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData({
            ...formdata,
            [name]:value,
        })
    };

    const handleClick = async () =>{
        try {
            const res = await axios.post(
                "http://localhost:5000/api/employee", formdata);
            alert("Employee Created Successfully");

        } catch (error) {
            console.error({error:error.message});
            
        }
        console.log(formdata);    
    };

  return (
    <>
        <div>
            <h2 className='font-bold text-2xl mx-60 mb-10 font-serif'>Add Employee</h2>
            <form className='grid grid-cols-4 text-center mx-70  gap-4 '>

                <label className=' font-serif'>First Name: </label>
                <input type="text" placeholder='Enter First Name' name='firstname' value={formdata.firstname} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Last Name: </label>
                <input type="text" placeholder='Enter Last Name' name='lastname' value={formdata.lastname} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Gender: </label>
                <input type="text" placeholder='Enter Gender' name='gender' value={formdata.gender} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Date of Birth: </label>
                <input type="date" placeholder='Enter Date of Birth' name='dateofbirth' value={formdata.dateofbirth} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Blood Group: </label>
                <input type="text" placeholder='Enter Blood Group' name='bloodgroup' value={formdata.bloodgroup} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Martial Status: </label>
                <input type="text" placeholder='Enter Martial Status' name='maritalstatus' value={formdata.maritalstatus} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Email: </label>
                <input type="email" placeholder='Enter Email' name='email' value={formdata.email} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Phone Number: </label>
                <input type="text" placeholder='Enter Phone Number' name='phonenumber' value={formdata.phonenumber} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Address: </label>
                <input type="text" placeholder='Enter Address' name='address' value={formdata.address} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>City: </label>
                <input type="text" placeholder='Enter City' name='city' value={formdata.city} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>State: </label>
                <input type="text" placeholder='Enter State' name='state' value={formdata.state} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Country: </label>
                <input type="text" placeholder='Enter Country' name='country' value={formdata.country} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Pincode: </label>
                <input type="text" placeholder='Enter Pincode' name='pincode' value={formdata.pincode} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Department: </label>
                <input type="text" placeholder='Enter Department' name='department' value={formdata.department} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Designation: </label>
                <input type="text" placeholder='Enter Designation' name='designation' value={formdata.designation} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Job Title: </label>
                <input type="text" placeholder='Enter Job Title' name='jobtitle' value={formdata.jobtitle} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Reporting Manager: </label>
                <input type="text" placeholder='Enter Reporting Manager' name='reportingmanager' value={formdata.reportingmanager} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Joining Date: </label>
                <input type="date" placeholder='Enter Joining Date' name='joiningdate' value={formdata.joiningdate} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Employment Type: </label>
                <input type="text" placeholder='Enter Employment Type' name='employmenttype' value={formdata.employmenttype} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Work Location: </label>
                <input type="text" placeholder='Enter Work Location' name='worklocation' value={formdata.worklocation} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Employee Grade: </label>
                <input type="text" placeholder='Enter Employee Grade' name='employeegrade' value={formdata.employeegrade} onChange={handleChange} className='border border-solid p-2' />
                <label className=' font-serif'>Shift: </label>
                <input type="text" placeholder='Enter Shift' name='shift' value={formdata.shift} onChange={handleChange} className='border border-solid p-2' />

            </form>

            <div className='bg-green-600 p-2 m-2 mt-4 mx-70 w-20 h-10 text-center text-white rounded font-serif'>
                <button type='button' onClick={handleClick}>Submit</button>
            </div>

        </div>
    </>
  )
}

export default EmployeeDetails
