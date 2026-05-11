import axios from 'axios';
import React,{useState} from 'react';

export default function Department() {
    const[DepartementCode, setDepartementCode]=useState(0)
    const[DepartementName, setDepartementName]=useState("")
    const[GrossSalary, setGrossSalary]=useState("")


    async function departmentInsert() {
        try {
            const res=await axios.post('http://localhost:5000/API/departmentInsert',{DepartementCode,DepartementName,GrossSalary});
            
            alert(res.data.message)
            setDepartementCode("")
            setDepartementName("")
            setGrossSalary("")
        } catch (err) {
            if(err.response){
                alert(err.response.data.message)
            }
        }
    }
 return(
    <div className='min-h-screen flex justify-center items-center '>

        <div className='rounded-lg w-[500px] shadow-lg p-8 border-green-500'>
            <h1 className='text-center text-green-600 font-bold mb-3'>Add Departments</h1>
            <div className='space-y-8'>
                <input type="text" value={DepartementCode} onChange={
                    (e)=>{setDepartementCode(e.target.value)}
                }  className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 p-3 rounded'placeholder='enter the DepartementCode'/>

                <input type="text" value={DepartementName} onChange={
                    (e)=>{setDepartementName(e.target.value)}
                }  className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 p-3 rounded'placeholder='enter the DepartementName'/>

                <input type="text" value={GrossSalary} onChange={
                    (e)=>{setGrossSalary(e.target.value)}
                }  className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 p-3 rounded'placeholder='enter the GrossSalary'/>
            </div>
            <button onClick={departmentInsert} className='text-white bg-green-400 w-full p-3 mt-3 hover:bg-green-600'>+ Adddepartment</button>
        </div>

    </div>
 )



}
