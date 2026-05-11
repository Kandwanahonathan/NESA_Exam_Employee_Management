import React from "react";
import { useState } from "react";
import axios from 'axios'

export default function Employee() {
    const [employeeNumber,setEmployeeNumber]=useState(0)
    const [FirstName , setFirstName]=useState("")
    const [LastName , setLastName]=useState("")
    const [Position , setPosition]=useState("")
    const [Address , setAddress]=useState("")
    const [Telephone , setTelephone]=useState("")
    const [Gender , setGender]=useState("")
    const [hiredDate , setHiredDate]=useState("")
    
    async function employeeInsert() {
        try {
            const res=await axios.post('http://localhost:5000/API/addEmnployee',{
                employeeNumber,FirstName,LastName,Position,Address,Telephone,Gender,hiredDate
            })
            alert(res.data.message)
        } catch (err) {
            if(err.response){
                alert(err.response.data.message)
            }
            else{
                alert('server is not reponding')
            }
            console.log(err)
        }
    }

    return(
        <div className="bg-gray-100 min-h-screen  flex justify-center items-center">
           
                <div className=" py-5 bg-white rounded-lg shadow-lg w-[500px] p-8 rounded-lg  shadow-lg">
                    <h1 className="font-bold text-center mb-3 text-green-500">Employee Registration</h1>
                    <div className="space-y-4 mb-3">
                        <input type="number" value={employeeNumber} onChange={(e)=>{setEmployeeNumber(e.target.value)}}   placeholder="enter the employeeNumber" className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}}   placeholder="enter the FirstName" className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={LastName} onChange={(e)=>{setLastName(e.target.value)}}   placeholder="enter the LastName"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={Position} onChange={(e)=>{setPosition(e.target.value)}}   placeholder="enter the Position"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={Address} onChange={(e)=>{setAddress(e.target.value)}}   placeholder="enter the Address"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={Telephone} onChange={(e)=>{setTelephone(e.target.value)}}   placeholder="enter the Telephone"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={Gender} onChange={(e)=>{setGender(e.target.value)}}   placeholder="enter the Gender"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <div className="space-y-4 mb-3">
                        <input type="text"  value={hiredDate} onChange={(e)=>{setHiredDate(e.target.value)}}   placeholder="enter the hiredDate"className="text-green-500 border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"/>
                    </div>
                    <button className="bg-green-400 text-white font-bold w-full p-2 mt-2 rounded-lg " onClick={employeeInsert}>+AddEmployee</button>
                </div>
            
        </div>
    )


}