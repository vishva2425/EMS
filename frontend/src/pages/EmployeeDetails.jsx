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
            <form>
                <label>First Name: </label>
                <input type="text" name='firstname' value={formdata.firstname} onChange={handleChange} />
                <label>Last Name: </label>
                <input type="text" name='lastname' value={formdata.lastname} onChange={handleChange} />
                <label>Gender: </label>
                <input type="text" name='gender' value={formdata.gender} onChange={handleChange} />
                <label>Date of Birth: </label>
                <input type="date" name='dateofbirth' value={formdata.dateofbirth} onChange={handleChange} />
                <label>Blood Group: </label>
                <input type="text" name='bloodgroup' value={formdata.bloodgroup} onChange={handleChange} />
                <label>Martial Status: </label>
                <input type="text" name='maritalstatus' value={formdata.maritalstatus} onChange={handleChange} />
                <label>Email: </label>
                <input type="email" name='email' value={formdata.email} onChange={handleChange} />
                <label>Phone Number: </label>
                <input type="text" name='phonenumber' value={formdata.phonenumber} onChange={handleChange} />
                <label>Address: </label>
                <input type="text" name='address' value={formdata.address} onChange={handleChange} />
                <label>City: </label>
                <input type="text" name='city' value={formdata.city} onChange={handleChange} />
                <label>State: </label>
                <input type="text" name='state' value={formdata.state} onChange={handleChange} />
                <label>Country: </label>
                <input type="text" name='country' value={formdata.country} onChange={handleChange} />
                <label>Pincode: </label>
                <input type="text" name='pincode' value={formdata.pincode} onChange={handleChange} />
                <label>Department: </label>
                <input type="text" name='department' value={formdata.department} onChange={handleChange} />
                <label>Designation: </label>
                <input type="text" name='designation' value={formdata.designation} onChange={handleChange} />
                <label>Job Title: </label>
                <input type="text" name='jobtitle' value={formdata.jobtitle} onChange={handleChange} />
                <label>Reporting Manager: </label>
                <input type="text" name='reportingmanager' value={formdata.reportingmanager} onChange={handleChange} />
                <label>Joining Date: </label>
                <input type="date" name='joiningdate' value={formdata.joiningdate} onChange={handleChange} />
                <label>Employment Type: </label>
                <input type="text" name='employmenttype' value={formdata.employmenttype} onChange={handleChange} />
                <label>Work Location: </label>
                <input type="text" name='worklocation' value={formdata.worklocation} onChange={handleChange} />
                <label>Employee Grade: </label>
                <input type="text" name='employeegrade' value={formdata.employeegrade} onChange={handleChange} />
                <label>Shift: </label>
                <input type="text" name='shift' value={formdata.shift} onChange={handleChange} />

                <button type='button' onClick={handleClick}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default EmployeeDetails
