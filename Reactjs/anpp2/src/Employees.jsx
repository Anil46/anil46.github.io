import React,{useState} from "react"
export const Employees = () =>{
    const [employees, setemployees] = useState(["Anil","Rakesh","Srinu","Shiva","Sai","Mallesh"])
    return (
        <div>
            <ul>
                {employees.map((emp)=>{
                    return <li key={emp}>{emp}</li>
                })}
            </ul>
        </div>
    )
}