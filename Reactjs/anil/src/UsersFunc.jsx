import axios from "axios";
import React, { useEffect, useState } from "react";

export const UsersFunc = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        let Fake_Store_Users_Url = "https://fakestoreapi.com/users"
        axios.get(Fake_Store_Users_Url).then(({ data }) => {
            // console.log(data)
            setUsers(data)
        })
    })
    // const handledelete = (User)=>{
    //     let blncUsers = User.filter((User)=>User.id !== User.id)
    //     setUsers(blncUsers)
    // }
    return (
        <div>
            <h1>Hi From Users Function Component</h1>
            <ol>
                {Users.map((User) => {
                    return (
                        <li>
                            {User.username}
                            <br/>
                            {/* <button onClick={()=>{handledelete(User)}}>Delete User</button> */}
                        </li>

                    )

                })}
            </ol>
        </div>
    )
}