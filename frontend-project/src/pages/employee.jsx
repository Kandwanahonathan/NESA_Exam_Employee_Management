import React from "react";
import { useState } from "react";

export default function Employee() {
    const [employeeNumber,setEmployeeNumber]=useState(0)
    const [FirstName , setFirstName]=useState("")
    const [LastName , setLastName]=useState("")
    const [Position , setPosition]=useState("")
    const [Address , setAddress]=useState("")
    const [Telephone , setTelephone]=useState("")
    const [Gender , setGender]=useState("")
    const [hiredDate , sethiredDate]=useState("")
    
    async function employeeInsert() {
        try {
            const res=await axios.post('http://localhost:5000/API/addEmnployee',{
                employeeNumber,FirstName,LastName,Position,Address,Telephone,Gender,hiredDate
            })
        } catch (err) {
            
        }
    }

    return(
        <div>
            <div>
                <div></div>
            </div>
        </div>
    )


}