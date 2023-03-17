import React, { useState } from "react"
export const User = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    const handleInput = (e) => {
        // setfname(e.target.value)
        let newUser = { ...user }
        let nameofinput = e.target.name;
        newUser[nameofinput] = e.target.value;
        setuser(newUser)
    };
    const getUser = () => {
        console.log(user)
        clearForm()
    }
    const clearForm =() => {
        setuser({
            fname: "",
            lname: "",
            email: ""
        })
    }
    return (
        <div id="myform">
            <form>
                <label htmlFor="fname">First Name :</label>
                <input
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={(e) => {
                        handleInput(e)
                    }}
                />
                <br />
                <label htmlFor="lname">Last Name :</label>
                <input
                    type="text"
                    name="lname"
                    value={user.lname}
                    onChange={(e) => {
                        handleInput(e)
                    }}
                />
                <br />
                <label htmlFor="lname">Email :</label>
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={(e) => {
                        handleInput(e)
                    }}
                />
                <br />
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}