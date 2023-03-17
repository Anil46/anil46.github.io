import  React,{ useState } from "react"

export const Student = ()=>{
    const [Student, setStudent] = useState({
        id: 230,
        email: "JStudenka@at.net",
        username: "RAsfour",
        password: "T9FMq"
    })
    const handleRemove = (val)=>{
        console.log("handleRemove called ...", val)
        let newStudent = {...Student}
        delete newStudent[val]
        setStudent(newStudent)
    }
    return (
        <div>
            <ul>
                {Object.keys(Student).map((val)=>{
                    return <li key={val} onClick={()=>{handleRemove()}}>{val} : {Student[val]}</li>
                })}
            </ul>
        </div>
    )
}