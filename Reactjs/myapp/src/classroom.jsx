import React, { useState } from "react"
import { Students } from "./students"


export const ClassRoom = () => {
    const [students, setStudents] = useState(["Anil", "Naresh", "Mallesh", "Srinu"])
   const deleteStudent=(student)=>{
    let studentDetails = students.filter((std)=>std !== student)
    setStudents(studentDetails)
   }
   
   return <div>
        <Students allStudents={students} handleDelete={deleteStudent}/>
    </div>
}